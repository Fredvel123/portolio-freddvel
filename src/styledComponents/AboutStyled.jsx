import styled from 'styled-components';

const color = {
    darkBlue: "#000C24",
    sky: "#009688",
    white: "#fbfbfb",
    grayLight: "#cfcfcf ",
    tomato: "#F44336",
    gray: "#928A97"
  }
const fonts = {
  title: "'Source Sans Pro', sans-serif",
  text: "'Barlow', sans-serif",
  text2: " 'Karma', serif",
  subtitle: "'Source Sans Pro', sans-serif",
  informal: " 'Patrick Hand', cursive"
}

export const About = styled.div`
  background: ${color.grayLight};
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
  }
  @media screen and (max-width: 585px){
    flex-direction: column;
    img {
      width: 80%;
      margin-top: 20px;
    }
  }
`

export const TextAbout = styled.div`
  width: 50%;
  margin-left: 45px;
  & h2 {
    color: ${color.tomato};
    margin-bottom: 20px;
    font-family: ${fonts.title};
    font-size: 30px;
  }
  & h3 {
    font-family: ${fonts.text};
    font-size: 18px;
    margin-bottom: 45px;
  }
  & a {
    color: ${color.white};
    background: ${color.tomato};
    padding: 15px 45px;
    transition: .5s;
  }
  a:hover {
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
  @media screen and (max-width: 585px ){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 15px 0;
    h3{
      text-align: center;
      margin-bottom: 25px;
    }
    a {
      padding: 10px 30px;
    }
  }
`