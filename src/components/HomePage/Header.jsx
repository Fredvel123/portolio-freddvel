import React, {Fragment} from 'react';
// styled componets.
import {HeaderStyled} from '../../styledComponents/HomeStyled'
// icons
import menuOpen from '../../icons/menu-open.png'

function Header() {
  return (
    <Fragment>
      <HeaderStyled>
        <h3>Freddy Velarde</h3>
        <ul>
            <a href="#!" target="_blank">About me</a>  
            <a href="#!" target="_blank">Skills</a>  
            <a href="#!" target="_blank">Portfolio</a>  
            <a href="#!" target="_blank">Contact</a>  
        </ul>
        <img src={menuOpen} alt="" />
      </HeaderStyled> 
    </Fragment>
  )
}

export default Header
