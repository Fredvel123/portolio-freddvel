import styled from 'styled-components';
import color from './tools/color.json'
import fonts from './tools/fonts.json'


export const About = styled.div`
  background: ${color.dark2};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  & img {
    width: 275px; 
  }
  @media screen and (max-width: 750px){
    height: auto;
    /* flex-direction: column; */
    img {
      margin: 20px 0;
    }
  }
  @media screen and (max-width: 585px){
    flex-direction: column;
    img {
      width: 50%;
      margin-top: 20px;
      margin-bottom: 0px;
    }
  }
`

export const TextAbout = styled.div`
  width: 50%;
  margin-left: 45px;
  & h2 {
    color: ${color.pink};
    margin-bottom: 20px;
    font-family: ${fonts.title};
    font-size: 30px;
  }
  & h3 {
    font-family: ${fonts.text};
    font-size: 18px;
    color: ${color.white};
    margin-bottom: 45px;
  }
  & a {
    color: ${color.white};
    background: ${color.pink};
    padding: 15px 10px;
    margin-right: 20px;
    transition: .5s;
  }
  a:hover {
    color: ${color.dark};
    background: ${color.sky};
  }
  @media screen and (max-width: 750px){
    padding-bottom: 20px;
    margin-left: 25px;
    h2 {
      font-size: 25px;
    }
    h3 {
      font-size: 17px;
    }
  }
  @media screen and (max-width: 585px){
    a {
      margin-bottom: 15px;
      margin-right: 0;
      padding: 15px 30px;
      width: 100%;
      text-align: center;
    }
  }
  @media screen and (max-width: 585px ){
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    width: 80%;
    margin: 15px 0;
    h3{
      /* text-align: center; */
      margin-bottom: 25px;
    }
    a {
      padding: 10px 30px;
    }
  }
`