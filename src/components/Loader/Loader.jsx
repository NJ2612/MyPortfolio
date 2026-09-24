import React, { useEffect, useRef } from 'react';
import './Loader.css';

const palette = {
  background: '#0D1017',
  node: '#B8C7FF',
  active: '#FF8A72',
  secondary: '#8FE0C0',
  text: '#F1F3F7',
  muted: '#8E96A8'
};

const nodeBlueprint = [
  [-0.42, -0.34, 'node'], [-0.42, -0.08, 'node'], [-0.42, 0.2, 'secondary'],
  [-0.42, 0.48, 'node'], [-0.22, -0.16, 'active'], [-0.02, -0.34, 'node'],
  [-0.02, 0.08, 'node'], [-0.02, 0.48, 'secondary'], [0.18, -0.34, 'node'],
  [0.18, -0.08, 'node'], [0.18, 0.22, 'active'], [0.18, 0.48, 'node'],
  [0.42, -0.34, 'secondary'], [0.42, -0.08, 'node'], [0.42, 0.2, 'node'],
  [0.42, 0.48, 'active'], [-0.3, -0.52, 'node'], [-0.1, -0.5, 'node'],
  [0.1, -0.52, 'secondary'], [0.3, -0.5, 'node'], [-0.3, 0.62, 'node'],
  [-0.08, 0.64, 'node'], [0.18, 0.62, 'secondary'], [0.36, 0.6, 'node'],
  [-0.56, -0.18, 'node'], [0.56, -0.18, 'node'], [-0.56, 0.3, 'secondary'],
  [0.56, 0.32, 'node'], [-0.18, 0.3, 'node'], [0.28, 0.04, 'active']
];

const colorFor = (type) => palette[type] || palette.node;
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const ease = (value) => 1 - Math.pow(1 - value, 3);

const Loader = ({ onComplete }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nodes = [];
    let animationFrame = 0;
    let startTime = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * ratio);
      canvas.height = Math.round(window.innerHeight * ratio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const scale = Math.min(window.innerWidth, window.innerHeight) * 0.42;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2 - (window.innerWidth < 640 ? 26 : 12);
      nodes.splice(0, nodes.length);

      const blueprint = window.innerWidth < 640 ? nodeBlueprint.slice(0, 18) : nodeBlueprint;
      blueprint.forEach(([targetX, targetY, type], index) => {
        const spread = 1.4;
        nodes.push({
          x: centerX + targetX * scale * spread,
          y: centerY + targetY * scale * spread,
          targetX: centerX + targetX * scale,
          targetY: centerY + targetY * scale,
          type,
          radius: index % 5 === 0 ? 3.5 : index % 3 === 0 ? 3 : 2.3,
          delay: (index % 8) * 0.035
        });
      });
    };

    const draw = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      const discovery = clamp(elapsed / 0.55, 0, 1);
      const organization = ease(clamp((elapsed - 0.55) / 1.05, 0, 1));
      const identity = reducedMotion ? 1 : clamp((elapsed - 1.55) / 0.3, 0, 1);
      const retreat = clamp((elapsed - 2.05) / 0.45, 0, 1);
      const width = window.innerWidth;
      const height = window.innerHeight;

      context.clearRect(0, 0, width, height);
      context.fillStyle = palette.background;
      context.fillRect(0, 0, width, height);

      nodes.forEach((node) => {
        const nodeProgress = reducedMotion ? 1 : clamp((discovery - node.delay) / 0.35, 0, 1);
        const movement = reducedMotion ? 1 : organization;
        node.renderX = node.x + (node.targetX - node.x) * movement;
        node.renderY = node.y + (node.targetY - node.y) * movement;
        node.opacity = nodeProgress * (1 - retreat * 0.75);
      });

      nodes.forEach((node, index) => {
        nodes.slice(index + 1).forEach((other) => {
          const dx = node.renderX - other.renderX;
          const dy = node.renderY - other.renderY;
          const distance = Math.hypot(dx, dy);
          const maximumDistance = Math.min(width, height) * 0.19;
          if (distance > maximumDistance) return;

          const connectionProgress = reducedMotion
            ? 1
            : clamp((elapsed - 0.38 - ((index + other.radius) % 5) * 0.035) / 0.72, 0, 1);
          const opacity = Math.min(node.opacity, other.opacity) * connectionProgress * 0.32 * (1 - retreat);
          context.strokeStyle = node.type === 'active' || other.type === 'active'
            ? `rgba(255, 138, 114, ${opacity})`
            : `rgba(184, 199, 255, ${opacity})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(node.renderX, node.renderY);
          context.lineTo(other.renderX, other.renderY);
          context.stroke();
        });
      });

      nodes.forEach((node) => {
        context.globalAlpha = node.opacity;
        context.fillStyle = colorFor(node.type);
        context.beginPath();
        context.arc(node.renderX, node.renderY, node.radius, 0, Math.PI * 2);
        context.fill();
      });
      context.globalAlpha = 1;

      if (identity > 0) {
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.globalAlpha = identity * (1 - retreat);
        context.fillStyle = palette.text;
        context.font = `600 ${Math.min(width * 0.065, 64)}px "Space Grotesk", sans-serif`;
        context.fillText('NAINA JOSHI', width / 2, height / 2 + Math.min(width * 0.2, 150));
        context.globalAlpha = identity * 0.7 * (1 - retreat);
        context.fillStyle = palette.muted;
        context.font = `${Math.min(width * 0.016, 13)}px "JetBrains Mono", monospace`;
        context.fillText('COMPUTER SCIENCE · AI & DATA', width / 2, height / 2 + Math.min(width * 0.245, 184));
        context.globalAlpha = 1;
      }

      if (elapsed >= (reducedMotion ? 0.8 : 2.5)) {
        cancelAnimationFrame(animationFrame);
        if (typeof onComplete === 'function') onComplete();
        return;
      }

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    if (reducedMotion) {
      nodes.forEach((node) => {
        node.x = node.targetX;
        node.y = node.targetY;
      });
    }
    animationFrame = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, [onComplete]);

  return (
    <div className="network-loader" aria-live="polite" aria-label="Assembling Naina Joshi identity">
      <canvas ref={canvasRef} className="network-loader__canvas" />
    </div>
  );
};

export default Loader;
