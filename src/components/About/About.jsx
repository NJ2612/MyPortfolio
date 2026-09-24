import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="section-header right">
        <div className="section-line"></div>
        <h2 className="section-title">ABOUT</h2>
      </div>

      <div className="about-content">
        <div className="about-copy">
          <p>
            I design and build intelligent systems that turn <span className="keyword">raw data</span>,
            <span className="keyword"> technical complexity</span>, and
            <span className="keyword"> real-world constraints</span> into
            <span className="lead-word"> operational tools</span>. My work spans AI pipelines,
            full-stack products, optimization systems, and human-centered interfaces.
          </p>

          <p>
            I care about building systems that are <span className="principle">EXPLAINABLE</span>,
            <span className="principle"> RELIABLE</span>, and
            <span className="principle"> USEFUL</span> in practice—whether that means
            <span className="secondary-line">early-warning models, automation platforms, and
            decision-support tools.</span>
            <span className="work-tags" aria-label="areas of work">
              <span>early-warning models</span>
              <span>automation platforms</span>
              <span>decision-support tools</span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
