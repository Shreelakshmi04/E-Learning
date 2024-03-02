// Banner
import React from 'react';
import './Banner.css';

export default function Banner() {
  return (
    <section
      className="banner"
      id="banner"
      style={{
     background: 'url("https://s.udemycdn.com/browse_components/billboard/fallback_banner_image_udlite.jpg") no-repeat',
     backgroundPosition: 'center',
     backgroundSize: ' ',
      }}
    >
      <div className="content">
        <h3>
           
          {' '}
          <span>E-Learning</span>
          {' '}
          
        </h3>
        <p style={{fontFamily:"cursive",color:"black"}}>
        In the digital age of education, developing a frontend for an E-Learning app clone
using React opens avenues for accessible and engaging online learning. Craft a
user-friendly interface that empowers students to navigate, learn, and collaborate
seamlessly, enhancing the experience of virtual education.
        </p>
        <button type="button" className="btn">
          Quick Learn
        </button>
      </div>
    </section>
  );
}
