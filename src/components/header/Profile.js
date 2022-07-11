import { Typography } from "@mui/material";
import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@mui/styles";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const useStyles = makeStyles({
  component: {
    marginTop: "15px",
  },
  logout: {
    marginLeft: "20px !important",
    fontSize: "14px !important",
  },
});

const Profile = ({ account, setAccount }) => {
  const [open, setopen] = useState(false);
  const handleClose = () => {
    setopen(false);
  };
  const handleClick = (event) => {
    setopen(event.currentTarget);
  };
  const logout = () => {
    setAccount("");
  };
  const classes = useStyles();
  return (
    <>
      <Typography onClick={handleClick} style={{ cursor: "pointer" }}>
        {account}
      </Typography>
      <Menu
        anchorEl={open}
        open={open}
        onClose={handleClose}
        className={classes.component}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          <PowerSettingsNewIcon fontSize="small" color="primary" />
          <Typography className={classes.logout}>Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
