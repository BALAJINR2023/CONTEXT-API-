import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import Products from './components/Products.jsx'
import Cart from './components/Cart.jsx'
import { CartProvider } from './components/CartContext.jsx'


function App() {
  const [count, setCount] = useState(0)
  const DefaultElement = () => {
    return (
      <>
        <h3>No page found,please check the URL</h3>
        <Link to="/">Return to Home page</Link>
      </>
    );
  };
  return (
    <>
    <CartProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<DefaultElement/>} />
       </Route>
      </Routes>
      </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
