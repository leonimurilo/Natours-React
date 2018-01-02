import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeatureItem extends Component {

  render() {
    return (
        <div className="feature-item">
          <i className={`feature-item__icon ${this.props.iconClass}`}/>
          <h3 className="heading-tertiary u-margin-bottom-small">{this.props.title}</h3>
          <p className="feature-item__text">{this.props.children}</p>
        </div>
    );
  }

}

FeatureItem.defaultProps = {
  children: "No content",
  title: "No title"
};

FeatureItem.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string,
  iconClass: PropTypes.string,
};

export default FeatureItem;
