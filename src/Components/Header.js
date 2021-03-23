import React from "react";
import Particles from "react-particles-js";

const Header = ({ name, occupation, description, social }) => {
  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <Particles
          style={{ zIndex: -1, position: "fixed", top: 0, left: 0 }}
          params={{
            particles: {
              number: {
                value: 40,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#40E0D0",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
              },

              size: {
                value: 10,
                random: true,
                anim: {
                  enable: false,
                  speed: 10,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 300,
                color: "#ffffff",
                opacity: 0.4,
                width: 2,
              },
            },

            retina_detect: true,
          }}
        />
        <div className="banner-text">
          <h1 className="responsive-headline">I'm {name}.</h1>
          <h3>
            I'm a <span>{occupation}</span>. {description}.
          </h3>
          <hr />

          <ul className="social">
            {social &&
              social.map((network) => {
                return (
                  <li key={network.name}>
                    <a href={network.url}>
                      <i className={network.className}></i>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
