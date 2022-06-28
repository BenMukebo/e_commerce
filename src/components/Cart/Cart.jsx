/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Container, Typography, Button, Grid,
} from '@material-ui/core';

import useStyles from './styles';

const Cart = ({ cart }) => {
  const classes = useStyles();
  const isEmpty = !cart.line_items?.length;
  // console.log(cart.line_items?.length);

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart, start adding some!
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <div>{lineItem.name}</div>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal:
          {' '}
          {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty cart</Button>
          <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      { isEmpty ? <EmptyCart /> : <FilledCart /> }
      {/* { isEmpty ? <FilledCart /> : <EmptyCart /> } */}
      { isEmpty ? <div>EmptyCart</div> : <div>FilledCart</div> }
    </Container>
  );
};

export default Cart;
