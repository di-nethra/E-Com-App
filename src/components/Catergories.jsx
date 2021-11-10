import React from "react";
import { catergory } from "../pages/data";
import Catergory from "./Catergory";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  catergories: {
    display: "flex",
    padding: "20px",
    justifyContent: "space-between",
  },
});
export default function Catergories() {
  const classes = useStyles();
  return (
    <div className={classes.catergories}>
      {catergory.map((item) => (
        <Catergory item={item} />
      ))}
    </div>
  );
}
