import React, {Fragment, useState} from 'react';
// styled componets.
import {HeaderStyled} from '../../styledComponents/HomeStyled'
// icons
import menuOpen from '../../icons/menu-open.png';
import close from '../../icons/out.png';

function Header() {
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
      <HeaderStyled menu={openCLoseMenu} scrolled={headerScrolled}>
        <a href="#home_section" >Freddy Velarde</a>
        <ul>
          <a href="#home_section">Home</a>
          <a href="#about_section">About me</a>
          <a href="#skills_section" >Skills</a>
          <a href="#portfolio_section" >Portfolio</a>
          <a href="#contact_section" >Contact</a>
        </ul>
        <img src={ !openCLoseMenu ? menuOpen : close} onClick={menuFunction} alt="" />
      </HeaderStyled> 
    </Fragment>
  )
}

export default Header
