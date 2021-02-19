import React from "react";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

const Template = () => {
  return (
    <Container>
      <Row className="p-3">
        <Col>
          <img
            src="https://grassets.s3.amazonaws.com/assets/offer.jpg"
            alt="offer"
            height="200"
            width="150"
          />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Template;
