import React from "react";
import "./Service.css";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const Service = ({ service }) => {
  const { name, description, img, price } = service;
  const navigate = useNavigate();
  return (
    <div className="col-12 col-lg-4 box-shadow">
      <Card>
        <Card.Img className="img-fluid" variant="top" src={img} />
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <h4>Price:{price}</h4>
          <Button
            onClick={() => navigate("/checkout")}
            className="d-block w-75 mx-auto"
            variant="primary"
          >
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
