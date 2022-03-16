import React from "react";

const ProductItem = ({ data, addToCart }) => {
  let { id, name, price } = data;
  return (
    <div
      style={{
        border: "thin solid gray",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <h4>{name}</h4>
      <h5>${price} mil</h5>

      <button onClick={() => addToCart(id)}>Agregar al Carrito</button>
    </div>
  );
};

export default ProductItem;
