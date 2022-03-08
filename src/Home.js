import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Home = () => {
  const links = [
    { name: "github", url: "https://www.github.com/tymonaghan" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/tyler-monaghan-dev" },
    { name: "gmail", url: "https://mail.google.com/mail/" },
    { name: "google calendar", url: "https://calendar.google.com/calendar/" },
  ];
  return (
    <Container>
      <h1>Tyler's Homepage</h1>
      {links.map((link, key) => {
        return (
          <Button className="m-2" key={key} href={link.url} target="_blank">
            {link.name}
          </Button>
        );
      })}
    </Container>
  );
};

export default Home;
