import React, { Fragment } from 'react';
// styled Components
import { About, TextAbout } from '../../styledComponents/AboutStyled';

function AboutPage() {
  return (
    <Fragment>
      <About id="about_section">
        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" alt="" />
        <TextAbout>
          <h2>About me</h2>
          <h3>
            Hi, my name is Freddy Velarde, I am a front-End Web developer and I'm specialized in ReactJs. <br />
            i have been study and learning Web Development through one year, where I built multiple proyects and code challenges 
            , everything that I learned I did as self-taught, reading blogs, documentation oficial, and practicing everyday. <br />
            Hope I can to work with you and your Team and build the future.      
           </h3>
          <a href="#!">Download CV</a>
        </TextAbout>
      </About>
    </Fragment>
  )
}

export default AboutPage;
