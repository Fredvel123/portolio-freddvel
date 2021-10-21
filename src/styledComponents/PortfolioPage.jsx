import styled from 'styled-components';

const color = {
    darkBlue: "#000C24",
    sky: "#1a7e74",
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

export const PortfolioStyled = styled.div`
  background: ${color.grayLight};
  padding: 10vh 5%;
  span {
    color: ${color.tomato};
  }
  h2 {
    color: ${color.tomato};
    font-size: 45px;
    font-family: ${fonts.title};
  }
  h3 {
    color: ${color.sky};
    font-size: 30px;
  }
  h4 {
    font-size: 25px;
  }
  @media screen and (max-width: 425px){
    h2 {
      font-size: 30px;
    }
  }
`
export const Backgroud = styled.div`
  columns: 5 320px ;
`
export const Cards = styled.div`
  border-radius: 15px;
  width: auto;
  break-inside: avoid;
  margin: 0 15px;
  margin-bottom: 15px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
  h3 {
    margin: 5px 7px;
  }
  p {
    margin: 5px 7px;
  }
  transition: ease-in .2s;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 4px 23px -1px rgba(0,0,0,0.75);
    -webkit-box-shadow: 2px 4px 23px -1px rgba(0,0,0,0.75); 
    -moz-box-shadow: 2px 4px 23px -1px rgba(0,0,0,0.75);
  }
`
export const IconsStyled  = styled.div`
  padding: 15px 0;
  a img {
    width: 50px;
    transition: ease-in .1s;
  } 
  a img:hover {
    transform: scale(1.2);
  }  
`