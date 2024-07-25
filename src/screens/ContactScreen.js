import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactStyle.css';
import Header from '../component/Header';
import Footer from '../component/Footer';

const ContactScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const emailParams = {
      to_name: 'Kundan Yadav',  // Replace with your name or dynamically set it
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(
      'service_6ipg0j9', // Replace with your Service ID
      'template_jinmg7r', // Replace with your Template ID
      emailParams,
      'pBBGnjBBdFaBeMqYT' // Replace with your User ID
    )
    .then(
      (result) => {
        console.log(result.text);
        alert('Message Sent!');
      },
      (error) => {
        console.log(error.text);
        alert('Message Not Sent!');
      }
    )
    .finally(() => {
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    });
  };

  return (
   <>
   <Header/>
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default ContactScreen;
