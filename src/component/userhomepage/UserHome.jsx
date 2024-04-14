import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/userhome.css';
import './css/brand.css';
//import "../userhomepage/css/banner.css"
import brand1 from './images/brand1.jpeg';
import brand2 from './images/brand2.jpeg';
import brand3 from './images/brand3.jpeg';
import brand4 from './images/brand4.jpeg';
import brand5 from './images/brand5.jpeg';
import brand6 from './images/brand6.jpeg';
import homebanner from './images/homebanner.jpeg';
import homebanner1 from './images/homebanner1.jpg';
import laptop from './images/laptop.jpeg';
import Samsung2 from './images/Samsung2.jpeg';
import speaker from './images/speaker.jpeg';
import Fire3 from './images/Fire3.jpeg';
import M1 from './images/M1.jpg';
import camera1 from './images/camera1.jpg';
import banner4 from "../userhomepage/images/banner4.jpg"

import banner5 from "../userhomepage/images/banner5.png"
import Headertop from './HeaderTop';
import Footer from './Footer';
import HomeNavbar from './navbar';
import Cart from './Cart';
import SideNav from './sidenav';
import Banner from './banner';


const UserHome = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  return (
    <>
      <Headertop size={cart.length} setShow={setShow} />
      <HomeNavbar />


      {/**Bottom nav */}
      <div class="container1">
        <div class="container1">
          <ol class="breadcrumb ">
            <li class="list-item px-2 text-secondary ">
              <Link to="/userhome">Home</Link>
            </li>
            <li class="list-item px-2 text-secondary">
              <Link to="/shop">Shop</Link>
            </li>
            <li class="list-item px-2 text-secondary">
              <Link to="/shop">Electronics</Link>
            </li>

          </ol>
        </div>
      </div>
      {/** Bottom nav*/}

      {/***Slider */}
      
      <div id="carouselExampleControls" className="carousel slide centered-carousel" data-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item">
            <img className="d-block w-100" src={homebanner} alt="Third slide" />
            <div className="position-absolute top-50 start-0 translate-middle-y p-3">
              <h2 style={{ color: 'grey' }}>MacBook Air Latest Model</h2>
              <p style={{ fontSize: '30px', color: 'grey' }}>from <span style={{ fontSize: '50px', color: '#007FFF', fontWeight: 'bold' }}>Rs 87,900</span></p>
              <a href="#" className="btn btn-secondary">Shop Now <i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
          <div className="carousel-item active">
            <img className="d-block w-100" src={homebanner1} alt="First slide" />
            <div className="position-absolute top-50 start-0 translate-middle-y p-3">
              <p style={{ color: 'grey' }}>Weekend Deal</p>
              <h3 style={{ fontFamily: 'sans-serif' }}>Apple & Accessories</h3>
              <a href="#" className="btn btn-secondary">Shop Now <i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
          
          <div className="carousel-item">
            <img className="d-block w-100" src={homebanner} alt="Third slide" />
            <div className="position-absolute top-50 start-0 translate-middle-y p-3">
              <h2 style={{ color: 'grey' }}>MacBook Air Latest Model</h2>
              <p style={{ fontSize: '30px', color: 'grey' }}>from <span style={{ fontSize: '50px', color: '#007FFF', fontWeight: 'bold' }}>Rs 87,900</span></p>
              <a href="#" className="btn btn-secondary">Shop Now <i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/**Slider */}

          



      {/***Animated Shop By Brand */}
      <div>

        <div class="text-center">
          <h4 class="cardhead">Shop by Brands</h4>
        </div>
        <marquee>
          <div class="scroll-container">
            <ul class="brand-list">
              <li><img src={brand3} alt=" brand3" /></li>
              <li><img src={brand2} alt=" brand2" /></li>
              <li><img src={brand4} alt=" brand4" /></li>
              <li><img src={brand1} alt=" brand1" /></li>
              <li><img src={brand5} alt=" brand5" /></li>
              <li><img src={brand6} alt=" brand6" /></li>


            </ul>
          </div>
        </marquee>
      </div>
      {/***Animated Shop By Brand */}


      {/****Explore Popular Categories*/}

      <div class="text-center">
        <h4 className="cardhead">Explore Popular Categories</h4>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row' }}>

        <div className="card" style={{ width: "12rem", height: "10rem", margin: "10px", border: "none" }}>
          <Link to="/shop" >
            <img className="card-img-top" src={laptop} alt="Card image cap" style={{ width: "150px", height: "150px", margin: "auto" }} />
          </Link>
          <div className="card-body" style={{ display: 'flex', justifyContent: 'center' }}>
            <h3 className="card-des">Computer & Laptop</h3>
          </div>
        </div>
        <div className="card" style={{ width: "12rem", height: "10rem", margin: "10px", border: "none" }}>
          <Link to="/shop" >
            <img className="card-img-top" src={camera1} alt="Card image cap" style={{ width: "150px", height: "150px", margin: "auto" }} />
          </Link>
          <div className="card-body" style={{ display: 'flex', justifyContent: 'center' }}>
            <h3 className="card-des">Camera</h3>
          </div>
        </div>
        <div className="card" style={{ width: "12rem", height: "10rem", margin: "10px", border: "none" }}>
          <Link to="/shop" >
            <img className="card-img-top" src={Samsung2} alt="Card image cap" style={{ width: "150px", height: "150px", margin: "auto" }} />
          </Link>
          <div className="card-body" style={{ display: 'flex', justifyContent: 'center' }}>
            <h3 className="card-des">Smart Phones</h3>
          </div>

        </div>
        <div className="card" style={{ width: "12rem", height: "10rem", margin: "10px", border: "none" }}>
          <Link to="/shop" >
            <img className="card-img-top" src={M1} alt="Card image cap" style={{ width: "150px", height: "150px", margin: "auto" }} />
          </Link>
          <div className="card-body" style={{ display: 'flex', justifyContent: 'center' }}>
            <h3 className="card-des">Monitor</h3>
          </div>
        </div>
        <div className="card" style={{ width: "12rem", height: "10rem", margin: "10px", border: "none" }}>
          <Link to="/shop" >
            <img className="card-img-top" src={speaker} alt="Card image cap" style={{ width: "150px", height: "150px", margin: "auto" }} />
          </Link>
          <div className="card-body" style={{ display: 'flex', justifyContent: 'center' }}>
            <h3 className="card-des">Audio</h3>
          </div>
        </div>
        <div className="card" style={{ width: "12rem", height: "10rem", margin: "10px", border: "none" }}>
          <Link to="/shop" >
            <img className="card-img-top" src={Fire3} alt="Card image cap" style={{ width: "150px", height: "150px", margin: "auto" }} />
          </Link>
          <div className="card-body" style={{ display: 'flex', justifyContent: 'center' }}>
            <h3 className="card-des">Smart Watches</h3>
          </div>
        </div>

      </div>







      <div className='container-fluid mt-5' style={{ backgroundColor: '#FAF9F6', width: '100%', height: '400px' }}>
      </div>















      <Banner />


      {/****Explore Popular Categories*/}
      {/***Footer */}
      <Footer />
    </>



  )
}

export default UserHome;