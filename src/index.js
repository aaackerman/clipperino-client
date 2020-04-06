import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import 'assets/plugins/nucleo/css/nucleo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'assets/scss/argon-dashboard-react.scss';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ClipContextProvider } from './contexts/useClipsContext';

import Layout from './layouts/Layout';
import routes from './routes';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const RoutesList = () =>
  routes.map(({ path, component: Component }) => (
    <Route
      path={path}
      render={(routeProps) => (
        <Layout {...routeProps}>
          <Component />
        </Layout>
      )}
    />
  ));

const App = () => (
  <ApolloProvider client={client}>
    <ClipContextProvider>
      <Router>
        <Switch>
          <RoutesList />
          <Redirect from="/" to="/clips" />
          <Redirect from="*" to="/clips" />
        </Switch>
      </Router>
    </ClipContextProvider>
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));
