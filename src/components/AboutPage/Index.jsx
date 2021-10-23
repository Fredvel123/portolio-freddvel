import React, { Fragment } from 'react';
// styled Components
import { About, TextAbout } from '../../styledComponents/AboutStyled';
import wallpaper from '../../images/wallpaper6.jpg'

function AboutPage() {
  return (
    <Fragment>
      <About id="about_section">
        <img src={wallpaper} alt="" />
        <TextAbout> 
          <h2>About me</h2>
          <h3>
            Hi, my name is Freddy Velarde, I am a front-End Web developer and I'm specialized in ReactJs. <br />
            i have been study and learning Web Development through one year, where I built multiple proyects and code challenges 
            , everything that I learned I did as self-taught, reading blogs, documentation oficial, and practicing everyday. <br />
            Hope I can to work with you and your Team and build the future.      
           </h3>
          <a href="https://drive.google.com/file/d/11lI7JhkOZ6QBkkcuXg6M3tuzwgtgfoqs/view?usp=sharing" target="_b">CV English</a>
          <a href="https://drive.google.com/file/d/1CG5xsw6JDhykZr67aoGMkHicD0yhs_s2/view?usp=sharing" target="_b">CV Spanish</a>
        </TextAbout>
      </About>
    </Fragment>
  )
}

export default AboutPage;
