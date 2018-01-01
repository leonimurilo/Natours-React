import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RotatingCard extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div className="rotating-card">
        <div className={`rotating-card__side rotating-card__side--front rotating-card__side--front-${this.props.color}`}>
          {this.props.frontComponent}
        </div>
        <div className={`rotating-card__side rotating-card__side--back rotating-card__side--back-${this.props.color}`}>
          {this.props.backComponent}
        </div>
      </div>
    );
  }

}

function validateColor(props, propName, componentName){
  componentName = componentName || 'RotatingCard';

  if(!props[propName] || typeof props[propName] !== 'string'){
    return new Error(`'${componentName}' component requires a valid color: primary, secondary, tertiary ...`);
  }
}

RotatingCard.defaultProps = {
  frontComponent: <div>No content (card front)</div>,
  backComponent: <div>No content (card back)</div>
};

RotatingCard.propTypes = {
  color: validateColor,
  frontComponent: PropTypes.element,
  backComponent: PropTypes.element
};

export default RotatingCard;
