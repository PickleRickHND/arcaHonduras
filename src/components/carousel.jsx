import React from "react";
import Carousel from "react-bootstrap/Carousel";

import img1 from "../images/carouselImages/img1.jpg";
import img2 from "../images/carouselImages/img2.jpg";
import img3 from "../images/carouselImages/img3.jpg";

import "./css/carousel.css";

function CarouselComponent() {
  return (
    <div className="Carousel">
      <Carousel fade indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={img1}
            alt="First Slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={img2}
            alt="Second Slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={img3}
            alt="Third Slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;

