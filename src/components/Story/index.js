import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Story extends Component {

  render() {
    return (
      <div className="story">
        <figure className="story__shape">
          <img className="story__image" src={this.props.imageUrl} alt={this.props.imageAlt}/>
        </figure>
        <div className="story__text">
          <h3 className="heading-tertiary u-margin-bottom-small">{this.props.header}</h3>
          <p>{this.props.children}</p>
        </div>
      </div>
    );
  }

}

Story.propTypes = {
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  children: PropTypes.string,
  header: PropTypes.string
}

export default Story;
