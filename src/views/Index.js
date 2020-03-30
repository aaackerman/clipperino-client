import React from "react";
import { Container, Row } from "reactstrap";
import Header from "components/Headers/Header.js";
import ClipCard from "components/Clips/ClipCard.jsx";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: 1
    };
  }
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index
    });
  };
  render() {
    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
          <Row>
            <ClipCard />
          </Row>
        </Container>
      </>
    );
  }
}

export default Index;
