import React from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  
    let { tittle, price, isRed } = props;

  return (
    <div>
      <h1 className={ isRed ? "red" : "blue"}>{tittle}</h1>
      <h2>{price}</h2>
    </div>
  );
};

export default ProductCard;
