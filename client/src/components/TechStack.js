import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const TechStack = () => {
  return (
    <div id="tech_skills" className="tech_skills">
      <div data-aos="flip-down">
        <h1 className="tech_skills_header">Tech Skills</h1>
      </div>
      <div className="tech_stack">
        <div className="tech_card_container">
          <div className="card">
            <h3 className="head">Frontend</h3>
            <span className="bodyItem">
              <i className="fab fa-bootstrap"></i> Bootstrap
            </span>
            <span className="bodyItem">
              <i className="fab fa-css3-alt"></i> CSS 3
            </span>
            <span className="bodyItem">
              <i className="fab fa-css3-alt"></i> CSS Stylized Components
            </span>
            <span className="bodyItem">
              <i className="fab fa-html5"></i> HTML 5
            </span>
            <span className="bodyItem">
              <i className="fab fa-js-square"></i> JavaScript (ES5/ES6)
            </span>
            <span className="bodyItem">
              <img
                src="https://img.icons8.com/ios-filled/15/000000/jquery.png"
                alt="jQuery_icon"
              />{" "}
              jQuery
            </span>
            <span className="bodyItem">
              <i className="fab fa-react"></i> React (v. 16.8+)
            </span>
          </div>
        </div>
        <div className="tech_card_container">
          <div className="card">
            <h3 className="head">Backend</h3>
            <span className="bodyItem">
              <img
                width="15px"
                src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
                alt="Express_icon"
              />{" "}
              Express
            </span>
            <span className="bodyItem">
              <img
                width="15px"
                src="https://img.icons8.com/color/452/mongodb.png"
                style={{ backgroundColor: "white" }}
                alt="MongoDB_icon"
              />{" "}
              MongoDB
            </span>
            <span className="bodyItem">
              <i className="fas fa-circle"></i> Mongoose
            </span>
            <span className="bodyItem">
              <i className="fab fa-node-js"></i> Node.js
            </span>
            <span className="bodyItem">
              <img
                src="https://img.icons8.com/ios-filled/15/000000/mysql-logo.png"
                alt="MySQL_icon"
              />{" "}
              MySQL
            </span>
            <span className="bodyItem">
              <img
                src="https://img.icons8.com/material/15/000000/postgreesql.png"
                alt="PostgreSQL_icon"
              />{" "}
              PostgreSQL
            </span>
            <span className="bodyItem">
              <i className="fas fa-server"></i> REST APIs
            </span>
            <span className="bodyItem">
              <img
                src="https://img.icons8.com/metro/15/000000/sql.png"
                alt="SQL_icon"
              />{" "}
              SQL
            </span>
          </div>
        </div>
        <div className="tech_card_container">
          <div className="card">
            <h3 className="head">Testing</h3>
            <span className="bodyItem">
              <i className="fas fa-coffee"></i> Chai
            </span>
            <span className="bodyItem">
              <i className="fab fa-react"></i> Enzyme
            </span>
            <span className="bodyItem">
              <i className="fas fa-coffee"></i> Mocha
            </span>
            <span className="bodyItem">
              <img
                width="15px"
                src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/jest-512.png"
                alt="Jest icon"
              />{" "}
              Jest
            </span>
            <span className="bodyItem">
              <i className="fas fa-mountain"></i> K6
            </span>
            <span className="bodyItem">
              <i className="fas fa-weight-hanging"></i> Loader.io
            </span>
            <span className="bodyItem">
              <i className="fab fa-react"></i> React Testing Library
            </span>
          </div>
        </div>
        <div className="tech_development_card_container">
          <div className="card">
            <h3 className="head">Development</h3>
            <span className="bodyItem">
              <i className="fab fa-aws"></i> AWS - EC2
            </span>
            <span className="bodyItem">
              <img
                src="https://img.icons8.com/wired/20/000000/babel.png"
                alt="babel_icon"
              />{" "}
              Babel
            </span>
            <span className="bodyItem">
              <img
                src="https://img.icons8.com/color/15/000000/circleci.png"
                alt="circleCI_icon"
              />{" "}
              CircleCI
            </span>
            <span className="bodyItem">
              <i className="fab fa-docker"></i> Docker
            </span>
            <span className="bodyItem">
              <i className="fab fa-git"></i> Git
            </span>
            <span className="bodyItem">
              <i className="fab fa-github"></i> GitHub
            </span>
            <span className="bodyItem">
              <i className="fab fa-google"></i> Google Developer Tools
            </span>
            <span className="bodyItem">
              <i className="fab fa-npm"></i> npm
            </span>
            <span className="bodyItem">
              <i className="fas fa-user-astronaut"></i> Postman
            </span>
            <span className="bodyItem">
              <i className="fas fa-file-code"></i> VS Code
            </span>
            <span className="bodyItem">
              <img
                src="https://img.icons8.com/wired/15/000000/webpack.png"
                alt="webpack_icon"
              />{" "}
              Webpack
            </span>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "100%",
          height: "5px",
          marginTop: "20px",
          borderColor: "rgb(103, 58, 183)",
          backgroundColor: "rgb(103, 58, 183)",
        }}
      />
    </div>
  );
};

export default TechStack;