import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import CLALogo from './images/CLALogo.png';
import "../userhomepage/css/headerTop.css" // Import the external CSS file for styling

const Headertop = ({size, setShow}) => {
    return (
        <>
            {/* Top header */}
            <header className="header-top">
                <div className="container">
                    <div className="header-top-content">
                        <ul className="header-top-list">
                            <li className="header-top-item">
                                <FontAwesomeIcon icon={faPhone} />
                                <span className="header-top-text">Call:+21-45-323-436</span>
                            </li>
                        </ul>
                        <div className="header-top-actions">
                            <p className="header-top-action">
                                <Link to="/login" className="header-top-link">Login/Signup</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Header 2 */}
            <header className="header-top">
                <div className="container">
                    <div className="header-top-content">
                        <ul className="header-top-list">
                            <li className="header-top-item">
                                <Link to="/" className="header-top-link ">
                                    <img src={CLALogo} width="auto" height="40" alt="clalogo" onClick={()=>setShow(true)} />
                                </Link>
                            </li>
                        </ul>
                        <div className="header-top-actions">
                            <p className="header-top-action text-secondary mt-3 mr-5">
                              <Link to="/user/:activepage"> <FontAwesomeIcon icon={faUser} size="lg" style={{ marginRight: '2px' }} /></Link>  
                              <p>My Profile</p>
                            </p>
                            <div>
                            <p className="header-top-action text-secondary cart" onClick={()=>setShow(false)}>
                               <span><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} size="lg" /></Link></span> 
                           
                            <span>{size}</span>
                             <p>Cart</p>
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Headertop;
