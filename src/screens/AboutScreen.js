import React from 'react';
import './AboutStyle.css';
import Header from '../component/Header'
import Footer from '../component/Footer'

export default function AboutScreen() {
  return (
    <>
    <Header/>
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Discover more about our journey, mission, and values.</p>
      </header>
      
      <section className="about-section">
        <div className="about-image-wrapper">
          <img src="/images/about-1.jpeg" alt="Our Team" className="about-image" />
        </div>
        <div className="about-content">
          <h2>Our Journey</h2>
          <p>
            Our story began in 2010, with a small team of passionate individuals who wanted to make a difference in the world of technology and education. Over the years, we have grown into a dedicated team that strives to deliver quality content and services to our audience.
          </p>
        </div>
      </section>
      
      <section className="about-section">
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide insightful news and historical knowledge to curious minds. We believe in the power of information and strive to create a platform that delivers quality content to our audience.
          </p>
        </div>
        <div className="about-image-wrapper">
          <img src="/images/about-2.jpg" alt="Mission" className="about-image" />
        </div>
      </section>
      
      <section className="about-section">
        <div className="about-image-wrapper">
          <img src="/images/about-1.jpeg" alt="Values" className="about-image" />
        </div>
        <div className="about-content">
          <h2>Our Values</h2>
          <ul>
            <li>Integrity: We believe in doing the right thing, always.</li>
            <li>Innovation: We are constantly seeking new ways to improve and innovate.</li>
            <li>Commitment: We are dedicated to delivering quality content and services.</li>
            <li>Community: We believe in the power of community and strive to build a strong and supportive network.</li>
          </ul>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}
