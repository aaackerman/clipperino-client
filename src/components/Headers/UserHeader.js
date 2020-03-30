import React from "react";
import { Button, Container, Row, Col } from "reactstrap";

const UserHeader = () => (
  <>
    <div
      className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
      style={{
        minHeight: "600px",
        backgroundImage:
          "url(" + require("assets/img/theme/profile-cover.jpg") + ")",
        backgroundSize: "cover",
        backgroundPosition: "center top"
      }}
    >
      <span className="mask bg-gradient-default opacity-8" />
      <Container className="d-flex align-items-center" fluid>
        <Row>
          <Col lg="7" md="10">
            <h1 className="display-2 text-white">Hi, I'm Alex</h1>
            <p className="text-white mt-0 mb-5">
              This is your profile page. You can see the progress you've made
              with your work and manage your projects or assigned tasks
            </p>
            <Button
              color="info"
              href="https://www.twitch.tv/alexiconz"
              onClick={() => (window.location = "http://twitch.tv/alexiconz")}
            >
              Watch on Twitch
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default UserHeader;
