import React from 'react';

function AboutUs() {
  return (
    <div className="about-us-container" style={{ padding: '20px', textAlign: 'center' }}>
      <h2 className="about-us-heading">About Us</h2>
      <p className="about-us-description" style={{ fontSize: '16px', margin: '10px 0' }}>
        Welcome to Paradise Nursery, your premier destination for lush green foliage and vibrant plants!
      </p>
      <p className="about-us-content" style={{ color: '#ccc', fontSize: '14px', maxWidth: '600px', margin: '0 auto 10px auto' }}>
        At Paradise Nursery, we believe that bringing nature indoors transforms lives. Our team of passionate horticulturists is dedicated to curating the finest selection of air-purifying, aromatic, and medicinal plants.
      </p>
      <p className="about-us-content" style={{ color: '#ccc', fontSize: '14px' }}>
        Join us in creating greener, healthier living spaces—one plant at a time!
      </p>
    </div>
  );
}

export default AboutUs;
