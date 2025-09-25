import React from "react";
import "./App.css";

function AboutUs() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-text">
      We are a team of students building a course project in React.
      Our goal is to learn, experiment, and share our knowledge with others.
      </p>

      <h2 className="about-subtitle">Our Team Members</h2>
      <div className="team-section">
        <div className="team-card">
          <h3>Maksim Kholodkov</h3>
          <p className="role">Frontend Developer</p>
          <p className="desc">Passionate of Frontend Development</p>
        </div>
        <div className="team-card">
          <h3>Bibolat Kaldybay</h3>
          <p className="role">Backend Developer</p>
          <p className="desc">Working on Bugfix and Features</p>
        </div>
        <div className="team-card">
          <h3>Igor Boloban</h3>
          <p className="role">Lead Software Engineer</p>
          <p className="desc">Scrum master</p>
        </div>
        <div className="team-card">
          <h3>Aynur Muftakhov</h3>
          <p className="role">Principal Software Engineer</p>
          <p className="desc">Working with arango db and with kubernetes</p>
        </div>
      </div>

      <h2 className="about-subtitle">Values</h2>
      <div className="values-section">
        <div className="value-card">Team building</div>
        <div className="value-card">Creativity</div>
        <div className="value-card">Responsibility</div>
        <div className="value-card">Learning</div>
      </div>

      <h2 className="about-subtitle">What we do</h2>
      <div className="work-section">
        <div className="work-card">
          <h3>Create product</h3>
          <p>Work with ai tools</p>
        </div>
        <div className="work-card">
          <h3>Sync and daylics</h3>
          <p>Helping each other and talking about our Responsibility</p>
        </div>
        <div className="work-card">
          <h3>Research</h3>
          <p>Researching ai tools and discuss in arch meetings</p>
        </div>
      </div>

      <h2 className="about-subtitle">Our contacts</h2>
      <div className="contacts-section">
        <div className="contact-card">
          <h4>Email</h4>
          <p><a href="mailto:example@gmail.com">b_kaldybay@netcracker.com</a></p>
        </div>
        <div className="contact-card">
          <h4>Telegram</h4>
          <p><a href="https://t.me/example" target="_blank" rel="noreferrer">@Bibo_005</a></p>
        </div>
        <div className="contact-card">
          <h4>GitHub</h4>
          <p><a href="https://github.com/example" target="_blank" rel="noreferrer">github.com/Bibolat2005</a></p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
