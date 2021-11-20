import React from 'react';
import vendiTrio from '../assets/vendiTrio.png'
import tbTrio from '../assets/tbTrio.png'
import macCutout from '../assets/macCutout.png'

function Projects(props) {
  return (
    <div id="projects">
      <div className="heading">
        <div class="hr"></div>
        <div>
          <h1 className="projects-header">Projects</h1>
        </div>
        <div class="hr"></div>
      </div>
      <div className="projects-container">
        <div className="project-cards">
          <div className="p-card">
            <div className="projects-inner-card">
              <div className="projects-title">
                <h2>Vendicator</h2>
              </div>
              <img src={vendiTrio} alt="mobile displays" className="projects-image-vendicator"/>
              <h6 className="h6">React Native | Cocoapods | Apple Maps API</h6>
            </div>
            <div className="projects-button">
              <a href="https://github.com/TribusTechDev/vendicatorMobile" target="_blank"target="_blank" className="projects-link">Learn More</a>
            </div>
          </div>
          <div className="p-card">
            <div className="projects-inner-card">
              <div className="projects-title">
                <h2>Travel Bug</h2>
              </div>
              <img src={tbTrio} alt="mobile displays" className="projects-image-travel-bug"/>
              <h6 className="h6">
                React Native | Cocoapods | Google-Maps API | PostreSQL |
                Mongoose/MongoDB
              </h6>
            </div>
            <div className="projects-button">
              <a href="https://github.com/Safe-Sojourns/travel-bug" target="_blank" className="projects-link">Learn More</a>
            </div>
          </div>
          <div className="p-card">
            <div className="projects-inner-card">
              <h2>Project Catwalk</h2>
              <img src={macCutout} alt="Macbook display" className="projects-image-project-catwalk"/>
              <h6 className="h6">
              ReactJS | NodeJS | Webpack/Babel | Express | Axios |
              Styled Components | Jest | React Testing Library
              </h6>
            </div>
            <div className="projects-button">
            <a href="https://github.com/Pixel-Triceratops/Triceratops-Republic" target="_blank" className="projects-link">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;