import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import links from "./links";

const Home = () => {
  return (
    <Container>
      <Row>
        <h1>Tyler's Homepage</h1>
        <Col
          md="auto"
          className="m-2"
          style={{
            backgroundColor: "aliceBlue",
            borderRadius: "1rem",
            maxWidth: "20rem",
          }}
        >
          <h2>Personal</h2>
          {links.personal.map((link, key) => {
            return (
              <Button className="m-2" key={key} href={link.url} target="_blank">
                {link.name}
              </Button>
            );
          })}
        </Col>

        <Col
          className="m-2"
          style={{
            backgroundColor: "lavenderBlush",
            borderRadius: "1rem",
            maxWidth: "20rem",
          }}
        >
          <h2>Job Search</h2>
          {links.jobSearch.map((link, key) => {
            return (
              <Button className="m-2" key={key} href={link.url} target="_blank">
                {link.name}
              </Button>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
