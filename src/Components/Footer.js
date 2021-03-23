import React from "react";

const Footer = ({ social }) => {
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {social.map(function (network) {
              return (
                <li key={network.name}>
                  <a href={network.url}>
                    <i className={network.className}></i>
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="copyright">
            <li>&copy; Copyright 2017 Tim Baker</li>
            <li>
              Design by{" "}
              <a title="Styleshout" href="http://www.styleshout.com/">
                Styleshout
              </a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
