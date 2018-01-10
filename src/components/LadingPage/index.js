import React, { Component } from 'react';
import Navigation from "../Navigation";
import Header from "../Header";
import AboutSection from "../AboutSection";
import FeaturesSection from "../FeaturesSection";
import ToursSection from "../ToursSection";
import StoriesSection from "../StoriesSection";
import BookSection from "../BookSection";
import Footer from "../Footer";

class LadingPage extends Component {

  render() {
    return (
      <div className="lading-page">
        <Navigation/>
        <Header/>
        <main>
          <AboutSection/>
          <FeaturesSection/>
          <ToursSection/>
          <StoriesSection/>
          <BookSection/>
        </main>
        <Footer/>
      </div>
    );
  }

}

export default LadingPage;
