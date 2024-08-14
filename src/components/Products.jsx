import { Link, useParams, useSearchParams } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Product from "./productdemo.jsx"
import "../App.css"
import { useCart } from "./CartContext.jsx";
const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, removeFromCart  } = useCart();
  // const cartdata = createContext(null);
    const loadData = async () => {
    let response = await fetch("https://fakestoreapi.com/products?limit=10");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
    
      <div className="cart"><Link to="/Cart"> <button>VIEW CART </button> </Link></div>
      {products.map((product) => (
      <Product {...product} key={product.id} addToCart={addToCart} removeFromCart={removeFromCart}/>
       ))} 
      
    </>
  );
};

export default Products;
