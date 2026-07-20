import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    "/screen/Screenshot_20260717-123431.webp",
    "/screen/Screenshot_20260717-123532.webp",
    "/screen/Screenshot_20260717-123717.webp",
    "/screen/Screenshot_20260717-123557.webp"
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">A <span className="text-gradient">Stunning</span> Interface.</h2>
          <p className="section-subtitle">
            Finance apps shouldn't look like spreadsheets. Aletheia brings a beautiful, fluid, and dark-themed UI to your personal budget.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((src, index) => (
            <div key={index} className={`gallery-item animate-fade-in-up delay-${(index + 1) * 100}`}>
              <img src={src} alt="App Screenshot" width="720" height="1611" loading="lazy" className="gallery-img" />
              <div className="gallery-overlay glass-panel"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
