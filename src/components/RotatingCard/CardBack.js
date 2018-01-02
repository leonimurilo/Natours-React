import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {validateColor} from "./utils";

class CardBack extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div className={`rotating-card__side rotating-card__side--back rotating-card__side--back-${this.props.color}`}>
        <div className="rotating-card__cta">
            <div className="rotating-card__content-box">
                <p className="rotating-card__content-top-text">{this.props.topText}</p>
                <p className="rotating-card__content-main-text">{this.props.mainText}</p>
            </div>
            {this.props.button}
        </div>
      </div>
    );
  }

}

CardBack.propTypes = {
  color: validateColor,
  topText: PropTypes.string.isRequired,
  mainText: PropTypes.string.isRequired,
  button: PropTypes.element.isRequired
};

export default CardBack;
