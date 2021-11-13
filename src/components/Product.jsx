import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Search from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
const useStyles = makeStyles({
  product: {
    flex: "1",
    margin: "5px",
    padding: "20px",
    minWidth: "280px",
    height: "350px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  img: {
    height: "80%",
    zIndex: "2",
  },
  info: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: "40px",
    height: "40px",
    top: "0",
    left: "0",
    zIndex: "2",
    color: "white",
    margin: "10px",
    backgroundColor: "#008080",
    opacity: "80%",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default function Product({ item }) {
  const classes = useStyles();
  return (
    <div className={classes.product}>
      <img className={classes.img} src={item.img} alt="60" />
      <div className={classes.info}>
        <div className={classes.icon}>
          <Search />
        </div>
        <div className={classes.icon}>
          <AddShoppingCartIcon />
        </div>
        <div className={classes.icon}>
          <FavoriteBorderIcon />
        </div>
      </div>
    </div>
  );
}
