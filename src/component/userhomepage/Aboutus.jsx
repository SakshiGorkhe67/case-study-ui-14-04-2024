import React from 'react';
import Footer from './Footer';
import Headertop from './HeaderTop';
import HomeNavbar from './navbar';
import '../userhomepage/css/contactus.css'
import '../userhomepage/css/aboutus.css'

function AboutUs() {
  return (
    <div>
        <Headertop/>
        <HomeNavbar/>
      <header className="container-fluid py-5 bg-light">
        <div className="container">
          {/* Header content */}
          <h2 className="text-center mb-5 colorful-heading">About Us</h2>
        </div>
      </header>

      <main className="container py-5 bg-light">
  <section id="introduction" className="mb-5">
    <div className="row">
      <div className="col-md-8 mx-auto">
        <div className="card p-4 shadow" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <h2 className="text-center mb-4" style={{ color: '#007bff', fontSize: '24px', textTransform: 'uppercase' }}>Our Story</h2>
          <p className="text-center" style={{ color: '#333333', fontSize: '16px' }}>Welcome to Electronics E-Commerce, your go-to destination for high-quality electronics products. Founded in [2024], our mission is to provide customers with innovative gadgets, superior customer service, and a seamless shopping experience.</p>
        </div>
      </div>
    </div>
  </section>
</main>


     <Footer/>
    </div>
  );
}

export default AboutUs;
