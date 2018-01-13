import React, { Component } from 'react';
import Button from "../Button";
import {StatefulPortal} from "../Portal";
import Popup from "../Popup";

import mainLogo from "../../assets/images/logo-white.png";

class Header extends Component {

  render() {
    return (
      <header className="header">
        <div className="header__logo-box">
          <img src={mainLogo} alt="Logo" className="header__logo"/>
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Outdoors</span>
            <span className="heading-primary--sub">is where life happens</span>
          </h1>

          <StatefulPortal closeDelay={500} closeOnEsc node={document && document.getElementById('modal')}>
            {({ openPortal, closePortal, isOpen, portal }) => [
              <a to="/discover"
                      className="btn btn--white btn--animated"
                      key="foo"
                      onClick={openPortal}>Discover our tours</a>,
              portal(<Popup onClose={closePortal}/>)
            ]}
          </StatefulPortal>
        </div>
      </header>
    );
  }

}

export default Header;
