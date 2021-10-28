import React, { Fragment } from 'react';
// styled Components
import { About, TextAbout } from '../../styledComponents/AboutStyled';
import wallpaper from '../../images/wallpaper6.jpg'
import { useSelector } from 'react-redux';

function AboutPage() {
  const languajes = useSelector(state => state.languajes.value);
  return (
    <Fragment>
      <About id="about_section">
        <img src={wallpaper} alt="" />
        <TextAbout> 
          <h2>{languajes ? "ABOUT ME" : "ACERCA DE MI"}</h2>
          {languajes ?
            <h3>
            Hi, my name is Freddy Erick Velarde Silva, I am a front-end web developer and I'm specialized in ReactJs. I have 
            been studying and learning web development throughout one year, where I built multiple projects and code challenges, 
            everything that I learned I did as self-taught, reading blogs, official documentation, and practicing everyday      
             </h3>
             :
            <h3>
              Hola, mi nombre es Freddy Erick Velarde Silva, soy un desarrollador web y estoy especializado en ReactJS.
              Estudie y aprendi desarrollo web durante un año, donde construí varios proyectos y desafíos de código, todo 
              lo que aprendí fue completamente como autodidacta, leyendo blogs, documentación oficial y practicando todos los días
            </h3>
          }
          <a href="https://drive.google.com/file/d/1PkOOIQ3AMttP79lLXEFHRxhxzcmNj3C6/view?usp=sharing" target="_b">{languajes ? "CV Spanish" : "CV Español"}</a>
          <a href="https://drive.google.com/file/d/1t4Jlp0y-J59O1sXCBeEOsBhSYIIQwZ9h/view?usp=sharing" target="_b">{languajes ? "CV English" : "CV Ingles"}</a>
        </TextAbout>
      </About>
    </Fragment>
  )
}

export default AboutPage;
