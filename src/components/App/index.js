/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from "../ErrorBoundary";

import LadingPage from "../LadingPage";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Switch>
            <Route exact path="/" component={LadingPage} />
          </Switch>
        </ErrorBoundary>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
