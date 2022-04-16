import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
const Service = ({ service }) => {
  const { name, description, img, price } = service;
  return (
    <div className="col-12 col-lg-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <h4>Price:{price}</h4>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
