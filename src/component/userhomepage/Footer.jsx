import React from 'react';
import { Link } from 'react-router-dom';
import CLALogo from './images/CLALogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="container-fluid bg-light py-5">
      <footer className="text-center text-lg-start text-dark">
        <section className="d-flex justify-content-between p-4 bg-info text-white">
          <div className="me-5"></div>
          <div>
            <a href="/" className="text-white me-4"><i className="fab fa-facebook-f"></i></a>
            <a href="/" className="text-white me-4"><i className="fab fa-twitter"></i></a>
            <a href="/" className="text-white me-4"><i className="fab fa-google"></i></a>
            <a href="/" className="text-white me-4"><i className="fab fa-instagram"></i></a>
            <a href="/" className="text-white me-4"><i className="fab fa-linkedin"></i></a>
            <a href="/" className="text-white me-4"><i className="fab fa-github"></i></a>
          </div>
        </section>
        <section className="pb-4">
          <div className="container text-center text-md-start">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <Link to="/" className="nav-link active">
                  <img src={CLALogo} width="auto" height="40" alt="clalogo" />
                </Link>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: 'white' }} />
                <p> Our platforms offer a vast array of electronic products, including smartphones, laptops, tablets, cameras, home appliances, gaming consoles, audio systems, and more. Customers can explore various brands, models, features, and price ranges conveniently from their homes.</p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p><a href="#!" className="text-dark">Laptop&Computers</a></p>
                <p><a href="#!" className="text-dark">Smart Watches</a></p>
                <p><a href="#!" className="text-dark">Smart Phones</a></p>
                <p><a href="#!" className="text-dark">Speakers</a></p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p><a href="#!" className="text-dark">Your Account</a></p>
                <p><a href="#!" className="text-dark">Become an Affiliate</a></p>
                <p><a href="#!" className="text-dark">Shipping Rates</a></p>
                <p><a href="#!" className="text-dark">Help</a></p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p><FontAwesomeIcon icon={faEnvelope} className="me-3" /> claelectronics@gmail.com </p>
                <p><FontAwesomeIcon icon={faPhone} />+ 01 234 567 88</p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-3 bg-dark text-white">
          © 2024 CLA Electronics. All Rights Reserved. Terms of use | Privacy policy.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
