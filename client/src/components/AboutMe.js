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
          <img src={profileImage} height='250px' className="about-me-photo"/>
        </div>
        <div style={{width:'80%', fontWeight:'400'}}>
          <h2>HELLO! 👋🏼</h2>
          <p>My name is Gabino Chacon, but everyone calls me Gabe. I really enjoy puzzles, video games, and sports; as I love to come up with solutions for every little thing. I have had many roles. The latest being Software Engineer. I think all of my past experiences have led me here. I have been a car and train mechanic(for GATX), door to door business salesman(for Intuit), warehouse/forklift worker, U.S. Marine(3521), mobile expert/retail sales associate, and college student.</p>

          <p>At the end of 2018 I decided to sell all of my possessions and travel the world for a year. I have visited a total of 31 countries, including military deployment. While in Peru, I met a person working off of their laptop at a hostel during breakfast. I asked what they did, and they responded that they work remotely, as a software engineer, for a start-up. I was amazed to find out that someone could be anywhere on the planet, as long as they have WiFi, and work/make money. I immediately looked online to see what it takes, and that was the moment I found my love for coding. I started learning JavaScript, Python, and MySQL on my own using Udemy and Codeacademy. Later I found out about Hack Reactor, and I haven't looked back since.</p>

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