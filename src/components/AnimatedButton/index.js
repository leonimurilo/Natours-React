import React, { Component } from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

class AnimatedButton extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Link to={this.props.to} className="btn btn--white btn--animated">{this.props.children || "no content"}</Link>
    );
  }

}

AnimatedButton.defaultProps = {
  to: "/",
  children: "No content"
};

AnimatedButton.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string
};


export default AnimatedButton;
