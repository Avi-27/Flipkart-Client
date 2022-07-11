import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import Banner from "./Banner";
import MidSection from "./MidSection";
import NavBar from "./NavBar";
import Slide from "./Slide";
import { useDispatch, useSelector } from "react-redux";
// import { products } from "../../constants/data";
import { getProducts as listProducts } from "../../redux/actions/productActions";

const useStyle = makeStyles({
  component: {
    padding: 10,
    background: "#f2f2f2",
    width: "100%",
  },
  ad: {
    background: "white",
    padding: 5,
    width: "17%",
    margin: "10px 0 0 5px",
  },
});

const Home = () => {
  const classes = useStyle();
  const adURL = "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Box className={classes.component}>
        <Banner />
        <Box style={{ display: "flex" }}>
          <Box style={{ width: "83%" }}>
            <Slide timer={true} title="Deal of the Day" products={products} />
          </Box>
          <Box className={classes.ad}>
            <img src={adURL} alt="advertisement" style={{ width: "230px" }} />
          </Box>
        </Box>
        <MidSection />
        <Slide timer={false} title="TOP SELECTIONS" products={products} />
        <Slide timer={false} title="Sugegsted EXclusively For You" products={products} />
        <Slide title="Limited Discount For You.... Hurry NOW!" timer={true} products={products} />
        <Slide title="Top 10 " timer={false} products={products} />
      </Box>
    </div>
  );
};

export default Home;
