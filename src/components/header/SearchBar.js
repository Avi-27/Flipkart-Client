import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useDispatch, useSelector } from "react-redux";
// import { products } from "../../constants/data";
import { getProducts as listProducts } from "../../redux/actions/productActions";
import { List, ListItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  list: {
    position: "absolute !important",
    top: "40px !important",
    left: 0,
    background: "white",
    width: "100%",
  },
});

const Search = styled("div")(({ theme }) => ({
  borderRadius: 2,
  backgroundColor: "#fff",
  color: "black",
  paddingLeft: 15,
  position: "relative",
  bottom: 5,
  marginLeft: 10,

  width: "200%",
  display: "flex",
  justifyContent: "space-between",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: 6,
  marginTop: 3,
  height: "100%",
  color: "#2874f0",
  display: "flex",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  fontSize: "unset",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
  },
  width: "100%",
}));
const SearchBar = () => {
  const [text, settext] = useState();
  const [open, setopen] = useState(true);

  const getText = (text) => {
    settext(text);
    setopen(false);
  };
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  const classes = useStyles();

  return (
    <div>
      <Search>
        <StyledInputBase
          placeholder="Search for products,brands and more"
          inputProps={({ "aria-label": "search" }, { style: { fontSize: "unset" } })}
          onChange={(e) => getText(e.target.value)}
        />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

        {text && (
          <List className={classes.list} hidden={open}>
            {products
              .filter((product) =>
                product.title.longTitle.toLowerCase().includes(text.toLowerCase())
              )
              .map((product) => (
                <ListItem>
                  <Link
                    to={`/product/${product.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                    onClick={() => setopen(true)}
                  >
                    {product.title.longTitle}
                  </Link>
                </ListItem>
              ))}
          </List>
        )}
      </Search>
    </div>
  );
};

export default SearchBar;
