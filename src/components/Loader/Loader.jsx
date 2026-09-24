import React, { useEffect } from 'react';
import './Loader.css';

const Loader = ({ onComplete }) => {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reducedMotion ? 1400 : 2400;
    const timer = window.setTimeout(() => {
      if (typeof onComplete === 'function') {
        onComplete();
      }
    }, duration);

    return () => window.clearTimeout(timer);
  }, [onComplete]);

  const horizontalLines = [
    { top: '16%', left: '14%', width: '72%', delay: '0.1s' },
    { top: '30%', left: '18%', width: '64%', delay: '0.18s' },
    { top: '50%', left: '22%', width: '56%', delay: '0.26s' },
    { top: '68%', left: '18%', width: '64%', delay: '0.34s' },
    { top: '84%', left: '14%', width: '72%', delay: '0.42s' }
  ];

  const verticalLines = [
    { left: '24%', top: '16%', height: '68%', delay: '0.2s' },
    { left: '50%', top: '18%', height: '64%', delay: '0.28s' },
    { left: '76%', top: '16%', height: '68%', delay: '0.36s' }
  ];

  return (
    <div className="blueprint-loader" aria-live="polite" aria-label="Blueprint loading sequence">
      <div className="blueprint-frame">
        <div className="blueprint-grid" aria-hidden="true">
          {horizontalLines.map((line, index) => (
            <span
              key={`h-${index}`}
              className="construction construction-horizontal"
              style={{ top: line.top, left: line.left, width: line.width, animationDelay: line.delay }}
            />
          ))}

          {verticalLines.map((line, index) => (
            <span
              key={`v-${index}`}
              className="construction construction-vertical"
              style={{ left: line.left, top: line.top, height: line.height, animationDelay: line.delay }}
            />
          ))}

          {[
            { left: '14%', top: '16%', width: '22%', delay: '0.48s' },
            { left: '64%', top: '16%', width: '22%', delay: '0.54s' },
            { left: '18%', top: '84%', width: '18%', delay: '0.6s' },
            { left: '64%', top: '84%', width: '18%', delay: '0.66s' }
          ].map((item, index) => (
            <span
              key={`marker-${index}`}
              className="construction construction-marker"
              style={{ left: item.left, top: item.top, width: item.width, animationDelay: item.delay }}
            />
          ))}
        </div>

        <div className="monogram" aria-hidden="true">
          <span className="monogram-stroke monogram-n-left" />
          <span className="monogram-stroke monogram-n-right" />
          <span className="monogram-stroke monogram-n-diagonal" />
          <span className="monogram-stroke monogram-j-vertical" />
          <span className="monogram-stroke monogram-j-bottom" />
        </div>

        <div className="identity-block" aria-live="polite">
          <div className="identity-name">NAINA JOSHI</div>
          <div className="identity-meta">COMPUTER SCIENCE · AI &amp; DATA</div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
