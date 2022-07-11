import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Box } from "@mui/system";
import { getProductsbyId } from "../../redux/actions/productActions";
import { makeStyles } from "@mui/styles";
import { Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import clsx from "clsx";
import ActionItems from "./ActionItems";

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: "#f2f2f2",
    marginTop: 55,
  },
  container: {
    margin: "0px 80px",
    display: "flex",
    backgroundColor: "#fff",
  },
  rightContainer: {
    marginTop: 50,
    "& > *": {
      marginTop: "10px !important",
    },
  },
  smallText: {
    fontSize: "13.5px !important",
    verticalAlign: "baseline",
  },
  greyTextColor: {
    color: "#878787",
  },
  price: {
    fontSize: "25px !important",
    fontWeight: 500,
  },
  offer_container: {
    listStyle: "none",
    paddingInlineStart: "0px",
    "& > *": {
      fontSize: "14px !important",
      marginTop: 10,
      display: "flex",
      alignItems: "center",
    },
  },
  offers: {},
  LocalOfferIcon: {
    color: "#388c3c",
    marginRight: "10px",
    fontSize: "20px !important",
  },
});

const DetailView = () => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const sellerURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  const { product } = useSelector((state) => state.getProductDetails);
  const dispatch = useDispatch();
  const { id } = useParams();
  const classes = useStyles();
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  useEffect(() => {
    dispatch(getProductsbyId(id));
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <Box className={classes.wrapper}>
      {product && Object.keys(product).length && (
        <Box className={classes.container}>
          <Box style={{ minWidth: "40%" }}>
            <ActionItems product={product} />
          </Box>
          <Box className={classes.rightContainer}>
            <Typography>{product.title.longTitle}</Typography>
            <Typography className={clsx(classes.smallText, classes.greyTextColor)}>
              8 Ratings and 1 Review
              <span>
                <img src={fassured} alt="fassured" style={{ width: "55px", marginLeft: "20px" }} />
              </span>
            </Typography>

            <Typography>
              <span className={classes.price}>₹{product.price.cost}</span> &nbsp; &nbsp;&nbsp;
              <span className={classes.greyTextColor}>
                <strike>₹{product.price.mrp}</strike>
              </span>
              &nbsp; &nbsp;&nbsp;
              <span style={{ color: "#388c3c" }}>{product.price.discount} off</span>
            </Typography>
            <Box className={classes.smallText}>
              <Typography style={{ marginTop: "15px", fontWeight: "600", fontSize: "15px" }}>
                Available Offers
              </Typography>
              <ul className={classes.offer_container}>
                <li className={classes.offers}>
                  <LocalOfferIcon className={classes.LocalOfferIcon} />
                  Special PriceGet extra 17% off (price inclusive of discount)T&C
                </li>

                <li>
                  <LocalOfferIcon className={classes.LocalOfferIcon} />
                  Bank Offer10% Instant Discount on RBL Bank Credit and Debit CardsT&C
                </li>

                <li>
                  <LocalOfferIcon className={classes.LocalOfferIcon} />
                  Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C
                </li>

                <li>
                  <LocalOfferIcon className={classes.LocalOfferIcon} />
                  Bank Offer20% off on 1st txn with Amex Network Cards issued by ICICI Bank,IndusInd
                  Bank T&C
                </li>
                <li>
                  <LocalOfferIcon className={classes.LocalOfferIcon} />
                  Combo OfferBuy 2 items save 5%;Buy 3 or more save 10%See all productsT&C
                </li>
              </ul>
            </Box>
            <Table>
              <TableBody>
                <TableRow className={classes.smallText}>
                  <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                  <TableCell style={{ fontWeight: "600" }}>{date.toDateString()}| ₹40</TableCell>
                </TableRow>
                <TableRow className={classes.smallText}>
                  <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                  <TableCell>No Warranty</TableCell>
                </TableRow>
                <TableRow className={classes.smallText}>
                  <TableCell className={classes.greyTextColor}>Seller</TableCell>
                  <TableCell>
                    <span style={{ color: "#2874f0" }}>SuperComNet</span>
                    <Typography className={classes.smallText}>GST Invoice Available</Typography>
                    <li className={classes.greyTextColor}>14 Days Return Policy</li>
                    <Typography className={classes.smallText}>View more Sellers</Typography>
                  </TableCell>
                </TableRow>
                <TableRow className={classes.smallText}>
                  <TableCell colSpan="2">
                    <img src={sellerURL} alt="sellerurl" style={{ width: "390px" }} />
                  </TableCell>
                </TableRow>
                <TableRow className={classes.smallText}>
                  <TableCell className={classes.greyTextColor}>Description</TableCell>
                  <TableCell>{product.description}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default DetailView;
