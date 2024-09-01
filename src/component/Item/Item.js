import React from 'react';
import "./Item.css";
import available from "./available.png";
import not from "./not-available.png";

function Item({ imgURL, title, description, itemType, price }) {
  return (
    <div className='item-info'>
      <img
        src={imgURL}
        className='item-img'
        alt={`Image of ${title}`}
      />

      <h2 className='item-title'>{title}</h2>
      <p className='item-description'>{description}</p>
      
      <img
        src={itemType ? available : not}
        className='item-icon'
        alt={itemType ? 'Available' : 'Not Available'}
      />

      {price && (
        <p className='item-price'>
          ₹{price}
        </p>
      )}

      <button className='btn-cart'>
        Add To Cart
      </button>
    </div>
  );
}

export default Item;
