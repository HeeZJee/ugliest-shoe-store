import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { contextValue } from "./../../store/context";

function ShoeDetail() {

  const { sneakers, addToCart, } = useContext(contextValue);
  const { shoe } = useParams();
  const shoeDetail = sneakers[shoe]

  const add = () => {
    addToCart(shoeDetail)
    alert('added')
  }



  const { alt, primaryImageSrc, title, price } = shoeDetail;
  return (
    <div>
      <img src={primaryImageSrc} alt={alt} title={alt} />
      <h4>{title}</h4>
      <span>${price}</span>{'  '}
      <button onClick={add}>Add To Cart</button>
    </div>
  );
}

export default ShoeDetail;
