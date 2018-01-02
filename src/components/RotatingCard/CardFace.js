import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {validateColor} from "./utils";

class CardFace extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div className={`rotating-card__side rotating-card__side--front rotating-card__side--front-${this.props.color}`}>
        <div className={`rotating-card__picture rotating-card__picture--${this.props.color}`}/>
        <h4 className={`rotating-card__heading`}>
          <span className={`rotating-card__heading-span rotating-card__heading-span--${this.props.color}`}>
            {this.props.heading}
          </span>
        </h4>
        <div className="rotating-card__details">{this.props.children}</div>
      </div>
    );
  }

}

CardFace.propTypes = {
  color: validateColor,
  heading: PropTypes.string,
  children: PropTypes.element.isRequired
};

export default CardFace;
