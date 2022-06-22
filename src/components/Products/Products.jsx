import React from 'react';
import Grid from '@material-ui/core';

const products = [
  {id: 1, name: 'shoes', description: 'Runnind shoes.'},
  {id: 2, name: 'Macbook', description: 'Apple mackbook.'},
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;