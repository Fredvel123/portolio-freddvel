import styled from "styled-components";

const color = {
      background: "#000C24",
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
  /* background-image: linear-gradient(), url(); */
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20vh;
  & h3 {
    letter-spacing: 2px;
    color:${color.titles} ;
    font-size: 23px;
    font-family: ${fonts.title};
    text-transform: uppercase;
    margin-left: 5%;
  }
  & ul{
    margin-right: 5%;
  }
  & ul a {
    color: ${ color.subtitles };
    font-size: 18px;
    margin: 0 15px;
    font-family: ${fonts.subtitle};
    transition: ease-in-out .3s;
  }
  ul a:hover{
    color: #fff;
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
        display: none;
    }
  }
`
// text home.
export const TextHome = styled.div`
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
    font-family: ${fonts.text2};
    font-size: 30px;
  }
`
// Butons 
export const Buttons = styled.div`
  margin-top: 20px;
  & button {
    background: ${color.titles};
    border: none;
    color: #fff;
    margin-right: 25px;
    width: 110px;
    font-size: 15px;
    height: 50px;
    cursor: pointer;
    border-radius: 5px;
    transition: ease-in .2s;
  }
  button:hover{
    background:  #009688;
  }
` 