import React, { Component } from 'react';
import Story from "../Story";

import photo1 from "../../assets/images/nat-8.jpg";

class StoriesSection extends Component {

  render() {
    return (
      <section className="section-stories">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary"></h2>
        </div>
        <div className="row">
          <Story header="I had the best week ever with my family"
          imageUrl={photo1}
          imageAlt="Person on a tour"
          caption="Mary Smith">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id optio nesciunt dolorum Id optio nesciunt dolorum Id optio nesciunt dolorum provident ducimus unde illo voluptate possimus ipsum, quaerat, natus modi autem tempora. Deserunt sed veniam autem voluptatem, reiciendis!
          </Story>
        </div>
      </section>
    );
  }

}

export default StoriesSection;
