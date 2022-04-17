import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const WeekendSpecialDetail = ({ weekendSpecial }) => {
  const { name, img, description } = weekendSpecial;
  const navigate = useNavigate();
  return (
    <div className="col-12 col-lg-4">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
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

export default WeekendSpecialDetail;
