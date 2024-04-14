import React from 'react'
import "../userhomepage/css/cards.css"
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cards = ({item,handleClick}) => {
    const{name,description,price,status,image}=item;
  return (
    <div className="cards">
        <div className="image_box">
     <img src={image} alt="image"/>
        </div>
        <div className="details">
            <p>{name}</p>
            <p>{description}</p>
            <p>Price-{price}Rs</p>
            <p>{status}</p>
            {/**<button>Add to Cart</button> */}
            
            <button type="button" class="btn btn-outline-primary" onClick={() => handleClick(item)}>
  <FontAwesomeIcon icon={faShoppingCart} style={{ color: "skyblue" }}  /> ADD TO CART
</button>
        </div>
    </div>
  )
}

export default Cards