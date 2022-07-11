import { makeStyles } from "@mui/styles";

import React from "react";
import Carousel from "react-material-ui-carousel";
import { bannerData } from "../../constants/data";

const useStyle = makeStyles((theme) => ({
  image: {
    height: 280,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      objectFit: "cover",
      height: 180,
    },
  },
  carousel: {
    marginTop: 10,
    width: "100%",
  },
}));

const Banner = () => {
  const classes = useStyle();
  return (
    <>
      <Carousel
        autoPlay={true}
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        navButtonsProps={{
          style: {
            background: "white",
            padding: "35px 5px",
            color: "#494949",
            borderRadius: 0,
            margin: "-26px 0px",
          },
        }}
        className={classes.carousel}
      >
        {bannerData.map((image) => (
          <img src={image} alt="Banner" className={classes.image} />
        ))}
      </Carousel>
    </>
  );
};

export default Banner;
