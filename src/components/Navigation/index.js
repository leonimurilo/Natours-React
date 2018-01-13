import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Navigation extends Component {

  constructor(props){
    super(props)
    this.state = {isOpen: false};
  }

  toggleMenu(event){
    // event.preventDefault();
    this.setState({isOpen: !this.state.isOpen})
  }

  renderOptions(menuOptions){
    return menuOptions.map((element, index) =>{
      return (
        <li key={index} className="navigation__item">
          <Link to={element.to} onClick={this.toggleMenu.bind(this)} className="navigation__link">
            <span>0{index + 1}</span>{element.text}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle" checked={this.state.isOpen}/>
        <label htmlFor="navi-toggle" className="navigation__button" onClick={this.toggleMenu.bind(this)}>
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
