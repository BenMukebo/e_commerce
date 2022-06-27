import React, { useState } from 'react';
import { Navbar, Products } from './components';
import { commerce } from './lib/commerce';

const App = () => {

  const [products, setProducts] = useState([]);



  return (
    <div>
      <Navbar/>
      <Products/>
    </div>
  )
}

export default App

// rafce