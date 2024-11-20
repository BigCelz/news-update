import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './NewsItemComponent.css'
import image1 from '../Asset/news1.jpg'

const NewsItemComponent = ({ title, description, src, url }) => {
  return (
    <Container>
      <Card className="bg-dark text-light mb-2 mx-3 my-3" >
        <Card.Img
          src={src?src:image1}
          className="card-img-top image"      
        />
        <Card.Body>
          <Card.Title className="fs-4">{title.slice(0, 50)}</Card.Title>
          <Card.Text className="fs-6">{description}</Card.Text>
          <Button variant="primary" href={url}>
            Read More
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NewsItemComponent;
