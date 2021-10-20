import styled from 'styled-components';

const image = "https://images.unsplash.com/photo-1492551557933-34265f7af79e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80";

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


export const SkillsStyled = styled.div`
  background: #373c49;
  
  display: flex;
  flex-direction: column;
`
export const TextAndImage = styled.div`
  display: flex;
  width: 100%;
  & img {
    width: 25%;
    height: 90vh;
    object-fit: cover;
    margin: 35px 0;
    border-radius: 10px;
  }
  @media screen and (max-width: 960px){
    flex-direction: column;
    img {
      display: none;
    }
  }
  @media screen and (max-width: 580px){
    text-align: center;
  }
`

export const TextSection = styled.div`
  width: 70%;
  & span {
    color: #37d6eb;
  }
  h2 {
    color: ${color.tomato};
    font-family: ${fonts.title};
    font-size: 45px;
  }
  h3 {
    margin-top: 15px;
    font-family: ${fonts.text};
    font-size: 17px;
  }
  /* height: 100vh; */
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.836), #00968771), url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover; */
  color: ${color.white};
  padding: 20px 35px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 960px){
    width: 100%;
    padding: 20px 20px;
  }
  @media screen and (max-width: 450px){
    padding: 5px 2px;
    h2 {
      font-size: 25px;
    }
    h3 {
      font-size: 15px;
    }
  }
`
export const Title = styled.div`
  margin: 15px 0;
  width: 100%;  
`
export const WebDevelopment = styled.div`
  width: 100%;
  margin: 15px 0;
`
export const ReactSection = styled.div`
  width: 100%;
  margin: 15px 0;

`

export const OtherSkilsSecition = styled.div`
  width: 100%;
`

export const  ImagesSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  & img {
    width: 150px;
    height: 150px;
    transition: ease-in .1s;
  }
  img:hover {
    transform: scale(1.2);
  }
  @media screen and (max-width: 960px){
    flex-wrap: wrap;
    img {
      width: 90px;
      height: 90px;
    }
  }
`