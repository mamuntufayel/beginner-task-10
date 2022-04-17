import React from "react";
import { Button, Card } from "react-bootstrap";

const WeekendSpecialDetail = ({ weekendSpecial }) => {
  const { name, img, description } = weekendSpecial;
  return (
    <div className="col-12 col-lg-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button className="d-block w-75 mx-auto" variant="primary">
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WeekendSpecialDetail;
