import React, { Component } from 'react';
import Header from "../Header";
import AboutSection from "../AboutSection";

class LadingPage extends Component {

  render() {
    return (
      <div className="lading-page">
        <Header/>
        <main>
          <AboutSection/>
        </main>
      </div>
    );
  }

}

export default LadingPage;
