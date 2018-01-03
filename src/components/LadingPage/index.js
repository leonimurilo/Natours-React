import React, { Component } from 'react';
import Header from "../Header";
import AboutSection from "../AboutSection";
import FeaturesSection from "../FeaturesSection";
import ToursSection from "../ToursSection";
import StoriesSection from "../StoriesSection";

class LadingPage extends Component {

  render() {
    return (
      <div className="lading-page">
        <Header/>
        <main>
          <AboutSection/>
          <FeaturesSection/>
          <ToursSection/>
          <StoriesSection/>
        </main>
      </div>
    );
  }

}

export default LadingPage;
