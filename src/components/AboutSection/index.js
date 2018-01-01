import React, { Component } from 'react';
import Composition from "../Composition";
import Button from "../Button";

import photo1 from "../../assets/images/nat-1-large.jpg";
import photo2 from "../../assets/images/nat-2-large.jpg";
import photo3 from "../../assets/images/nat-3-large.jpg";

class AboutSection extends Component {

  render() {
    let compositionPhotos = {
      p1: {
        url: photo1,
        alt: "Photo 1"
      },
      p2: {
        url: photo2,
        alt: "Photo 2"
      },
      p3: {
        url: photo3,
        alt: "Photo 3"
      }
    };

    return (
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Exciting tours for adventurous people
          </h2>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
              You're going to fall in love with nature
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quisquam facilis architecto commodi nesciunt dicta doloribus, odit nam iste voluptatum, repellendus officia.
            </p>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Live adventures like you never have before
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque adipisci accusantium fuga sed molestias ipsam, culpa, nobis quod cum asperiores rem quibusdam earum quo tempore omnis doloribus dignissimos unde perspiciatis?
            </p>
            <Button href="#" className="btn-text">Learn more →</Button>
          </div>
          <div className="col-1-of-2">
            <Composition photos={compositionPhotos}/>
          </div>
        </div>
      </section>
    );
  }

}

export default AboutSection;
