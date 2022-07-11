import { Button, Card, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import clsx from "clsx";
import GroupButton from "./GroupButton";

const useStyles = makeStyles({
  component: {
    display: "flex",
    borderRadius: "0px !important",
    borderTop: "1px solid #f0f0f0",
  },
  left: {
    margin: "20px",
  },
  right: {
    margin: "20px",
  },
  fassured: {
    width: "50px",
    marginLeft: "15px",
  },
  smallText: {
    fontSize: "14px !important",
  },
  greyText: {
    color: "#878787",
  },
  price: {
    fontWeight: "bold",
    fontSize: "18px !important",
  },
  image: {
    height: "110px",
    width: "110px",
  },
  remove: {
    marginTop: "20px",
    fontSize: "16px !important",
  },
});

const CartItem = ({ item, removeItemfromcart }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.component}>
        <Box className={classes.left}>
          <img src={item.url} alt="proimage" className={classes.image} />
          <GroupButton />
        </Box>
        <Box className={classes.right}>
          <Typography>{item.title.longTitle}</Typography>
          <Typography
            style={{ marginTop: "10px" }}
            className={clsx(classes.smallText, classes.greyText)}
          >
            Seller:SuperComNet
            <span>
              <img src={fassured} className={classes.fassured} alt="fassured" />
            </span>
          </Typography>
          <Typography style={{ margin: "20px 0" }}>
            <span className={classes.price}>₹{item.price.cost}</span> &nbsp;&nbsp;&nbsp;
            <span className={classes.greyText}>
              <strike>₹{item.price.mrp}</strike>
            </span>{" "}
            &nbsp;&nbsp;&nbsp;
            <span style={{ color: "#388c3c" }}>{item.price.discount} off</span>
          </Typography>
          <Button className={classes.remove} onClick={() => removeItemfromcart(item.id)}>
            Remove
          </Button>
        </Box>
      </Card>
    </div>
  );
};

export default CartItem;
