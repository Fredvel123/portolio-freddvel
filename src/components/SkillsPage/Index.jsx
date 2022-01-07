import React, { Fragment } from 'react';
// styled components
import { ImagesSection, OtherSkilsSecition, ReactSection, SkillsStyled, TextAndImage, TextSection, WebDevelopment } from '../../styledComponents/SkillsStyled';
// icons
import reactIcon from '../../icons/react.png';
import jsIcon from '../../icons/javascript.png';
import cssIcon from '../../icons/css.png';
import htmlIcon from '../../icons/html.png';
import gitIcon from '../../icons/git.png';
import terminalIcon from '../../icons/terminal.png';
// import check from '../../icons/check.png'
// redux
import { useSelector } from 'react-redux';

function Skills() {
  const languajes = useSelector(state => state.languajes.value)
  return (
    <Fragment>
      <SkillsStyled id="skills_section">
        <TextAndImage>
          {languajes ?
            <TextSection>
              <WebDevelopment>
                <h2>Web development skills</h2>
                <h3> &#10004; Html, css(flex-box, grid) responsive design (<span>Mobile first</span>) </h3>
                <h3> &#10004;  Git and GitHub</h3>
                <h3> &#10004;  Javascript: Variables, functions, loops, conditionals, <span>async programming</span>, methods array, and <span>oop</span> </h3>
              </WebDevelopment>
              <ReactSection>
                <h2>React Js skills</h2>
                <h3>
                  &#10004; Hooks, funcional components, props, and JSX.
                </h3>
                <h3>
                  &#10004;  I have been working with <span>styled components</span>, and useContext.
                </h3>
                <h3>
                &#10004; I can call Rest APIs, (async - await) with json objets.
                </h3>
                <h3>
                  &#10004;  I've been working on <span>React Redux</span> (React-Toolkit) and <span>React Router</span>.
                </h3>
              </ReactSection>
              <OtherSkilsSecition>
                <div>
                  <h2>Other Skills</h2>
                  <h3>&#10004;  Terminal (Linux & Windows) and english(B-1)</h3>
                </div>

              </OtherSkilsSecition>
            </TextSection>
            :
            <TextSection>
              <WebDevelopment>
                <h2>Habilidades en desarrollo web</h2>
                <h3> &#10004; Html, css(flex-box, grid) responsive design (<span>Mobile first</span>) </h3>
                <h3> &#10004;  Git y GitHub</h3>
                <h3> &#10004;  Javascript: Variables, funciones, bucles, condicionales, <span>programación asincrónica</span>, metodos de arrays, y <span>poo</span> </h3>
              </WebDevelopment>
              <ReactSection>
                <h2>Habilidades en ReactJs</h2>
                <h3>
                  &#10004; Hooks, componentes funcionales, props, y JSX.
                </h3>
                <h3>
                  &#10004;  He estado trabajando con <span>styled components</span>, y useContext.
                </h3>
                <h3>
                &#10004; Puedo llamar APIS con objetos Json 
                </h3>
                <h3>
                  &#10004; He trabajo con <span>React Redux</span> (React-Toolkit)  y <span>React Router</span>.
                </h3>
              </ReactSection>
              <OtherSkilsSecition>
                <div>
                  <h2>Otras Habilidades</h2>
                  <h3>&#10004;  Terminal (Linux y Windows) e inglés(B-1)</h3>
                </div>

              </OtherSkilsSecition>
            </TextSection>
          }




          <img src="https://images.unsplash.com/photo-1492551557933-34265f7af79e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />

        </TextAndImage>

        <ImagesSection>
          <img src={reactIcon} alt="" />
          <img src={jsIcon} alt="" />
          <img src={htmlIcon} alt="" />
          <img src={cssIcon} alt="" />
          <img src={gitIcon} alt="" />
          <img src={terminalIcon} alt="" />
        </ImagesSection>
      </SkillsStyled>
    </Fragment>
  )
}

export default Skills
