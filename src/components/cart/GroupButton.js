import { Button, ButtonGroup } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  component: {
    marginTop: "20px",
    "&>*": {
      height: "30px",
    },
  },
  btn: {
    borderRadius: "50%",
  },
});

const GroupButton = () => {
  const classes = useStyles();
  let [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };
  const handleDecrement = () => {
    setCounter((counter) => counter - 1);
  };
  return (
    <div>
      <ButtonGroup className={classes.component}>
        <Button className={classes.btn} onClick={() => handleDecrement()} disabled={counter === 1}>
          -
        </Button>
        <Button>{counter}</Button>
        <Button className={classes.btn} onClick={() => handleIncrement()}>
          +
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default GroupButton;
