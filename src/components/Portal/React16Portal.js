import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createPortal} from 'react-dom';
import {isDOMAvailable} from './utils';

class React16Portal extends Component {
  componentWillUnmount() {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode);
    }
    this.defaultNode = null;
  }

  render() {
    if (!isDOMAvailable) {
      return null;
    }
    if (!this.props.node && !this.defaultNode) {
      this.defaultNode = document.createElement('div');
      document.body.appendChild(this.defaultNode);
    }
    return createPortal(
      this.props.children,
      this.props.node || this.defaultNode
    );
  }
}

React16Portal.propTypes = {
  children: PropTypes.node.isRequired,
  node: PropTypes.any
};

export default React16Portal;
