// Features
import React from 'react';
import './Features.css';

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="content">
        <h1 className="heading">
          our
          {' '}
          <span>Courses</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <img src="https://tse2.mm.bing.net/th?id=OIP.vQpA3TUhXqnP5P7Lg4tBzAAAAA&pid=Api&P=0&h=180" alt="" width="250"height="30" />
            <h3>Java</h3>
            <p>Java Course</p>
            <a href="/" className="btn">read more</a>
          </div>
          <div className="box">
            <img src="https://tse3.mm.bing.net/th?id=OIP.oiUaik6-2qXLvOQzMuf3ggHaEK&pid=Api&P=0&h=180" alt="" />
            <h3>Python</h3>
            <p>Python course</p>
            <a href="/" className="btn">read more</a>
          </div>
          <div className="box">
            <img src="https://tse2.mm.bing.net/th?id=OIP.6NEqeSkxgEjYiHYUAkdZXwHaEK&pid=Api&P=0&h=180" alt="" />
            <h3>Full Stack Development</h3>
            <p>Full Stack Development Course</p>
            <a href="/" className="btn">read more</a>
          </div>
        </div>
      </div>
    </section>
  );
}
