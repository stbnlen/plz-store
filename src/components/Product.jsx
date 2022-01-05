import React from 'react';

const Product = ({ product, handleAddToCart }) => {
  const { image, price, title, description } = product;
  return (
    <div className="Products-item">
      <img src={image} alt={title} />
      <div className="Products-item-info">
        <h2>
          {title} <span>${price}</span>
        </h2>
        <p>{description}</p>
      </div>
      <button type="button" onClick={handleAddToCart(product)}>
        Comprar
      </button>
    </div>
  );
};

export default Product;
