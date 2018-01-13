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

    let menuOptions = [
      {to: "about", text: "About Natours"},
      {to: "benefits", text: "Your benefits"},
      {to: "popularTours", text: "Popular tours"},
      {to: "stories", text: "Stories"},
      {to: "book", text: "Book now"},
    ]

    return (
      <div className="lading-page">
        <Navigation options={menuOptions}/>
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
