import React from 'react';
import { Link } from 'react-router-dom';
import  Header  from "../component/Header";
import './AboutStyle.css';

const AboutScreen = () => {
  return (
    <div>
    < Header />
   <Link to="/books">Go to book</Link>
   <h1>About Us</h1>
   <div class="paragraph">
     <div class="para-one">
       <p> <b> At Ved Science & Maths, We are on a mission to to bridge <br/> the gap between Ancient Bhartiya wisdom
        and modern <br/> science by fostering the "Sanatan Science Enthusiants" <br/>community. Rooted in the rich heritage 
        of the Sanatan <br/>Dharma, our platform aims to provide a space where <br/> individuals can come together, learn,
        and share <br/> knowledge that aligns with both ancient wisdom and <br/> contemporary scientific understanding.  </b></p>
     </div>
     <div class="para-two">
        <p><b>Ved Science & Maths is more than just a platform; it's a <br/> community and every single member of this community <br/> is called
         a "Sanatan Science Enthusiants". Our platform <br/> serves as a hub for curious minds to learn from each <br/> other. Here, all enthusiants
         can read 80+ free e-Books.</b>
        </p>
        <div class="para-three">
         <p><b>
           Become a part of our Sanatan Science Enthusiants  <br/>community and embark on a journey of exploring and<br/> learning 
           the Ancient wisdom. Let's explore the universe's <br/> mysteries together and uncover the connections that<br/>      unite us all.
           </b></p>
        </div>
        <div class="para-four">
         <p><b>Connect with Ved Science & Maths and be a Sanatan<br/> Science Enthusiants.</b> </p>
        </div>
     </div>
   </div>
 </div>
  );
};

export default AboutScreen;
