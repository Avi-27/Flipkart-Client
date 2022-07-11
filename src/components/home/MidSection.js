import React from "react";
import { ImageURL } from "../../constants/data";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  image: {
    width: "33%",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    margin: "15px 0px",
    justifyContent: "space-between",
  },
  addbg: {
    width: "100%",
    margin: "10px 0px",
  },
});

const MidSection = () => {
  const classes = useStyles();
  const coronaURL = "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";
  return (
    <>
      <Box className={classes.wrapper}>
        {ImageURL.map((image) => (
          <img src={image} alt="url" className={classes.image} />
        ))}
      </Box>
      <img src={coronaURL} className={classes.addbg} alt="corona" />
    </>
  );
};

export default MidSection;
