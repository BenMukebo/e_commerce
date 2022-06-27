/* eslint-disable react/prop-types */
import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

// import PropTypes from 'prop-types';

// const products = [
//   {
//     id: 1, name: 'shoes', description: 'Runnind shoes.', price: '$5', image: 'https://user-images.githubusercontent.com/79058364/175802212-ae743832-4c70-4cd2-b7a3-81428102b3e5.jpeg',
//   },
//   {
//     id: 2, name: 'Macbook', description: 'Apple mackbook.', price: '$10', image: 'https://user-images.githubusercontent.com/79058364/175802292-f3d12888-f296-4ca2-a7f2-7e689d6d7385.jpeg',
//   },
//   {
//     id: 3, name: 'shoes', description: 'Gaming Headset, Lightweight.', price: '$5', image: 'https://user-images.githubusercontent.com/79058364/175937590-c583f048-4dbd-469a-b504-c9b1e8d0d511.jpg',
//   },
//   {
//     id: 4, name: 'Speaker', description: 'Computer Speaker for Desktop 10w USB Powered .', price: '$10', image: 'https://user-images.githubusercontent.com/79058364/175937814-f540ee4f-4520-4f0e-a5cb-4f81112149fa.png',
//   },
// ];

const Products = ({ products }) => {
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

// Product.propTypes = {
//   // optionalBigInt: PropTypes.bigint,
//   // optionalNumber: PropTypes.number,
//   // product: PropTypes.func,
//   product: PropTypes.array,
//   // product: PropTypes.object,
// },

export default Products;
