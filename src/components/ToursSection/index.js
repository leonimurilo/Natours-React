import React, { Component } from 'react';
import RotatingCard from "../RotatingCard";

class ToursSection extends Component {

  render() {
    return (
      <section className="section-tours">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Most popular tours
          </h2>
        </div>
        <div className="row">
          <div className="col-1-of-3">
            <RotatingCard color="primary"/>
          </div>
          <div className="col-1-of-3">
            <RotatingCard  color="secondary"/>
          </div>
          <div className="col-1-of-3">
            <RotatingCard  color="tertiary"/>
          </div>
        </div>
      </section>
    );
  }

}

export default ToursSection;
