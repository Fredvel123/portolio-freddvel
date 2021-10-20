import React, {Fragment} from 'react';
// IMPORTING COMPONENTS.
import AboutPage from './components/AboutPage/Index';
import ContactPage from './components/ContacPage/Index';
import HomePage from './components/HomePage';
import Skills from './components/SkillsPage/Index';


function Home() {
  return (
    <Fragment>
      <HomePage />
      <AboutPage />
      <Skills />
      <ContactPage />
    </Fragment>
  )
};

export default Home;
