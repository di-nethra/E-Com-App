import React from "react";
import { product } from "../pages/data";
import Product from "./Product";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  products: {
    padding: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  img: {
    height: "75%",
  },
});
export default function Products() {
  const classes = useStyles();
  return (
    <div className={classes.products}>
      {product.map((item) => (
        <Product item={item} />
      ))}
    </div>
  );
}
