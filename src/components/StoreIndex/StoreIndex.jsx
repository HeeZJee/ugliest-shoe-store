import React, { useContext } from "react";
import { contextValue } from "../../store/context";
import { Link } from "react-router-dom";

function StoreIndex() {
  const { sneakers, addToCart } = useContext(contextValue);

  const add = (e) => {
    const shoe = e.target.value
    const shoeDetail = sneakers[shoe]
    addToCart(shoeDetail)
    alert('added')
  }


  return (
    <ul>
      {Object.entries(sneakers).map(
        ([shoe, { alt, primaryImageSrc, title, price }]) => (
          <li key={shoe}>
            <Link to={`/${shoe}`}>
              <img src={primaryImageSrc} alt={alt} title={title} />
              <h4>{title}</h4>
            </Link>
            <span>${price}</span>{'   '}
            <button value={shoe} onClick={add}>Add to Cart</button>
            <hr />
          </li>
        )
      )}
    </ul>
  );
}

export default StoreIndex;
