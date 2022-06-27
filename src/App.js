import React, { useState } from 'react';
import { Navbar, Products } from './components';
import { commerce } from './lib/commerce';

const App = () => {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };


  return (
    <div>
      <Navbar/>
      <Products/>
    </div>
  )
}

export default App

// rafce