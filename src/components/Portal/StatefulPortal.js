import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Portal from './Portal';
import {keyCodes} from './utils';

class StatefulPortal extends Component {
  constructor(props) {
    super(props);
    this.portalNode = null;
    this.state = { active: !!props.defaultOpen };
    this.openPortal = this.openPortal.bind(this);
    this.closePortal = this.closePortal.bind(this);
    this.wrapWithPortal = this.wrapWithPortal.bind(this);
    this.onOutsideMouseClick = this.onOutsideMouseClick.bind(this);
    this.onKeydown = this.onKeydown.bind(this);
  }

  componentDidMount() {
    if (this.props.closeOnEsc) {
      document.addEventListener('keydown', this.onKeydown);
    }
    if (this.props.closeOnOutsideClick) {
      document.addEventListener('click', this.onOutsideMouseClick);
    }
  }

  componentWillUnmount() {
    if (this.props.closeOnEsc) {
      document.removeEventListener('keydown', this.onKeydown);
    }
    if (this.props.closeOnOutsideClick) {
      document.removeEventListener('click', this.onOutsideMouseClick);
    }
  }

  openPortal(e) {
    if (this.state.active) {
      return;
    }
    if (e && e.nativeEvent) {
      e.nativeEvent.stopImmediatePropagation();
    }
    this.setState({ active: true }, this.props.onOpen);
  }

  closePortal() {
    if (!this.state.active) {
      return;
    }
    setTimeout(() => {
      this.setState({ active: false }, this.props.onClose);
    }, this.props.closeDelay);
  }

  wrapWithPortal(children) {
    if (!this.state.active) {
      return null;
    }
    return (
      <Portal
        node={this.props.node}
        key="react-portal"
        ref={portalNode => (this.portalNode = portalNode)}
      >
        {children}
      </Portal>
    );
  }

  onOutsideMouseClick(e) {
    if (!this.state.active) {
      return;
    }
    const root = this.portalNode.props.node || this.portalNode.defaultNode;
    if (!root || root.contains(e.target) || (e.button && e.button !== 0)) {
      return;
    }
    this.closePortal();
  }

  onKeydown(e) {
    if (e.keyCode === keyCodes.escape && this.state.active) {
      this.closePortal();
    }
  }

  render() {
    return this.props.children({
      openPortal: this.openPortal,
      closePortal: this.closePortal,
      portal: this.wrapWithPortal,
      isOpen: this.state.active
    });
  }
}

StatefulPortal.propTypes = {
  children: PropTypes.func.isRequired,
  defaultOpen: PropTypes.bool,
  node: PropTypes.any,
  openByClickOn: PropTypes.element,
  closeOnEsc: PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  closeDelay: PropTypes.number,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
};

StatefulPortal.defaultProps = {
  onOpen: () => {},
  onClose: () => {},
  closeDelay: 0
};

export default StatefulPortal;
