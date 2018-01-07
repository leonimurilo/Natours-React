import React, { Component } from 'react';

import mainLogo from "../../assets/images/logo-green-2x.png";

class Footer extends Component {

  render() {
    return (
      <footer className="footer">
        <div className="footer__logo-box">
          <img src={mainLogo} alt="Full logo" className="footer__logo"/>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item"><a href="" className="footer__link">Company</a></li>
                <li className="footer__item"><a href="" className="footer__link">Contact us</a></li>
                <li className="footer__item"><a href="" className="footer__link">Carrers</a></li>
                <li className="footer__item"><a href="" className="footer__link">Privacy policy</a></li>
                <li className="footer__item"><a href="" className="footer__link">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer__copyright">Built by <a href="#" className="footer__link">Leoni</a> following an Udemy course</p>
          </div>
        </div>
      </footer>
    );
  }

}

export default Footer;
