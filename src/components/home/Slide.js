import { Button, Divider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";

import Countdown from "react-countdown";

const useStyle = makeStyles({
  component: {
    marginTop: 11,
    backgroundColor: "#fff",
  },
  image: {
    height: 150,
  },
  dealtext: {
    fontSize: "22px !important",
    fontWeight: "600 !important",
    lineHeight: "32px !important",
    marginRight: "10px",
  },
  deal: {
    padding: "15px 20px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  timer: {
    color: "2f2f2f",
    marginLeft: "10px",
    display: "flex",
    alignItems: "center",
  },
  btn: {
    marginLeft: "auto !important",
    backgroundColor: "#2874f0",
    borderRadius: 2,
    fontSize: "14px !important",
    display: "flex",
    alignItems: "center",
  },
  text: {
    fontSize: "14px !important",
    marginTop: "10px",
  },
  wrapper: {
    padding: "40px 15px",
  },
});
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slide = ({ timer, title, products }) => {
  const classes = useStyle();
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span className={classes.timer}>
        {hours} : {minutes} : {seconds} Left
      </span>
    );
  };
  return (
    <Box className={classes.component}>
      <Box className={classes.deal}>
        <Typography className={classes.dealtext}>{title}</Typography>
        {timer && (
          <React.Fragment>
            <img src={timerURL} alt="timer" style={{ width: "24px", marginLeft: "10px" }} />
            <Countdown date={Date.now() + 4.32e7} renderer={renderer} />
            <Button variant="contained" color="primary" className={classes.btn}>
              View All
            </Button>
          </React.Fragment>
        )}
      </Box>

      <Divider />
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        draggable={false}
        swipeable={false}
        centerMode={true}
        keyBoardControl={true}
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map((product) => (
          <Link to={`product/${product.id}`}>
            <Box textAlign="center" className={classes.wrapper}>
              <img src={product.url} alt="" className={classes.image} />
              <Typography className={classes.text} style={{ fontWeight: "600", color: "#212121" }}>
                {product.title.shortTitle}
              </Typography>
              <Typography className={classes.text} style={{ color: "green" }}>
                {product.discount}
              </Typography>
              <Typography className={classes.text} style={{ color: "#212121", opacity: "0.6" }}>
                {product.tagline}
              </Typography>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slide;
