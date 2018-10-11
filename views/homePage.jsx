import React from 'react';

export default class HomePage extends React.Component {
  render() {

    //This can return any html. The script below I got from wordpress homepage :D
    return (
      <html>
        <head>
          <link rel="stylesheet" href="homePageStyle.css" />

        </head>
        <body>
          <div className="hp-hero-content">
            <h1 className="hp-hero-title no-widows">
              <span>WordPress powers</span>
              <span>31% of the&nbsp;internet.</span>
            </h1>
            <h2 className="hp-hero-subtitle no-widows">
              <span>The best WordPress</span>
              <span>experiences start&nbsp;here.</span>
            </h2>
            <div id="hp-hero-cta" className="hp-hero-cta">
              <a
                className="button is-cta is-large"
                id="hero-cta"
                href="//wordpress.com/start?ref=homepage"
              >
                Get Started
              </a>
            </div>
            <div className="hp-hero-more">
              <a id="hero-plans-anchor" href="#plans">
                Compare plans
              </a>
            </div>
          </div>
        </body>
        <script src="./script.js" />
      </html>
    );
  }
}
