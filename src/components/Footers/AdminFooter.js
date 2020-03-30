import React from "react";
import { Row, Col } from "reactstrap";

const Footer = () => (
  <footer className="footer">
    <Row className="align-items-center justify-content-xl-between">
      <Col xl="6">
        <div className="copyright text-center text-xl-left text-muted">
          Created by{" "}
          <a
            className="font-weight-bold ml-1"
            href="https://twitch.tv/alexiconz"
            rel="noopener noreferrer"
            target="_blank"
          >
            alexiconz
          </a>
        </div>
      </Col>
    </Row>
  </footer>
);

export default Footer;
