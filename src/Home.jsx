import React, {Fragment} from 'react';
// IMPORTING COMPONENTS.
import AboutPage from './components/AboutPage/Index';
import ContactPage from './components/ContacPage/Index';
import HomePage from './components/HomePage';
import Skills from './components/SkillsPage/Index';
import PortfolioPage from './components/PortfolioPage/Index';


function Home() {
  return (
    <Fragment>
      <HomePage />
      <AboutPage />
      <Skills />
      <PortfolioPage />
      <ContactPage />
    </Fragment>
  )
};

export default Home;
