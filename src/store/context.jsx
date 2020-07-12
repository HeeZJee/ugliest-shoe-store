import React, { createContext, useReducer } from "react";
import { cartReducer } from './reducer'

const sneakers = {
  "NMD_R1 V2 Shoes": {
    alt: "Men's Originals Black NMD_R1 V2 Shoes",
    primaryImageSrc:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/074c7a536b2a482f830fabce01166031_9366/nmd_r1-v2-shoes.jpg",
    src:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/01539804a6364c91bedeabd1010f8457_9366/nmd_r1-v2-shoes.jpg",
    title: "NMD_R1 V2 Shoes",
    price: 140,
  },
  shoe_2: {
    alt: "Originals White X_PLR Shoes",
    primaryImageSrc:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/1e74db8746cd492b9814aafc0106ac2d_9366/ultraboost-20-shoes.jpg",
    src:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/c6c5c2caafc8405b8e4baaff00e21e50_9366/ultraboost-20-shoes.jpg",
    title: "Ultraboost 20 Shoes",
    price: 65,
  },
  shoe_3: {
    alt: "Originals White Nizza x Disney Sport Goofy Shoes",
    primaryImageSrc:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/c5b3bb9922964e9199b2ab960163c5a4_9366/nizza-x-disney-sport-goofy-shoes.jpg",
    src:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/d5d4e275c6424b17b5c5aba50022c53a_9366/nizza-x-disney-sport-goofy-shoes.jpg",
    title: "Nizza x Disney Sport Goofy Shoes",
    price: 65,
  },
  shoe_4: {
    alt: "Men's Running White Ultraboost 20 Shoes",
    primaryImageSrc:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/9fea5eb255dc4a28aeb3ab9d015de8ff_9366/x_plr-shoes.jpg",
    src:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/7f4850165cc74d84a565aba50016a36d_9366/x_plr-shoes.jpg",
    title: "X_PLR Shoes",
    price: 180,
  },
  shoe_5: {
    alt: "Men's Originals Black Busenitz Vulc 2.0 Shoes",
    primaryImageSrc:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/fe53c2134538440aa7cbab410156b970_9366/busenitz-vulc-2.0-shoes.jpg",
    src:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/6c964d4293354f4d9f09ab5301457596_9366/busenitz-vulc-2.0-shoes.jpg",
    title: "Busenitz Vulc 2.0 Shoes",
    price: 70,
  },
  shoe_6: {
    alt: "Men's Football White Adizero Scorch Cleats",
    primaryImageSrc:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/52a5bdfd1c6c4a07a480ab0c010c14f0_9366/adizero-scorch-cleats.jpg",
    src:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/5ab4359f23ec4d399c96ab1200b02626_9366/adizero-scorch-cleats.jpg",
    title: "Adizero Scorch Cleats",
    price: 90,
  },
  shoe_7: {
    alt: "Men's Football Grey Adizero Primeknit Cleats",
    primaryImageSrc:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/1d8f8636bb524485bfa3ab1200a2abf1_9366/adizero-primeknit-cleats.jpg",
    src:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/d4dc8a9fddf54c21854cab0c0106e133_9366/adizero-primeknit-cleats.jpg",
    title: "Adizero Primeknit Cleats",
    price: 150,
  },
  shoe_8: {
    alt: "Men's Originals White NMD_R1 Shoes",
    primaryImageSrc:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/dfb6dcd180124a45a5c7aba701129201_9366/nmd_r1-shoes.jpg",
    src:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/5b6295b1b9754b20981fabb200402e03_9366/nmd_r1-shoes.jpg",
    title: "NMD_R1 Shoes",
    price: 140,
  },
  shoe_9: {
    alt: "Originals White Stan Smith Shoes",
    primaryImageSrc:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/cd601c36af7a40e4933aab29011763f8_9366/stan-smith-shoes.jpg",
    src:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/7f749b2fe2ec4cce8ca4ab4801229f74_9366/stan-smith-shoes.jpg",
    title: "Ultraboost 20 Shoes",
    price: 55,
  },
  shoe_10: {
    alt: "Men's Essentials Black Questar Flow Shoes",
    primaryImageSrc:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/2a607f0e3ab04687afd0aba5013ee4f1_9366/questar-flow-shoes.jpg",
    src:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/a0406333060e4e35a66cabb40091bc5a_9366/questar-flow-shoes.jpg",
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
