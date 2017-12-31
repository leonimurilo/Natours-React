import React, { Component } from 'react';
import Header from "../Header";
import AboutSection from "../AboutSection";
import FeaturesSection from "../FeaturesSection";

class LadingPage extends Component {

  render() {
    return (
      <div className="lading-page">
        <Header/>
        <main>
          <AboutSection/>
          <FeaturesSection/>
        </main>
      </div>
    );
  }

}

export default LadingPage;
