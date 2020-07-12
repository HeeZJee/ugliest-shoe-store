import React, { createContext, useReducer } from "react";
import { cartReducer } from './reducer'

const sneakers = {
  "NMD_R1 V2 Shoes": {
    alt: "Men's Originals Black NMD_R1 V2 Shoes",
    primaryImageSrc:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/074c7a536b2a482f830fabce01166031_9366/nmd_r1-v2-shoes.jpg",

    title: "NMD_R1 V2 Shoes",
    price: 140,
  },
  " X_PLR Shoes": {
    alt: "Originals White X_PLR Shoes",
    primaryImageSrc:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/1e74db8746cd492b9814aafc0106ac2d_9366/ultraboost-20-shoes.jpg",

    title: " X_PLR Shoes",
    price: 65,
  },
  "Nizza x Disney Sport Goofy Shoes": {
    alt: "Originals White Nizza x Disney Sport Goofy Shoes",
    primaryImageSrc:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/c5b3bb9922964e9199b2ab960163c5a4_9366/nizza-x-disney-sport-goofy-shoes.jpg",
    title: "Nizza x Disney Sport Goofy Shoes",
    price: 65,
  },
  "Ultraboost 20 Shoes": {
    alt: "Men's Running White Ultraboost 20 Shoes",
    primaryImageSrc:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/9fea5eb255dc4a28aeb3ab9d015de8ff_9366/x_plr-shoes.jpg",
    title: "Ultraboost 20 Shoes",
    price: 180,
  },
  "Busenitz Vulc 2.0 Shoes": {
    alt: "Men's Originals Black Busenitz Vulc 2.0 Shoes",
    primaryImageSrc:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/fe53c2134538440aa7cbab410156b970_9366/busenitz-vulc-2.0-shoes.jpg",
    title: "Busenitz Vulc 2.0 Shoes",
    price: 70,
  },
  "Adizero Scorch Cleats": {
    alt: "Men's Football White Adizero Scorch Cleats",
    primaryImageSrc:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/52a5bdfd1c6c4a07a480ab0c010c14f0_9366/adizero-scorch-cleats.jpg",
    title: "Adizero Scorch Cleats",
    price: 90,
  },
  "Adizero Primeknit Cleats": {
    alt: "Men's Football Grey Adizero Primeknit Cleats",
    primaryImageSrc:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/1d8f8636bb524485bfa3ab1200a2abf1_9366/adizero-primeknit-cleats.jpg",
    title: "Adizero Primeknit Cleats",
    price: 150,
  },
  "NMD_R1 Shoes": {
    alt: "Men's Originals White NMD_R1 Shoes",
    primaryImageSrc:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/dfb6dcd180124a45a5c7aba701129201_9366/nmd_r1-shoes.jpg",
    title: "NMD_R1 Shoes",
    price: 140,
  },
  " Stan Smith Shoes": {
    alt: "Originals White Stan Smith Shoes",
    primaryImageSrc:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/cd601c36af7a40e4933aab29011763f8_9366/stan-smith-shoes.jpg",
    title: "Stan Smith Shoes",
    price: 55,
  },
  "Questar Flow Shoes": {
    alt: "Men's Essentials Black Questar Flow Shoes",
    primaryImageSrc:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/2a607f0e3ab04687afd0aba5013ee4f1_9366/questar-flow-shoes.jpg",
    title: "Questar Flow Shoes",
    price: 75,
  },
};


export const contextValue = createContext({});
const ContextProvider = ({ children }) => {



  const initialCart = {
    items: []
  }

  const [cartState, cartDispatch] = useReducer(cartReducer, initialCart)
  const addToCart = (item) => {
    cartDispatch(
      {
        type: 'ADD_TO_CART',
        payload: item
      }
    )
    console.log(cartState)
  }


  return (
    <contextValue.Provider value={{ addToCart, cartState, sneakers }}>
      {children}
    </contextValue.Provider>
  );
};

export default ContextProvider;
