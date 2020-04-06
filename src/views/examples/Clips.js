import React from 'react';
import { Container, Row } from 'reactstrap';
import Header from '../../components/Headers/Header';
import ClipCard from '../../components/Clips/ClipCard.jsx';

class Clips extends React.Component {
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

export default Clips;
