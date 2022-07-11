import { Box } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  component: {
    margin: "80px 140px",
    width: "80%",
    background: "#fff",
  },
  image: {
    width: "15%",
  },
  container: {
    textAlign: "center",
    paddingTop: "20px",
    "&>*": {
      marginTop: "10px !important",
      fontSize: "14px !important",
    },
  },
  btn: {
    margin: "20px",
    padding: "12px 30px",
    fontSize: "13px !important",
  },
});

const EmptyCart = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const AddItem = () => {
    navigate("/");
  };
  const emptycarturl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";
  return (
    <div>
      <Box className={classes.component}>
        <Box className={classes.container}>
          <img src={emptycarturl} alt="Your cart is empty" className={classes.image} />
          <Typography>Your Cart is Empty</Typography>
          <Typography>Add Items to it Now</Typography>
          <Button variant="outlined" onClick={() => AddItem()} className={classes.btn}>
            Shop Now
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default EmptyCart;
