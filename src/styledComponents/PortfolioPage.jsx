import styled from 'styled-components';
// tools
import color from './tools/color.json'
import fonts from './tools/fonts.json'

export const PortfolioStyled = styled.div`
  background: ${color.dark2};
  padding: 10vh 5%;
  padding-bottom: 0px;
  span {
    color: ${color.sky};
    font-family: ${fonts.title};
  }
  h2 {
    color: ${color.pink} ;
    font-size: 45px;
    font-family: ${fonts.title};
    margin-bottom: 15px;
  }
  h3 {
    color: ${color.pink};
    font-size: 30px;
    font-family: ${fonts.title};
  }
  h4 {
    font-size: 25px;
    color: ${color.white};
  }
  @media screen and (max-width: 425px){
    h2 {
      font-size: 30px;
    }
  }
`
export const Backgroud = styled.div`
  columns: 5 250px ;
@media screen and (min-width: 850px){
  columns: 3 320px;
}
`
export const Cards = styled.div`
  border-radius: 15px;
  overflow: hidden;
  width: auto;
  break-inside: avoid;
  /* margin: 0 15px; */
  margin-bottom: 15px;
  background: ${color.dark};
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
    color: #fff;
    font-family: ${fonts.text};
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