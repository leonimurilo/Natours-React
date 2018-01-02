import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RotatingCard extends Component {
  constructor(props){
    super(props);
  }

  cloneElementWithClasses(child, classes) {
    if(!classes){
      return child;
    }

    let className = child.props.className || "";
    if(!child.props.className){
      className += classes;
    }else{
      let childClasses = child.props.className.split(" ");
      classes = classes.split(" ");
      classes.forEach(function(element){
        if(childClasses.indexOf(element) < 0){
          childClasses.push(element);
        }
      });

      className = childClasses.join(" ");

    }
    return React.cloneElement(child, {className});
  }

  render() {

    return (
      <div className="rotating-card">
        {this.cloneElementWithClasses(this.props.face, "rotating-card__side rotating-card__side--front")}
        {this.cloneElementWithClasses(this.props.back, "rotating-card__side rotating-card__side--back")}
      </div>
    );
  }

}

RotatingCard.defaultProps = {
  face: <div style={{color: "black"}}>No content (card face)</div>,
  back: <div style={{color: "black"}}>No content (card back)</div>
};

RotatingCard.propTypes = {
  face: PropTypes.element,
  back: PropTypes.element
};

export default RotatingCard;
