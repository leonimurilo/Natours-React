import React, { Component } from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props){
    super(props);
  }

  render() {
    if(this.props.href){
      return (
        <a href={this.props.href} className={`${ this.props.className }`}>{this.props.children || "no content"}</a>
      );
    }
    return (
      <Link to={this.props.to} className={`${ this.props.className }`}>{this.props.children || "no content"}</Link>
    );
  }

}

function linkRequirements(props, propName, componentName){
  componentName = componentName || 'Button';
  if ((!props.to && !props.href)) {
    return new Error(`X'${componentName}' component requires 'href' or 'to' props be passed as strings.`);
  }

  if(props[propName] && typeof props[propName] !== 'string'){
    return new Error(`'${componentName}' component requires 'href' or 'to' props be passed as strings.`);
  }
}

Button.defaultProps = {
  children: "No content"
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  href: linkRequirements,
  to: linkRequirements
};


export default Button;
