import { makeStyles, withStyles } from "@mui/styles";
import { AppBar, Drawer, List, ListItem, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/system";
import SearchBar from "./SearchBar";
import HeaderButtons from "./HeaderButtons";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const useStyle = makeStyles((theme) => ({
  header: {
    background: "#2874f0",
    height: 55,
  },
  logo: {
    width: 75,
  },
  sublogo: {
    width: 10,
    marginLeft: 4,
    height: 10,
  },
  container: {
    display: "flex",
  },
  component: {
    marginLeft: "12%",
    lineHeight: 0,
    textDecoration: "none",
  },
  subheading: {
    fontSize: [10, "!important"],
    fontStyle: "italic",
    color: "white",
  },
  list: {
    width: 250,
  },
  menubtn: {
    display: "none !important",
    [theme.breakpoints.down("sm")]: {
      display: "block !important",
    },
  },
  btns: {
    [theme.breakpoints.down("sm")]: {
      display: "none !important",
    },
  },
}));

const ToolBar = withStyles({
  root: {
    minHeight: 55,
  },
})(Toolbar);

const Header = () => {
  const classes = useStyle();
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  const [open, setopen] = useState(false);
  const handleDrawer = () => {
    setopen(true);
  };
  const handleClose = () => {
    setopen(false);
  };
  const list = () => {
    return (
      <Box className={classes.list} onClick={handleClose}>
        <List>
          <ListItem>
            <HeaderButtons />
          </ListItem>
        </List>
      </Box>
    );
  };

  return (
    <div>
      <AppBar className={classes.header}>
        <ToolBar>
          <IconButton color="inherit">
            <MenuIcon onClick={() => handleDrawer()} className={classes.menubtn} />
          </IconButton>
          <Drawer open={open} onClose={() => handleClose()}>
            {list()}
          </Drawer>
          <Link to="/" className={classes.component}>
            <img src={logoURL} alt="" className={classes.logo} />
            <Box className={classes.container}>
              <Typography className={classes.subheading}>
                Explore
                <Box component="span" style={{ color: "#ffe500" }}>
                  Plus
                </Box>
              </Typography>
              <img src={subURL} alt="" className={classes.sublogo} />
            </Box>
          </Link>
          <SearchBar />
          <span className={classes.btns}>
            <HeaderButtons />
          </span>
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default Header;
