import styled from "styled-components";
import imgBackground from '../images/background.png'

const color = {
      background: "#000C24",
      sky: "#009688",
      letter: "#fbfbfb",
      titles: "#F44336",
      subtitles: "#928A97"
    }
const fonts = {
    title: "'Source Sans Pro', sans-serif",
    text: "'Barlow', sans-serif",
    text2: " 'Karma', serif",
    subtitle: "'Source Sans Pro', sans-serif",
    informal: " 'Patrick Hand', cursive"
}

const image = "https://images.unsplash.com/photo-1620570623737-efc0ec4ab486?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80";

export const Banner = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.836), #00968771), url(${image});
  /* background-image: url(${imgBackground}); */
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; 
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
// header menu
export const HeaderStyled = styled.header`
  display: flex;
  position: ${({scrolled}) => scrolled ? "fixed" : ""};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: .3s;
  background: ${({scrolled})=> scrolled ? "#000000e1": "" };
  height: ${({scrolled}) => scrolled ? "10vh": "20vh"};
  & a {
    color:${color.titles} ;
    font-size: 25px;
    font-family: ${fonts.title};
    text-transform: uppercase;
    margin-left: 5%;
  }
  & ul{
    margin-right: 5%;
  }
  & ul a {
    color: ${ color.letter };
    font-size: 18px;
    margin: 0 15px;
    font-family: ${fonts.subtitle};
    transition: ease-in-out .3s;
    
  }
  ul a:hover{
    color: ${color.subtitles};
  }
  & img{
    display: none;
  }
  @media screen and (max-width: 675px){
    img{
      display: block;
      margin-right: 5%;
      width: 50px;
    }
    ul {

      transition: ease-in-out .5s;
      transform: ${({menu}) => menu ? "translateX(0)" : "translateX(-100%)" };
      background: #009687dc;
      display: ${({menu})=> menu? "flex" : "flex"};
      flex-direction: ${({menu}) =>menu ? "column": "column" };
      position: ${({menu}) => menu ? "absolute": "absolute"};
      top: 0;
      
      width: ${({menu}) => menu ? "60%" : "60%"};
      height: ${({menu}) => menu ? "100vh" : "100vh"};
      justify-content: center;
      align-items: center;
    }
    ul a {
      font-size: ${({menu}) => menu ? "27px" : "18px"} ;
      margin: ${({menu}) => menu ? "25px 0" : "0 15px"};
      color: ${color.letter};
    }
    @media screen and (max-width: 425px ){
      img {
        width: 40px;
      }
    }
  }
`
// text home.
export const TextHome = styled.div`
  padding-top: ${({scrolled}) => scrolled ? "20vh" : "" };
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const Text = styled.div`
  width: 70% ;
  & h3{
    text-align: center;
    color: ${color.letter} ;
    font-family: ${fonts.text};
    font-size: 30px;
  }
  @media screen and (max-width: 675px){
    width: 80%;
    & h3 {
      font-size: 25px;
    }
  }
  @media screen and (max-width: 425px){
    width: 90%;
    & h3{
      font-size: 20px;
    }
  }
`
// Butons 
export const Buttons = styled.div`
  margin-top: 20px;
  display: flex;
  & a {
    background: ${color.titles};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-right: 25px;
    width: 110px;
    font-size: 15px;
    height: 50px;
    cursor: pointer;
    border-radius: 5px;
    transition: ease-in .2s;
  }
  a:hover{
    background: ${color.sky};
  }
  @media screen and (max-width: 425px){
    flex-direction: column;
    a {
      margin-bottom: 20px;
      margin-right: 0;
    }
  }
` 