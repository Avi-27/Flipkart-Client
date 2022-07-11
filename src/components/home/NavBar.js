import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { navData } from "../../constants/data";
const useStyle = makeStyles((theme) => ({
  component: {
    display: "flex",
    margin: "55px 130px 0px 130px",
    justifyContent: "space-between",
    overflowX: "scroll",
    [theme.breakpoints.down("md")]: {
      margin: "0px",
    },
  },
  data: {
    width: "100%",
    padding: "12px 8px",
    textAlign: "center",
  },
  image: {
    width: 70,
  },
  text: {
    fontSize: "14px !important",
    fontWeight: "600 !important",
  },
}));

const NavBar = () => {
  const classes = useStyle();
  return (
    <Box className={classes.component}>
      {navData.map((data) => (
        <Box className={classes.data}>
          <img src={data.url} alt={data.text} className={classes.image} />
          <Typography className={classes.text}>{data.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default NavBar;
