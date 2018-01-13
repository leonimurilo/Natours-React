/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Navigation from "../Navigation";
import NotFoundPage from "../NotFoundPage";
import ErrorBoundary from "../ErrorBoundary";

import LadingPage from "../LadingPage";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {

    let menuOptions = [
      {to: "/", text: "home"},
      {to: "about", text: "About Natours"},
      {to: "benefits", text: "Your benefits"},
      {to: "popularTours", text: "Popular tours"},
      {to: "stories", text: "Stories"},
      {to: "book", text: "Book now"}
    ];

    return (
      <div>
        <Navigation options={menuOptions}/>
        <ErrorBoundary>
          <Switch>
            <Route exact path="/" component={LadingPage} />
            <Route component={NotFoundPage}/>
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
