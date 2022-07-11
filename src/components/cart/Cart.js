import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import CartItem from "./cartItem";
import { removeFromCart } from "../../redux/actions/cartActions";
import EmptyCart from "./EmptyCart";
import { Button } from "@mui/material";
import TotalView from "./TotalView";
import { payWithPayTM } from "../../service/api";
import { post } from "../../utils/PayTm";

const useStyles = makeStyles({
  component: {
    marginTop: "55px",
    padding: "30px 135px",
    display: "flex",
  },
  left: {
    width: "60%",
  },
  header: {
    padding: "15px 24px",
    background: "#fff",
  },
  bottom: {
    padding: "16px 22px",
    background: "#fff",
    borderTop: "1px solid #f0f0f0",
    boxShadow: "0 -2px 10px 0 rgb(0 0 0 /10%)",
  },
  placeorder: {
    background: "#fb641b !important",
    borderRadius: 2,
    width: "250px",
    height: "50px",
    display: "flex !important",
    marginLeft: "auto !important",
    "&:hover": {
      background: "#fb641b !important",
    },
  },
});

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(cartItems);
    // eslint-disable-next-line
  }, []);
  const removeItemfromcart = (id) => {
    dispatch(removeFromCart(id));
  };
  const BuyNow = async () => {
    let response = await payWithPayTM({ amount: 500, email: "adityaditya7112gmail.com" });
    let information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: response,
    };
    post(information);
  };
  return (
    <>
      {cartItems.length ? (
        <Box className={classes.component}>
          <Box className={classes.left}>
            <Box className={classes.header}>
              <Typography style={{ fontWeight: "bold", fontSize: "18px" }}>
                My Cart ({cartItems.length})
              </Typography>
            </Box>
            {cartItems.map((item) => (
              <CartItem item={item} removeItemfromcart={removeItemfromcart} />
            ))}
            <Box className={classes.bottom}>
              <Button variant="contained" className={classes.placeorder} onClick={() => BuyNow()}>
                Place Order
              </Button>
            </Box>
          </Box>
          <TotalView cartItems={cartItems} />
        </Box>
      ) : (
        <Box>
          <EmptyCart />
        </Box>
      )}
    </>
  );
};

export default Cart;
