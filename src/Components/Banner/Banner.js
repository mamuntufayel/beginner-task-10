import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../Images/banner/banner1.jpg";
import banner2 from "../../Images/banner/banner2.jpg";
import banner3 from "../../Images/banner/banner3.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel id="home">
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>Passoin</h3>
            <p>Work hard then wait for result</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>MindSet</h3>
            <p>Get a perfect diet along with your workout</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Gain the pain</h3>
            <p>Work hard and find the result visible after some days</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
