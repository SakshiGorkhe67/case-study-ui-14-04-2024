import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import homebanner from './images/homebanner.jpeg';
import homebanner1 from './images/homebanner1.jpg';
import homebanner3 from './images/homebanner3.jpg';
import laptop from './images/laptop.jpeg';
import Headertop from "./HeaderTop";
import HomeNavbar from "./navbar";
import Footer from "./Footer";
import "../userhomepage/css/shop.css";
import list from "../userhomepage/data";
import Cards from "./Cards";
import Banner from './banner';


function Shop({ handleClick }) {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          return cartItem;
        }
      }));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <>
      <Headertop size={cart.length} setShow={setShow} />
      <HomeNavbar />

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

      <div id="carouselExampleControls" className="carousel slide centered-carousel" data-ride="carousel">
        <div className="carousel-inner">
      
          
          <div className="carousel-item active">
            <img className="d-block w-100" src={homebanner1} alt="First slide" />
            <div className="position-absolute top-50 start-0 translate-middle-y p-3">
              <p style={{ color: 'grey' }}>Weekend Deal</p>
              <h3 style={{ fontFamily: 'sans-serif' }}>Apple & Accessories</h3>
              <a href="#" className="btn btn-secondary">Shop Now <i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={homebanner3} alt="Second slide" />
            <div className="carousel-caption text-right">
              <p className="text-muted">Amazing Value</p>
              <h4 className="text-black">High Performance 4K TVs</h4>
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

      <section class="item-section">
        {
          list.map((item) => (
            <Cards item={item} key={item.id} handleClick={() => addToCart(item)} />
          ))
        }
      </section>


      <Banner />
      <Footer />

    </>
  );
} export default Shop;