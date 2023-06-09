import React from "react";
import "../Hero/quoting.css";

function QuoteHero() {
  return (
    <div className="hero is-fullheight is-black">
      <div className="hero-body quote">
        <div className="container has-text-centered">
          <div className="padding">
          </div>
          <h1 className="title is-size-1 has-text-white">
            Books are a uniquely portable magic.
          </h1>
          <br />
          <div className="columns">
            <div className="column">
              <img src={require('../../assets/book-5.png')} alt="book cover" />

            
            </div>
            <div className="column">
            <img src={require('../../assets/book-2.png')} alt="book cover" />
            </div>
            <div className="column">
            <img src={require('../../assets/book-3.png')} alt="book cover" />
            </div>
            <div className="column">
            <img src={require('../../assets/book-4.png')} alt="book cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteHero;
