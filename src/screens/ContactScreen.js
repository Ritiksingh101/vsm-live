import React from 'react';
import { Link } from 'react-router-dom';
import  Header  from "../component/Header";
import './ContactStyle.css';

const ContactScreen = () => {
    return(
        <div>
          <Header/>
          <h1>Contact</h1>
          <div class="ContactScreen">
             <div class="para-one"> <br/>
                <p><b>Feel free to get in touch with us for any brand <br/>
                collaboration or promotional opportunities at our <br/>
                Gmail address: vedscienceandmaths@gmail.com</b></p>
             </div>
             <div class="para-one">
              <p><b> We are excited to explore mutually beneficial <br/>
                partnerships and creative collaborations that align with <br/>
                our mission and values. <br/>
                Let's work together to create impactful and engaging <br/>
                content for our community. <br/>
                Looking forward to hearing from you!</b></p>
             </div>
          </div>
        </div>
    )
}
export default ContactScreen;