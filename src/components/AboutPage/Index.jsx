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
          <h2>ABOUT ME</h2>
          <h3>
          Hi, my name is Freddy Erick Velarde Silva, I am a front-end web developer and I'm specialized in ReactJs.I have 
          been studying and learning web development throughout one year, where I built multiple projects and code challenges, 
          everything that I learned I did as self-taught, reading blogs, official documentation, and practicing everyday      
           </h3>
          <a href="https://drive.google.com/file/d/1t4Jlp0y-J59O1sXCBeEOsBhSYIIQwZ9h/view?usp=sharing" target="_b">CV English</a>
          <a href="https://drive.google.com/file/d/1PkOOIQ3AMttP79lLXEFHRxhxzcmNj3C6/view?usp=sharing" target="_b">CV Spanish</a>
        </TextAbout>
      </About>
    </Fragment>
  )
}

export default AboutPage;
