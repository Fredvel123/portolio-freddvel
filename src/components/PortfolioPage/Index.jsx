import React, {Fragment} from 'react'
// images
import notesApp from '../../images/notes-app.jpg';
import gameApp from '../../images/game-app.jpg';
import photosApp from '../../images/photos-app.jpg';
import dogApp from '../../images/dog-app.jpg'
import movieApp from '../../images/movie-app.jpg'
import eCommApp from '../../images/eCommerce-app.jpg'
// icons
import github from '../../icons/githubSKy.png'
import linkExternal from '../../icons/link-Pink.png'
// styled components
import { Backgroud, Cards, IconsStyled, PortfolioStyled } from '../../styledComponents/PortfolioPage';
import { useSelector } from 'react-redux';

const proyects = [ 
  {
    title: "Notes App ",
    img: notesApp,
    text: "I made this little app to add new tasks and you also can get a Random Quote from Quotes APi ",
    github: "https://github.com/Fredvel123/notes-app",
    url: "https://notes-app-freddvel.netlify.app",
    tech: "React Router, Redux(toolkit), styled components, local storage, hooks, functional components"
  },
  {
    title: "Games App ",
    img: gameApp,
    text: "Games Info App, you can search any game and get the info from the RAWG API",
    github: "https://github.com/Fredvel123/Fredvel123.GameInfo.github.io",
    url: "https://gameinfoapi.netlify.app",
    tech: "UseContext, styled components, hooks, functional components, api Call"
  },
  {
    title: "e Commerce App",
    img: eCommApp,
    text: 'I made a small application that allows you to "buy things". I used an API that provides you with a Fake Online Store.',
    github: "https://github.com/Fredvel123/e-commerce",
    url: "https://e-commerce-fredvel.netlify.app",
    tech: "Redux(toolkit), styled components, hooks, functional components, api Call"

  },
  {
    title: "Unsplusssh ",
    img: photosApp,
    text: "This is an app SPA (Single Page Aplication) to search photograph from the Unsplash API.",
    github: "https://github.com/Fredvel123/unsplush-app",
    url: "https://unsplusssh-app.netlify.app",
    tech: "UseContext, styled components, hooks, functional components, api Call"
  },
  {
    title: "Movie App",
    img: movieApp,
    text: "This Movie App is made to search information about any movie, you can search your favorite movie and get information about: Actors, director, etc",
    github: "https://github.com/Fredvel123/MoviesOMDB-app",
    url: "https://movie-app-freddvel.netlify.app",
    tech: "React Router, useContext, styled components, hooks, functional components"
  },
  {
    title: "Search Dog App",
    img: dogApp,
    text: "This is a very simple app, but this is consuming another Api, and I love to consume APIs",
    github: "https://github.com/Fredvel123/FredVel123.github.io",
    url: "https://dogapi-freddyvelarde.netlify.app/",
    tech: "Hooks, functional components, api Call"

  }
]
const proyectos = [ 
  {
    title: "Notes App ",
    img: notesApp,
    text: 'Hice esta pequeña aplicación para agregar nuevas tareas y también poder obtener una frase aleatoria desde la API "Quotes APi" ',
    github: "https://github.com/Fredvel123/notes-app",
    url: "https://notes-app-freddvel.netlify.app",
    tech: "React Router, Redux(toolkit), styled components, local storage, hooks, functional components"
  },
  {
    title: "Games App ",
    img: gameApp,
    text: "Esta es una aplicación de información de juegos, puedes buscar cualquier tipo de juego y obtener su información ",
    github: "https://github.com/Fredvel123/Fredvel123.GameInfo.github.io",
    url: "https://gameinfoapi.netlify.app",
    tech: "UseContext, styled components, hooks, functional components, api Call"
  },
  {
    title: "e Commerce App",
    img: eCommApp,
    text: 'Hice una pequeña aplicación que te permite "comprar cosas". usé una API que te provee una Tienda online Falsa. ',
    github: "https://github.com/Fredvel123/e-commerce",
    url: "https://e-commerce-fredvel.netlify.app",
    tech: " Redux(toolkit), styled components, hooks, functional components, api Call"

  },
  {
    title: "Unsplusssh ",
    img: photosApp,
    text: "Esta es una Galeria de fotos. Esta pequeña app se conecta con la API de Unsplash. A parte que es una SPA (Single page aplication)) ",
    github: "https://github.com/Fredvel123/unsplush-app",
    url: "https://unsplusssh-app.netlify.app",
    tech: "UseContext, styled components, hooks, functional components, api Call"
  },
  {
    title: "Movie App",
    img: movieApp,
    text: "Esta aplicación de películas está diseñada para buscar información sobre cualquier película, puede buscar su película favorita y obtener información sobre: ​​actores, director, etc.",
    github: "https://github.com/Fredvel123/MoviesOMDB-app",
    url: "https://movie-app-freddvel.netlify.app",
    tech: "React Router, useContext, styled components, hooks, functional components"
  },
  {
    title: "Search Dog App",
    img: dogApp,
    text: "Esta es una aplicación muy simple pero consume una API, donde puedes obtener una fotografía de un perro aleatoriamente",
    github: "https://github.com/Fredvel123/FredVel123.github.io",
    url: "https://dogapi-freddyvelarde.netlify.app/",
    tech: "Hooks, functional components, api Call"

  }
]

function PortfolioPage() {
  const languajes = useSelector(state => state.languajes.value)
  return(
    <Fragment>
      <PortfolioStyled id="portfolio_section" lang={languajes} >
        <h2>{languajes ? "PROJECTS" : "PROYECTOS" }</h2>
          {languajes ? 
          <Backgroud>
            {proyects.map((item, index) => (
            <Cards key={index}>
              <img src={item.img} alt="" width="250px" />
              <h3>{item.title}</h3>
              <p> <span>Short description:</span> {item.text}</p>
              <p> <span>Technogies used:</span> {item.tech}</p>
              <IconsStyled>
                <a href={item.github} target="_blank" rel="noreferrer"  ><img src={github} alt="" /></a>
                <a href={item.url} target="_blank" rel="noreferrer"   ><img src={linkExternal} alt="" /></a>
              </IconsStyled>
            </Cards>
          ))}
          </Backgroud>
            :
            <Backgroud>
            {proyectos.map((item, index) => (
            <Cards key={index}>
              <img src={item.img} alt="" width="250px" />
              <h3>{item.title}</h3>
              <p> <span>Descripción breve:</span> {item.text}</p>
              <p> <span>Tecnologías usadas:</span> {item.tech}</p>
              <IconsStyled>
                <a href={item.github} target="_blank" rel="noreferrer"  ><img src={github} alt="" /></a>
                <a href={item.url} target="_blank" rel="noreferrer"   ><img src={linkExternal} alt="" /></a>
              </IconsStyled>
            </Cards>
          ))}
          </Backgroud>
          }
      </PortfolioStyled>
    </Fragment>
  )
}
export default PortfolioPage;