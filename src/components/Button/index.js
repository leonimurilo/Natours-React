import React, { Component } from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Link to={this.props.to} className={`pill ${ this.props.styleName }`}>{this.props.children || "no content"}</Link>
    );
  }

}

Button.defaultProps = {
  to: "/",
  children: "No content"
};

Button.propTypes = {
  styleName: PropTypes.string,
  children: PropTypes.string,
  to: PropTypes.string
};


export default Button;
