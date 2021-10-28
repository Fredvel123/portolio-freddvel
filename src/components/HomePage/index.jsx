import React, { Fragment } from 'react';
// import components
import Header from './Header';
// styled componets.
import { Banner, ButtonLang, Buttons, Text, TextHome } from '../../styledComponents/HomeStyled';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setLanguajes } from '../../redux-toolkit/slices/languaje';
// redux


function HomePage() {
  const languajes = useSelector(state => state.languajes.value);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Banner id="home_section">
        <Header />
        <TextHome>
            <Text>
            {languajes ?
            <h3>
              I'm a Front-end developer, I work with ReactJs and the technologies most demanded today! 
                I've become a junior developer, doing projects and solving common problems with code and software.
            </h3>
            :
            <h3>
              Soy un desarrollador Front-end, trabajo con ReactJs y también con las tecnologías más usadas al día de hoy! Me convertí un desarrollador junior, haciendo proyectos y resolviendo problemas comunes con código y software.
            </h3>
            }
            </Text>
          <Buttons>
            <a href="#about_section" >{languajes ? "lets start" : "Empecemos"}</a>
            <a href="#portfolio_section" >{languajes ? "Portfolio": "Proyectos"}</a>
          </Buttons>
          <ButtonLang onClick={() => dispatch(setLanguajes(!languajes))} >
              {languajes ? "English" : "Español"}
            </ButtonLang>
        </TextHome>
      </Banner>
    </Fragment>
  )
}

export default HomePage
