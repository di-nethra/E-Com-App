import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  catergories: {
    flex: "1",
    margin: "5px",
    position: "relative",
  },
  img: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  title: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  fonts: {
    color: "white",
  },
  btn: {
    backgroundColor: "#008080",
    marginTop: "30px",
  },
});
export default function Catergory({ item }) {
  const classes = useStyles();
  return (
    <div className={classes.catergories}>
      <img className={classes.img} src={item.img}></img>
      <div className={classes.title}>
        <h1 className={classes.fonts}>{item.title}</h1>
        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          size="large"
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
}
