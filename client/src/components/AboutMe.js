import React from 'react';
import styled from 'styled-components';
import resume from '../../src/assets/GabeChaconResume.pdf';
import profileImage from '../../src/assets/inDaSnow.JPG';

const Halfs = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  text-align: left;
`

function AboutMe(props) {
  return (
    <div style={{ color:'black', paddingTop: "20px", bottom:'-50px' }}>
        <h1 style={{ fontSize:'3em', textAlign:'left', marginLeft:'50px' }} >About Me</h1>
      <Halfs>
        <div style={{marginLeft:'30px'}}>
          <img src={profileImage} className="about-me-photo"/>
        </div>
        <div style={{width:'80%', fontWeight:'400'}}>
          <h2>HELLO! 👋🏼</h2>
          <p>My name is Gabino Chacon, but everyone calls me Gabe. I am a Marine Veteran who found a love for coding in 2018 when solo traveling the world. While eating breakfast in a hostel in Peru, I met a person working off of their laptop. I asked him what he did, and he told me he was a freelance software engineer for a startup company. Unfamiliar with coding, I was immediately intrigued. While sipping his coffee in Lima, he was able to contribute to building a web application in the United States. Inspired by the opportunity of software engineering, I took the initiative to learn how to code. Today, I am a qualified Fullstack Engineer. </p>

          <p>Thank you for stopping by my page. Please take a look at my resume, and let me know if there are any solutions I can help with!</p>
          <div style={{borderRadius:'2px solid black'}}>
            <a href={resume} target="_blank" className='resume'> <i class="fas fa-scroll" style={{paddingRight:'3px', marginBottom:'100px'}}></i>Resume</a>
          </div>
        </div>
      </Halfs>
    </div>
  );
}

export default AboutMe;