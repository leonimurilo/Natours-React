import React, { Component } from 'react';
import {RotatingCard, CardFace, CardBack} from "../RotatingCard";
import Button from "../Button";

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
            <RotatingCard
              face={<CardFace color="secondary" heading="The Sea Explorer">
                <ul>
                  <li>3 day tours</li>
                  <li>Up to 30 people</li>
                  <li>2 tour guides</li>
                  <li>Sleep in cozy hotels</li>
                  <li>Difficulty: easy</li>
                </ul>
              </CardFace>}
              back={<CardBack color="secondary" topText="Only" mainText="$297" button={<Button href="#popup" className="btn btn--white">Book now!</Button>}/>}
            />
          </div>
          <div className="col-1-of-3">
            <RotatingCard
              face={<CardFace color="primary" heading="The Sea Explorer">
                <ul>
                  <li>7 day tours</li>
                  <li>Up to 40 people</li>
                  <li>6 tour guides</li>
                  <li>Sleep in provided tents</li>
                  <li>Difficulty: medium</li>
                </ul>
              </CardFace>}
              back={<CardBack color="primary" topText="Only" mainText="$497" button={<Button href="#popup" className="btn btn--white">Book now!</Button>}/>}
            />
          </div>
          <div className="col-1-of-3">
            <RotatingCard
              face={<CardFace color="tertiary" heading="The Sea Explorer">
                <ul>
                  <li>5 day tours</li>
                  <li>Up to 15 people</li>
                  <li>3 tour guides</li>
                  <li>Sleep in provided tents</li>
                  <li>Difficulty: hard</li>
                </ul>
              </CardFace>}
              back={<CardBack color="tertiary" topText="Only" mainText="$897" button={<Button href="#popup" className="btn btn--white">Book now!</Button>}/>}
            />
          </div>
        </div>
      </section>
    );
  }

}

export default ToursSection;
