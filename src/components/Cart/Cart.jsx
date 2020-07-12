import React, { useContext } from "react";
import { contextValue } from "./../../store/context";





function Cart() {

  const { cartState: { items } } = useContext(contextValue)

  console.log(items)



  return (<ul>
    {items.map(({ primaryImageSrc, alt, title, price }, index) =>
      (<li key={index}>
        <img src={primaryImageSrc} alt={alt} title={title} />
        <h4>{title}</h4>
        <span>${price}</span>
      </li>)
    )}
  </ul>);
}

export default Cart;
