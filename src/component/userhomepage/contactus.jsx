import React from 'react';
import { Link } from 'react-router-dom';
import '../userhomepage/css/contactus.css';

import Headertop from './HeaderTop';
import HomeNavbar from './navbar';
import Footer from './Footer';

function ContactUs() {
  return (
    <div>
        <Headertop/>
        <HomeNavbar/>
    <div className="container mt-5">
     
    <h2 className="text-center mb-5 colorful-heading">Contact Us</h2>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Type your message"></textarea>
            </div>
          <Link to="/userhome">  <button type="submit" className="btn btn-primary">Submit</button></Link>
          </form>
        </div>
        <div className="col-md-6 contact-info">
          <h4>Contact Information</h4>
          <p><strong>Address:</strong> 123 Main Street,Mumbai</p>
          <p><strong>Email:</strong> claelectronics@example.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <h4>Business Hours</h4>
          <p><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM</p>
          <p><strong>Saturday - Sunday:</strong> Closed</p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default ContactUs;
