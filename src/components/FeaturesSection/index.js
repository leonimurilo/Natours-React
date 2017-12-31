import React, { Component } from 'react';
import '../../styles/css/icon-font.css';

import FeatureItem from "../FeatureItem";

class FeaturesSection extends Component {

  render() {
    return (
      <section className="section-features">
        <div className="row">
          <div className="col-1-of-4">
            <FeatureItem iconClass="icon-basic-world" title="Explore the World">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, repellendus debitis repellat.
            </FeatureItem>
          </div>
          <div className="col-1-of-4">
            <FeatureItem iconClass="icon-basic-compass" title="Meet nature">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet et, sed iste distinctio iusto.
            </FeatureItem>
          </div>
          <div className="col-1-of-4">
            <FeatureItem iconClass="icon-basic-map" title="Find your way">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </FeatureItem>
          </div>
          <div className="col-1-of-4">
            <FeatureItem iconClass="icon-basic-heart" title="Live a healthier life">
              Similique officiis doloremque eaque pariatur explicabo facere nostrum provident aut, porro at inventore quae.
            </FeatureItem>
          </div>
        </div>
      </section>
    );
  }

}

export default FeaturesSection;
