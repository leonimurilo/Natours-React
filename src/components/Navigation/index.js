import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Navigation extends Component {

  renderOptions(menuOptions){
    return menuOptions.map(function(element, index, array){
      return (<li key={index} className="navigation__item"><Link to={element.to} className="navigation__link"><span>0{index + 1}</span>{element.text}</Link></li>);
    });
  }

  render() {
    return (
      <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon"></span>
        </label>
        <div className="navigation__background"> </div>
        <nav className="navigation__nav">
          <ul className="navigation__list">{this.renderOptions.bind(this)(this.props.options)}</ul>
        </nav>
      </div>
    );
  }

}

export default Navigation;
