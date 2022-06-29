/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar, Products, Cart } from './components';
import { commerce } from './lib/commerce';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
    // console.log(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  // console.log(products);
  // console.log(cart);

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Routes>
          <Route exact path="/" element={<Products products={products} onAddToCart={handleAddToCart} />} />
          <Route exact path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// rafce
