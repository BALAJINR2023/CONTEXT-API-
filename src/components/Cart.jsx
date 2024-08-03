import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import "../App.css"
const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, getTotalQuantity, getTotalAmount } = useCart();

  return (
    <div>
      <h1>SHOPPING CART</h1>
      <table style={{border: "1px solid black", margin:"10px"}}>
        <thead>
          <tr>
            <th>Item</th><br/>
            <th>Price</th><br/>
            <th>Quantity</th><br/>
            <th>Total</th><br/>
            <th>Actions</th><br/>
          </tr>
        </thead>
        <tbody style={{border: "1px solid black"}}>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td><br/>
              <td>${item.price.toFixed(2)}</td><br/>
              <td>{item.quantity}</td><br/>
              <td>${(item.price * item.quantity).toFixed(2)}</td><br/>
              <td>
                <span><button onClick={() => increaseQuantity(item.id)}>+</button></span>
                <span><button onClick={() => decreaseQuantity(item.id)}>-</button></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className='tQ'>Total Quantity: {getTotalQuantity()}</h2>
      <h2 className='ta'>Total Amount: ${getTotalAmount().toFixed(2)}</h2>
      <Link to="/products">Back to Products</Link>
    </div>
  );
};

export default Cart;
