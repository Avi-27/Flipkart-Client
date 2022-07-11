import { Button, Dialog, DialogContent, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { authenticateSignup, authenticateLogin } from "../../service/api";
const useStyles = makeStyles({
  component: {
    height: "75vh",
    width: "90vh",
    minHeight: "75vh",
    // maxHeight: "80vh",
  },
  image: {
    backgroundImage: `url(${"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})`,
    height: "75vh",
    backgroundRepeat: "no-repeat",
    background: "#2874f0",
    width: "40%",
    backgroundPosition: "center 85%",
    padding: "45px 35px",
    "& > *": {
      color: "white",
      fontWeight: "600 !important",
    },
  },
  login: {
    padding: "23px 35px",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    "& > *": {
      marginTop: "20px !important",
    },
  },
  loginBtn: {
    textTransform: "none !important",
    background: "#fb641b !important",
    height: 48,
    borderRadius: 2,
  },
  requestBtn: {
    textTransform: "none !important",
    background: "#fff !important",
    color: "#2874f0 !important",
    height: 48,
    borderRadius: 2,
    boxShadow: "0px 2px 4px 0px rgb(0 0 0 /20%)",
  },
  text: {
    color: "#878787",
    fontSize: "12px !important",
  },
  Or: {
    textAlign: "center",
    color: "#878787",
    fontSize: "12px !important",
  },
  newtext: {
    textAlign: "center",
    marginTop: "auto !important",
    fontSize: "14px !important",
    color: "#2874f0",
    fontWeight: "500 !important",
    cursor: "pointer",
  },
  signupBtn: {
    background: "#fb641b !important",
    height: 48,
    borderRadius: 2,
    color: "white !important",
  },
  error: {
    fontSize: "10px !important",
    color: "red !important",
    lineHeight: "1.5 !important",
  },
});

const Login = ({ open, setOpen, setAccount }) => {
  const classes = useStyles();
  const initialValue = {
    login: {
      view: "login",
      heading: "Login",
      subHeading: "Get access to your Orders, Wishlist and Recommendations",
    },
    signup: {
      view: "signup",
      heading: "Looks like you're new here!",
      subHeading: "Sign up with your details to get started",
    },
  };
  const signupInitialValue = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: "",
  };
  const loginInitialValue = {
    username: "",
    password: "",
  };
  // State definitions
  const [account, setaccount] = useState(initialValue.login);
  const [signup, setSignup] = useState(signupInitialValue);
  const [login, setLogin] = useState(loginInitialValue);
  const [error, seterror] = useState(false);
  // Functions
  const handlClose = () => {
    setOpen(false);
    setaccount(initialValue.login);
    seterror(false);
  };
  const toggleAccount = () => {
    setaccount(initialValue.signup);
  };

  const handleSignUp = async () => {
    let response = await authenticateSignup(signup);
    if (!response) {
      return;
    }
    handlClose();
    setAccount(signup.username);
  };
  const handleLogin = async () => {
    let response = await authenticateLogin(login);
    if (!response) {
      seterror(true);
      return;
    }
    handlClose();
    setAccount(login.username);
  };
  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const onLoginInputChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Dialog open={open} onClose={handlClose} maxWidth={"md"}>
        <DialogContent className={classes.component}>
          <Box style={{ display: "flex" }}>
            <Box className={classes.image}>
              <Typography variant="h5">{account.heading}</Typography>
              <Typography style={{ marginTop: "25px" }}>{account.subHeading}</Typography>
            </Box>
            {account.view === "login" ? (
              <Box className={classes.login}>
                <TextField
                  name="username"
                  label="Enter Username "
                  type="text"
                  fullWidth={true}
                  variant="standard"
                  onChange={(e) => onLoginInputChange(e)}
                />
                <TextField
                  name="password"
                  label="Enter Password"
                  type="password"
                  fullWidth={true}
                  variant="standard"
                  onChange={(e) => onLoginInputChange(e)}
                />
                {error && (
                  <Typography className={classes.error}>Invalid Username or Password</Typography>
                )}
                <Typography className={classes.text}>
                  By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
                </Typography>

                <Button
                  variant="contained"
                  className={classes.loginBtn}
                  onClick={() => handleLogin()}
                >
                  Login
                </Button>
                <Typography className={classes.Or}>Or</Typography>
                <Button variant="contained" className={classes.requestBtn}>
                  Request OTP
                </Button>
                <Typography className={classes.newtext} onClick={() => toggleAccount()}>
                  New to Flipkart? Create an account
                </Typography>
              </Box>
            ) : (
              <Box className={classes.login}>
                <TextField
                  onChange={(e) => onInputChange(e)}
                  name="firstname"
                  label="Enter Firstname"
                  variant="standard"
                  type="text"
                />
                <TextField
                  onChange={(e) => onInputChange(e)}
                  name="lastname"
                  label="Enter Lastname"
                  variant="standard"
                  type="text"
                />
                <TextField
                  onChange={(e) => onInputChange(e)}
                  name="username"
                  label="Enter Username"
                  variant="standard"
                  type="text"
                />
                <TextField
                  onChange={(e) => onInputChange(e)}
                  name="email"
                  label="Enter Email"
                  variant="standard"
                  type="email"
                />
                <TextField
                  onChange={(e) => onInputChange(e)}
                  name="password"
                  label="Enter Password"
                  variant="standard"
                  type="password"
                />
                <TextField
                  onChange={(e) => onInputChange(e)}
                  name="phone"
                  label="Enter Phone"
                  variant="standard"
                  type="number"
                  maxLength="10"
                />
                <Button className={classes.signupBtn} onClick={() => handleSignUp()}>
                  Sign Up
                </Button>
              </Box>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Login;
