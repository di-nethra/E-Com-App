import React from "react";
import PrimarySearchAppBar from "../components/AppBar";
import Carousal from "../components/Carousal";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Catergories from "../components/Catergories";
import Products from "../components/Products";

const useStyles = makeStyles({
  root: {
    backgroundColor: "red",
    color: (props) => props.color,
  },
  grid: {},
});

export default function UserLandingPage() {
  const classes = useStyles();
  return (
    <div>
      <PrimarySearchAppBar />
      <div className={classes.grid}>
        <Carousal />

        <Catergories />
        <Products />
      </div>
    </div>
  );
}
