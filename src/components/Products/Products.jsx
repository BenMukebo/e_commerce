import React from 'react';
import {  Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
  {id: 1, name: 'shoes', description: 'Runnind shoes.', price: '$5', image: 'https://user-images.githubusercontent.com/79058364/175802212-ae743832-4c70-4cd2-b7a3-81428102b3e5.jpeg'},
  {id: 2, name: 'Macbook', description: 'Apple mackbook.', price: '$10', image: 'https://user-images.githubusercontent.com/79058364/175802292-f3d12888-f296-4ca2-a7f2-7e689d6d7385.jpeg'},
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;