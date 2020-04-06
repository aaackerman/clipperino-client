import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Navbar from 'components/Navbars/Navbar.js';
import Footer from 'components/Footers/Footer.js';
import Sidebar from 'components/Sidebar/Sidebar.js';
import routes from 'routes.js';

const Layout = (props) => (
  <>
    <Sidebar
      {...props}
      routes={routes}
      logo={{
        innerLink: '/',
        imgSrc: require('assets/img/brand/argon-react.png'),
        imgAlt: '...'
      }}
    />
    <div className="main-content">
      <Navbar {...props} brandText="test" />
      {props.children}
      <Container fluid>
        <Footer />
      </Container>
    </div>
  </>
);

export default Layout;
