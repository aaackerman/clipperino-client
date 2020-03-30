import React from "react";
import { Container, Row, Col } from "reactstrap";

const Login = () => (
  <>
    <footer className="py-5">
      <Container>
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
      </Container>
    </footer>
  </>
);

export default Login;
