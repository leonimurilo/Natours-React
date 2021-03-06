import React, { Component } from 'react';
import Story from "../Story";
import Button from "../Button";

import photo1 from "../../assets/images/nat-8.jpg";
import photo2 from "../../assets/images/nat-9.jpg";

import mp4Video from "../../assets/videos/video.mp4";
import webmVideo from "../../assets/videos/video.webm";

class StoriesSection extends Component {

  render() {
    return (
      <section className="section-stories">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={mp4Video} type="video/mp4"/>
            <source src={webmVideo} type="video/webm"/>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">WE MAKE PEOPLE GENUINELY HAPPY</h2>
        </div>
        <div className="row">
          <Story header="I had the best week ever with my family"
          imageUrl={photo1}
          imageAlt="Person on a tour"
          caption="Mary Smith">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Story>
        </div>
        <div className="row">
          <Story header="Wow! My life is completely different now"
          imageUrl={photo2}
          imageAlt="Person on a tour"
          caption="Jack wilson">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id optio nesciunt dolorum Id optio nesciunt dolorum Id optio nesciunt dolorum provident ducimus unde illo voluptate possimus ipsum, quaerat, natus modi autem tempora. Deserunt sed veniam autem voluptatem, reiciendis!
          </Story>
        </div>
        <div className="u-center-text u-margin-top-large">
          <Button href="#" className="btn-text">Read all stories →</Button>
        </div>
      </section>
    );
  }

}

export default StoriesSection;
