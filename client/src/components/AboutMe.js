import React from "react";
import styled from "styled-components";
import profilePic from "../assets/proPic.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaScroll } from "react-icons/fa";

function AboutMe(props) {
  return (
    <div id="about" className="about">
      <div data-aos="flip-down">
        <h1 style={{ fontSize: "3em", textAlign: "center" }}>About Me</h1>
      </div>
      <div className="about_container">
        <img
          src={profilePic}
          alt="profile image"
          className="main_profile_img"
        />
        <div className="about_p">
          <h2>HELLO! 👋🏼</h2>
          <p>
            My name is Gabe. You killed my... oh wait wrong story. I am a Marine
            Veteran who found a love for coding in 2018 when solo traveling the
            world. I met a person working off of their laptop while eating
            breakfast at our hostel. I asked him what he did, and he told me he
            was a freelance software engineer for a startup company. I was
            immediately intrigued that while sipping his coffee in Peru, he was
            able to contribute to building a web application in the US. I had
            some exposure to coding in college, but I wasn't sure what path to
            take then. Inspired by the opportunity of software engineering, I
            took the initiative to learn how to code, and here I am.{" "}
          </p>

          <p>
            Thank you for stopping by my page. Please take a look at my resume,
            and let me know if there are any solutions I can help with! Feel
            free to hire me as well 😉
          </p>
          <div className="about_links">
            <div className="link">
              <a
                href="https://drive.google.com/file/d/1BBjVKhX9TLGP1OoD-0seisJsusEgKvxv/view?usp=sharing"
                target="_blank"
                className="resume"
              >
                <FaScroll size="lg" />
              </a>
            </div>
            <div className="link">
              <a
                href="https://www.linkedin.com/in/gabe-chacon/"
                target="_blank"
                className="linked_in_button"
              >
                <FaLinkedin size="lg" />
              </a>
            </div>
            <div className="link">
              <a
                href="mailto:gabino.chacon8@gmail.com"
                target="_blank"
                className="gmail_button"
              >
                <FaEnvelope size="lg" />
              </a>
            </div>
            <div className="link">
              <a
                href="https://github.com/gabinochacon8"
                target="_blank"
                className="github_button"
              >
                <FaGithub size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "50%",
          height: "5px",
          marginTop: "50px",
          borderColor: "rgb(103, 58, 183)",
          backgroundColor: "rgb(103, 58, 183)",
        }}
      />
    </div>
  );
}

export default AboutMe;
