// import React from 'react';
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

// export default function Footer() {
//   return (
//     <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
//       <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
//         <div className='me-5 d-none d-lg-block text-black'>
//           <span>Get connected with us on social networks:</span>
//         </div>

//         <div>
//           <a href='https://www.facebook.com/vedscienceandmaths/' className='me-4'>
//             <MDBIcon fab icon="facebook-f" />
//           </a>
//           <a href='https://www.youtube.com/@vedscienceandmaths' className='me-4'>
//             <MDBIcon fab icon="youtube" />
//           </a>
//           <a href='https://www.instagram.com/ved_scince_and_maths?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' className='me-4'>
//             <MDBIcon fab icon="instagram" />
//           </a>
//           <a href='https://x.com/jai_rry' className='me-4'>
//             <MDBIcon fab icon="twitter" />
//           </a>
//         </div>
//       </section>

//       <section className=''>
//         <MDBContainer className='text-center text-md-start mt-5'>
//           <MDBRow className='mt-3'>
//             <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4 text-black'>
//               <h6 className='text-uppercase fw-bold mb-4'>
//                 <MDBIcon icon="gem" className="me-3" />
//                 Ved Science & Maths
//               </h6>
//               <p>
//               Ved Science & Maths: Your gateway to insightful news and historical knowledge,
//               Dedicated to delivering quality newsvlog and historical content for curious minds.
//               </p>
//             </MDBCol>

//             <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 text-black'>
//               <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Angular
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   React
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Vue
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Laravel
//                 </a>
//               </p>
//             </MDBCol>

//             <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 text-black'>
//               <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Pricing
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Settings
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Orders
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Help
//                 </a>
//               </p>
//             </MDBCol>

//             <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4  text-black'>
//               <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
//               <p>
//                 <MDBIcon icon="home" className="me-2" />
//                 Indore, MP 56433, India
//               </p>
//               <p>
//                 <MDBIcon icon="envelope" className="me-3" />
//                 vedscienceandmaths@gmail.com
//               </p>
//               <p>
//                 <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
//               </p>
//               <p>
//                 <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
//               </p>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       </section>

//       <div className='text-center p-4 text-black' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
//         © 2024 Copyright:
//         <a className='text-black fw-bold' href='https://mdbootstrap.com/'>
//            vedscienceandmaths.com
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }


import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter, FaGem, FaHome, FaEnvelope, FaPhone, FaPrint } from 'react-icons/fa';
import './Footer.css'; 

export default function Footer() {
  return (
    <footer className='footer'>
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
          </div>

          <div className='footer-col'>
            <h6 className='footer-title'>Products</h6>
            <p><a href='#!' className='footer-link'>Angular</a></p>
            <p><a href='#!' className='footer-link'>React</a></p>
            <p><a href='#!' className='footer-link'>Vue</a></p>
            <p><a href='#!' className='footer-link'>Laravel</a></p>
          </div>

          <div className='footer-col'>
            <h6 className='footer-title'>Useful links</h6>
            <p><a href='#!' className='footer-link'>Pricing</a></p>
            <p><a href='#!' className='footer-link'>Settings</a></p>
            <p><a href='#!' className='footer-link'>Orders</a></p>
            <p><a href='#!' className='footer-link'>Help</a></p>
          </div>

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

      <div className='footer-bottom'>
        © 2024 Copyright:
        <a className='footer-link' href='https://mdbootstrap.com/'>
          vedscienceandmaths.com
        </a>
      </div>
    </footer>
  );
}
