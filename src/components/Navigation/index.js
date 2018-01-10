import React, { Component } from 'react';

class Navigation extends Component {

  render() {
    return (
      <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
        <label htmlFor="navi-toggle" className="navigation__button">Menu</label>
        <div className="navigation__background"> </div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item"><a href="#" className="navigation__link">About Natous</a></li>
            <li className="navigation__item"><a href="#" className="navigation__link">Your benefits</a></li>
            <li className="navigation__item"><a href="#" className="navigation__link">Popular tours</a></li>
            <li className="navigation__item"><a href="#" className="navigation__link">Stories</a></li>
            <li className="navigation__item"><a href="#" className="navigation__link">Book now</a></li>
          </ul>
        </nav>
      </div>
    );
  }

}

export default Navigation;
