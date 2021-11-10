import React from "react";
import { Carousel } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import summer from "../assests/summerSale.png";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  item: {
    marginLeft: "25%",
    marginBottom: "20%",
    backgroundColor: "#008080",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
});
export default function Carousal() {
  const classes = useStyles();
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={summer} alt="First slide" />

          <Carousel.Caption>
            <Button variant="contained" size="large" className={classes.item}>
              SHOP NOW
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/736x/43/c4/47/43c4477d6760cb0ad791eee55b0b2278.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_23-2149017494.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
