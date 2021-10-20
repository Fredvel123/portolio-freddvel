import React, { Fragment } from 'react';
// import components
import Header from './Header';
// styled componets.
import { Banner, Buttons, Text, TextHome } from '../../styledComponents/HomeStyled';



function HomePage() {
  return (
    <Fragment>
      <Banner id="home_section">
        <Header />
        <TextHome>
          <Text>
            <h3>I'm a Front-End Developer, I work with ReactJs and the technologies most demanded today! 
                I've become a junior developer doing projects and solving common problems with code and software.    
            </h3>
          </Text>
          <Buttons>
            <button>Contact me</button>
            <button>Download CV</button>
           </Buttons>
        </TextHome>
      </Banner>
    </Fragment>
  )
}

export default HomePage
