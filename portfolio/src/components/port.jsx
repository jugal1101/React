import React from "react";
import "./Port.css";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <h1 className="logo">Jugal's Portfolio</h1>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#tech">Tech</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-content">
          <h2>
            Hi, I'm <span>Jugal Rana</span>
          </h2>
          <p>Frontend Developer from Surat</p>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I am a B.Sc.IT student passionate about clean and user-friendly web
          apps, skilled in React, JavaScript, and CSS.
        </p>
      </section>

      <section id="tech" className="tech">
        <h2>Tech Stack</h2>
        <div className="tech-grid">
          {["HTML", "CSS", "JavaScript", "React", "Tailwind", "GitHub"].map(
            (tech) => (
              <div key={tech} className="tech-card">
                {tech}
              </div>
            )
          )}
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Project 1</h3>
            <p>Appointment Booking App</p>
            <button className="project-btn">
              <a href="https://github.com/jugal1101/React/tree/main/Appointment-booking-app" target="_blank">
                View Repo
              </a>
            </button>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>Book Tracking App</p>
            <button className="project-btn">
              <a href="https://github.com/jugal1101/React/tree/main/Book-App" target="_blank">
                View Repo
              </a>
            </button>
          </div>
          <div className="project-card">
            <h3>Project 3</h3>
            <p>React Props</p>
            <button className="project-btn">
              <a href="https://github.com/jugal1101/React/tree/main/react-props" target="_blank">
                View Repo
              </a>
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <footer className="footer">
        <p>©️ {new Date().getFullYear()} Jugal Rana. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
