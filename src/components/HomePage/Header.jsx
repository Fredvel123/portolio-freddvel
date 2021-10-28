import React, {Fragment, useState} from 'react';
// styled componets.
import {HeaderStyled} from '../../styledComponents/HomeStyled'
// icons
import menuPink from '../../icons/menuPink.png'
import { useSelector } from 'react-redux';

function Header() {
  const languajes = useSelector(state => state.languajes.value);

  const [openCLoseMenu, setopenCLoseMenu] = useState(false);
  const menuFunction = () => {
    setopenCLoseMenu(!openCLoseMenu)
  }
  const closeMenuByScroll = () => {
    if (openCLoseMenu ) {
      menuFunction()
    }
  }
  window.addEventListener("scroll", closeMenuByScroll)
  // header fixed
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const isScrolled = () => {
    if (window.scrollY > 150) {
      setHeaderScrolled(true);
    } else if (window.scrollY === 0  ){
      setHeaderScrolled(false);
    }
  }
  window.addEventListener("scroll", isScrolled)
  return (
    <Fragment>
      {languajes ?
        <HeaderStyled menu={openCLoseMenu} scrolled={headerScrolled}>
        <a href="#home_section" >Freddy Velarde</a>
        <ul>
          <a href="#home_section">Home</a>
          <a href="#about_section">About me</a>
          <a href="#skills_section" >Skills</a>
          <a href="#portfolio_section" >Portfolio</a>
          <a href="#contact_section" >Contact</a>
        </ul>
        <img src={menuPink} onClick={menuFunction} alt="" />
      </HeaderStyled> 
        :
      <HeaderStyled menu={openCLoseMenu} scrolled={headerScrolled}>
      <a href="#home_section" >Freddy Velarde</a>
      <ul>
        <a href="#home_section">Inicio</a>
        <a href="#about_section">Acerca</a>
        <a href="#skills_section" >Habilidades</a>
        <a href="#portfolio_section" >Portafolio</a>
        <a href="#contact_section" >Contacto</a>
      </ul>
      <img src={menuPink} onClick={menuFunction} alt="" />
    </HeaderStyled> 
      }
    </Fragment>
  )
}

export default Header
