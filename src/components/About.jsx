import React from "react";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-heading">
        <h1>About</h1>
      </div>

      <div className="about-container">
        <div className="about-image-container">
          <img src= "pfp.png" alt="portrait" />
        </div>

        <div className="about-content">
          <p>
            I'm a developer and designer based in San Francisco, blending my passion for technology with creative problem-solving. My journey began unexpectedly when a teapot mishap damaged my Nintendo DS, leading my uncle to teach me circuit board repair. That moment sparked a fascination that evolved into a deep interest in robotics and computer science.
          </p>

          <p>
            This curiosity led me to the University of California, Santa Cruz, where I combined hardware and software expertise to develop projects focused on sustainability and community safety. A standout achievement was SOL, my safety light project, which earned recognition in the Santa Cruz Launchpad competition and introduced me to entrepreneurship.
          </p>

          <p>
            Currently, I am seeking Frontend, Full Stack, or Software Engineering roles.
          </p>
        </div>
      </div>
    </div>
  );
};

// "A subject holds no meaning without its context—its existence is shaped by the world around it."

// https://calendar.ucsc.edu/event/santa_cruz_launchpad_2023

// https://engineering.ucsc.edu/

// https://www.cied.ucsc.edu/launchpad-2024

export default About;