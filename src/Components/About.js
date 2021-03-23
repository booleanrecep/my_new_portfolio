import React from "react";

const About = ({
  name,
  image,
  bio,
  phone,
  address: { city, state, zip, street },
  email,
  resume_link,
}) => {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={"images/" + image}
            alt="Tim Baker Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={resume_link}
                  className="button"
                >
                  <i className="fa fa-file-text"></i>My CV
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
