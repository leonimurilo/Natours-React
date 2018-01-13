import React, { Component } from 'react';

import p1 from "../../assets/images/nat-8.jpg";
import p2 from "../../assets/images/nat-9.jpg";

class Popup extends Component {

  constructor(props){
    super(props);
    this.state = {
      isClosed: false
    };
  }

  onClose(){
    this.setState({isClosed: true})
    this.props.onClose();
  }

  render() {
    let closedClassModifier = this.state.isClosed ? "--closed" : ""
    console.log("mod", closedClassModifier);
    return (
      <div className={`popup popup${closedClassModifier}`}>
          <div className={`popup__content popup__content${closedClassModifier}`}>
              <div className="popup__left">
                  <img src={p1} alt="Tour photo" className="popup__img"/>
                  <img src={p2} alt="Tour photo" className="popup__img"/>
              </div>
              <div className="popup__right">
                  <button onClick={this.onClose.bind(this)} className="popup__close">&times;</button>
                  <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
                  <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
                  <p className="popup__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Sed sed risus pretium quam. Aliquam sem et tortor consequat id. Volutpat odio facilisis mauris sit
                      amet massa vitae. Mi bibendum neque egestas congue. Placerat orci nulla pellentesque dignissim enim
                      sit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Malesuada pellentesque elit eget
                      gravida cum sociis natoque penatibus et. Proin fermentum leo vel orci porta non pulvinar neque laoreet.
                      Gravida neque convallis a cras semper. Molestie at elementum eu facilisis sed odio morbi quis. Faucibus
                      vitae aliquet nec ullamcorper sit amet risus nullam eget. Nam libero justo laoreet sit. Amet massa
                      vitae tortor condimentum lacinia quis vel eros donec. Sit amet facilisis magna etiam. Imperdiet sed
                      euismod nisi porta.
                  </p>
                  <a href="#" className="btn btn--green">Book now</a>
              </div>
          </div>
      </div>
    );
  }

}

export default Popup;
