import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import clsx from "clsx";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BoltIcon from "@mui/icons-material/Bolt";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { useNavigate } from "react-router-dom";
import { payWithPayTM } from "../../service/api";
import { post } from "../../utils/PayTm";

const useStyles = makeStyles({
  leftContainer: {
    padding: "40px 0 0 80px",
  },
  image: {
    padding: "15px 20px",
    border: "1px solid #f0f0f0",
    width: "95%",
  },
  button: {
    height: 50,
    width: "46%",
    borderRadius: 2,
  },
  addToCart: {
    backgroundColor: "#ff9f00 !important",
    marginRight: "10px !important",
    "&:hover": {
      backgroundColor: "#ff9f00 !important",
    },
  },
  Buynow: {
    background: "#fb641b !important",
    "&:hover": {
      backgroundColor: "#fb641b !important",
    },
  },
});

const ActionItems = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const AddItemToCart = () => {
    dispatch(addToCart(product.id));
    navigate("/cart");
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
    <Box className={classes.leftContainer}>
      <img src={product.detailUrl} alt="proImage" className={classes.image} />
      <br />
      <Button
        onClick={() => AddItemToCart()}
        variant="contained"
        className={clsx(classes.button, classes.addToCart)}
      >
        <AddShoppingCartIcon style={{ marginRight: "7px" }} />
        Add To Cart
      </Button>
      <Button
        variant="contained"
        className={clsx(classes.button, classes.Buynow)}
        onClick={() => BuyNow()}
      >
        <BoltIcon style={{ marginRight: "7px" }} />
        Buy Now
      </Button>
    </Box>
  );
};

export default ActionItems;
