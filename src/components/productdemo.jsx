import React from 'react';
import PropTypes from 'prop-types';

const Product = ({
  id,
  title,
  description,
  price,
  image,
  category,
  addToCart,
  removeFromCart,
}) => {
  const handleAddToCart = () => {
    addToCart({ id, title, description, price, image, category });
  };
  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  return (
    <div
      id={id}
      style={{
        border: '1px solid',
        margin: 10,
        padding: 10,
        textAlign: 'center',
      }}
    >
      <img
        style={{ width: 200, height: 200, objectFit: 'contain' }}
        src={image}
        alt={title}
      />
      <h3>TITLE: {title}</h3>
      <h4>PRICE: ${price}</h4>
      <p>DESC: {description}</p>
      <h3>CATEGORY: {category}</h3> <br />
      <button onClick={handleAddToCart}>ADD TO CART</button> <br/><br/>
      <button onClick={handleRemoveFromCart}>REMOVE FROM CART</button>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  category: PropTypes.string,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Product;
