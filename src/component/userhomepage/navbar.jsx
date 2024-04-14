import React from "react";
import { Link } from 'react-router-dom';
import CategoryDropdown from "./Categorydropdown";



function HomeNavbar() {
    return (
        <>
        
            <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link to="/shop" className="nav-link active text-light active home" style={{ marginLeft: '100px', fontSize: '20px', fontWeight: 'bold', color: 'red', textDecoration: 'none' }}>
                                    <CategoryDropdown />
                                  
                                </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                           
                            <li className="nav-item">
                                <Link to="/userhome" className="nav-link active text-light active home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/shop" className="nav-link text-light ">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link text-light ">AboutUs</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link  text-light">Contact Us</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </>
    );
} export default HomeNavbar;
