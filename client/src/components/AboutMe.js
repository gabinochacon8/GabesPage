import React from 'react';
import styled from 'styled-components';
import resume from '../../src/assets/GabeChaconResume.pdf';

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
        <div>
          <h3>Photo</h3>
        </div>
        <div>
          <h2>HELLO</h2>
          <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>

          <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
          <div style={{borderRadius:'2px solid black'}}>
            <a href={resume} target="_blank" className='resume'> <i class="fas fa-scroll" style={{paddingRight:'3px'}}></i>Resume</a>
          </div>
        </div>
      </Halfs>
    </div>
  );
}

export default AboutMe;