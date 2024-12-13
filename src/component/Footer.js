import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter, FaGem, FaHome, FaEnvelope, FaPhone, FaPrint } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <section className='footer-container'>
        <div className='footer-row'>
          <div className='footer-col'>
            <h6 className='footer-title'>
              <FaGem className='icon' />
              Ved Science & Maths
            </h6>
            <p>
              Ved Science & Maths: Your gateway to insightful news and historical knowledge,
              Dedicated to delivering quality newsvlog and historical content for curious minds.
            </p>

            <div className='text-gray-600 mt-4'>
              © 2024 Copyright:
              <a className='text-gray-600' href='/'>
                vedscienceandmaths.com
              </a>
            </div>
          </div>

          {/* <div className='footer-col'>
            <h6 className='footer-title'>Products</h6>
            <p><a href='#!' className='footer-link'>Books</a></p>
            <p><a href='#!' className='footer-link'>Cards</a></p>
            <p><a href='#!' className='footer-link'>Instrument</a></p>
            <p><a href='#!' className='footer-link'>E-Notes</a></p>
          </div> */}

          {/* <div className='footer-col'>
            <h6 className='footer-title'>Useful links</h6>
            <p><a href='#!' className='footer-link'>Pricing</a></p>
            <p><a href='#!' className='footer-link'>Settings</a></p>
            <p><a href='#!' className='footer-link'>Orders</a></p>
            <p><a href='#!' className='footer-link'>Help</a></p>
          </div> */}

          <div className='footer-col'>
            <h6 className='footer-title'>Contact</h6>
            <p className='footer-contact'>
              <FaHome className='icon' />
              Indore, MP 56433, India
            </p>
            <p className='footer-contact'>
              <FaEnvelope className='icon' />
              vedscienceandmaths@gmail.com
            </p>
            <p className='footer-contact'>
              <FaPhone className='icon' />
              + 01 234 567 88
            </p>
            <p className='footer-contact'>
              <FaPrint className='icon' />
              + 01 234 567 89
            </p>
          </div>
        </div>
      </section>

      {/* <div className='footer-bottom'>
        © 2024 Copyright:
        <a className='footer-link' href='https://mdbootstrap.com/'>
          vedscienceandmaths.com
        </a>
      </div> */}

      <section className='footer-section'>
        <div className='social-text'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div className='social-links'>
          <a href='https://www.facebook.com/vedscienceandmaths/' className='footer-link text-primary'>
            <FaFacebookF />
          </a>
          <a href='https://www.youtube.com/@vedscienceandmaths' className='footer-link text-danger'>
            <FaYoutube />
          </a>
          <a href='https://www.instagram.com/ved_scince_and_maths?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' className='footer-link'>
            <FaInstagram />
          </a>
          <a href='https://x.com/jai_rry' className='footer-link text-primary'>
            <FaTwitter />
          </a>
        </div>
      </section>

    </footer>
  );
}
