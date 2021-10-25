import React, { Fragment } from 'react';
// styled components
import { ImagesSection, OtherSkilsSecition, ReactSection, SkillsStyled, TextAndImage, TextSection, Title, WebDevelopment } from '../../styledComponents/SkillsStyled';
// icons
import reactIcon from '../../icons/react.png';
import jsIcon from '../../icons/javascript.png';
import cssIcon from '../../icons/css.png';
import htmlIcon from '../../icons/html.png';
import gitIcon from '../../icons/git.png';
import terminalIcon from '../../icons/terminal.png';

function Skills() {
  return (
    <Fragment>
      <SkillsStyled id="skills_section">
        <TextAndImage>
          <TextSection>
            <WebDevelopment>
              <h2>Web Developement knowledge</h2>
              <h3>Html, Css(flex-box, grid, masonry) Responsive Design, <span>Movile first</span> </h3>
              <h3>Git and GitHub</h3>
              <h3>Javascript: Variables, functions, loops, conditionals, <span>Async</span>, methods array, and <span>oop</span> </h3>
            </WebDevelopment>

            <ReactSection>
              <h2>React Js knowledge</h2>
              <h3>
                I work with the React tools: Hooks, funcional components, props, and JSX.
              </h3>
              <h3>
                I also work with <span>styled components</span> , and useContext.
              </h3>
              <h3>
                I can to call Rest APIs, (async - await) with json objets.
              </h3>
              <h3>
                I've been working on <span>React Redux</span> (React-Toolkit) and <span>React Router</span>.
              </h3>
            </ReactSection>

            <OtherSkilsSecition>
              <div>
                <h2>Other Skills</h2>
                <h3>Terminal (windows) and English(B-1)</h3>
              </div>

            </OtherSkilsSecition>
          </TextSection>
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
