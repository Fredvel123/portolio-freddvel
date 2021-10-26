import styled from "styled-components";
// tools
import color from './tools/color.json';
import fonts from './tools/fonts.json';

// const image = 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=874&q=80'

export const ContactSection = styled.div`
  width: 100%;
  background: #000;
  color: ${color.white};
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  & h2 {
    font-family: ${fonts.title};
    font-size: 22px;
    padding-top: 25px;
  }
  @media screen and (max-width: 540px){
    h2 {
        font-size: 15px;
    }
  }
` 
export const Icons = styled.div`
  & img {
    margin: 15px 10px;
    width: 70px;
    height: 70px;
    transition: ease-in .2s;
  }
  img:hover {
    transform: scale(1.2);
  }
  @media screen and (max-width: 540px){
    img {
        width: 45px;
        height: 45px;
    }
  } 
`