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


export const SkillsStyled = styled.div`
  background: ${color.white};
  color: ${color.gray};
  display: flex;
  padding-top: 4vh;
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
      width: 90%;
      height: 15vh;
      margin: 20px 5%;
    }
  }
  @media screen and (max-width: 580px){
    text-align: center;
  }
`

export const TextSection = styled.div`
  width: 70%;
  & span {
    color: ${color.tomato};
  }
  h2 {
    color: ${color.tomato};
    font-family: ${fonts.title};
    font-size: 45px;
  }
  h3 {
    margin-top: 15px;
    font-family: ${fonts.text};
    color: #000;
    font-size: 17px;
  }
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
    width: 125px;
    height: 125px;
    transition: ease-in .1s;
  }
  img:hover {
    transform: translateY(-15px);
  }
  @media screen and (max-width: 960px){
    flex-wrap: wrap;
    img {
      width: 70px;
      height: 70px;
    }
  }
`