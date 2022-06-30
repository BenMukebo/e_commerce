/* eslint-disable react/prop-types */
import React from 'react';
import {
  Container, Typography, Button, Grid,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({
  cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart,
}) => {
  const classes = useStyles();
  // const isEmpty = !cart.line_items?.length;
  // console.log(cart.line_items?.length); ?: just mean wait for the data load
  // console.log(cart);

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <Link className={classes.link} to="/">start adding some</Link>
      !
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            {/* <div>{lineItem.name}</div> */}
            <CartItem
              item={lineItem}
              onUpdateCartQty={onUpdateCartQty}
              onRemoveFromCart={onRemoveFromCart}
            />

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
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" >Empty cart</Button>
          <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
    </>
  );

  if (!cart.line_items) return 'Loading';

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      {/* { isEmpty ? <EmptyCart /> : <FilledCart /> } */}
      { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }

    </Container>
  );
};

export default Cart;
