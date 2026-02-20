import React from "react";
import "./Hero.css";
import profilePic from "../../assets/profile.jpg"; // تأكد من اسم الملف هنا

function Hero() {
  return (
    <section className="hero">
      <div className="profile-frame">
        <img src={profilePic} alt="Abusaada Mohammed Anabolic" className="profile-img" />
      </div>

      <h1 className="name">Abusaada Mohammed <span className="highlight">Anabolic</span></h1>

      <p className="title">Computer Science Student | Python & Django Developer</p>

      <p className="desc">
        I’m a third-year Computer Science student. Passionate about backend development and UI design.
        Currently improving my skills in Python, Django, and Figma.
      </p>

      <div className="socials">
        <a href="#" className="icon">GitHub</a>
        <a href="#" className="icon">LinkedIn</a>
        <a href="#" className="icon">Instagram</a>
        <a href="#" className="icon">Email</a>
      </div>

      <div className="buttons">
        <button className="btn primary">View My Work</button>
        <button className="btn secondary">Get In Touch</button>
      </div>
    </section>
  );
}

export default Hero;