import React, {Fragment} from 'react'
// images
import notesApp from '../../images/notes-app.jpg';
import gameApp from '../../images/game-app.jpg';
import photosApp from '../../images/photos-app.jpg';
import dogApp from '../../images/dog-app.jpg'
import movieApp from '../../images/movie-app.jpg'
// icons
import github from '../../icons/githubBlack.png'
import linkExternal from '../../icons/link.png'
// styled components
import { Backgroud, Cards, IconsStyled, PortfolioStyled } from '../../styledComponents/PortfolioPage';

const proyects = [ 
  {
    title: "Notes App ",
    img: notesApp,
    text: "I made this little aplication to add new tasks and you also can get a Random Quote from Quotes APi ",
    github: "https://github.com/Fredvel123/notes-app",
    url: "https://notes-app-freddvel.netlify.app"
  },
  {
    title: "Games App ",
    img: gameApp,
    text: "Games Info App, you can search any game and get the info from the RAWG API",
    github: "https://github.com/Fredvel123/Fredvel123.GameInfo.github.io",
    url: "https://gameinfoapi.netlify.app"
  },
  {
    title: "Unsplusssh ",
    img: photosApp,
    text: "This is an aplications SPA (Single Page APlication to search photograph from the Unsplash API.",
    github: "https://github.com/Fredvel123/unsplush-app",
    url: "https://unsplusssh-app.netlify.app"
  },
  {
    title: "Movie App",
    img: movieApp,
    text: "Movie App is made to search information about any movie, you can search your favorite movie and get information about: Actors, director, etc",
    github: "https://github.com/Fredvel123/MoviesOMDB-app",
    url: "https://movie-app-freddvel.netlify.app"
  },
  {
    title: "Search Dog App",
    img: dogApp,
    text: "This is a very simple aplication, but this is consume another Api, and I love to consume APis",
    github: "https://github.com/Fredvel123/FredVel123.github.io",
    url: "https://dogapi-freddyvelarde.netlify.app/"
  }
]

function PortfolioPage() {
  return(
    <Fragment>
      <PortfolioStyled id="portfolio_section">
        <h2>Proyects</h2>
        <Backgroud>
          {proyects.map((item, index) => (
            <Cards key={index}>
              <img src={item.img} alt="" width="250px" />
              <h3>{item.title}</h3>
              <p> <span>Short description:</span> {item.text}</p>
              <IconsStyled>
                <a href={item.github} target="_blank" ><img src={github} alt="" /></a>
                <a href={item.url} target="_blank" ><img src={linkExternal} alt="" /></a>
              </IconsStyled>
            </Cards>
          ))}
        </Backgroud>
      </PortfolioStyled>
    </Fragment>
  )
}
export default PortfolioPage;