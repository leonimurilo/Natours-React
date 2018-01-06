import React, { Component } from 'react';

class BookSection extends Component {

  render() {
    return (
      <section className="section-book">
        <div className="row">
          <div className="book">
            <div className="book__form">
              <form action="#" className="form">
                <div className="u-margin-bottom-medium">
                  <h2 className="heading-secondary">
                    Start booking now
                  </h2>
                </div>
                <div className="form__group">
                  <input id="name" type="text" className="form__input" placeholder="Full name" required/>
                  <label htmlFor="name" className="form__label">Full Name</label>
                </div>
                <div className="form__group">
                  <input id="email" type="email" className="form__input" placeholder="Email address" required/>
                  <label htmlFor="email" className="form__label">Email address</label>
                </div>
                <div className="form__group">
                  <div className="form__radio-group">
                    <input type="radio" className="form__radio-input" id="smallTour" name="size"/>
                    <label htmlFor="smallTour" className="form__radio-label">Small tour group</label>
                  </div>
                </div>
                <div className="form__group">
                  <div className="form__radio-group">
                    <input type="radio" className="form__radio-input" id="largeTour" name="size"/>
                    <label htmlFor="smallTour" className="form__radio-label">Large tour group</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default BookSection;
