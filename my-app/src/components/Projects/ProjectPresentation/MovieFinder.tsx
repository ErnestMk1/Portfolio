import year_specification from "../../../images/movie_finder_year.jpg"
import favorites from "../../../images/movie_finder_favorites.jpg";
import movie_card from "../../../images/movie_finder_card.jpg"
import recomendations from "../../../images/movie_finder_recomendations.jpg";

const MovieFinder = () => {
  return (
    <div className="main_project_block">
      <h1 className="main_project-name">„Movie Finder“</h1>
      <div className="info-block">
        <img
          src={year_specification}
          alt="movie finder year specification option"
          className="info-img"
        />
        <p className="info-description">
          Here’s not my first but definitely the most interesting API project called „Movie Finder“. This particular image shows the ability to search movies and even specify them by year. In this web application, I used OMDB API. You can also open the link with the demo version and take a look yourself!{")"}<br></br><br></br>
          <b><i>P.S. You can scope images by hovering on them.</i></b>
        </p>
      </div>

      <div className="info-block info_block2">
        <p className="info-description">
          You can save a specific movie to your favorites by hovering over the movie card. There also be pop-up messages when you’ve added or already have one in your favorites. I kept the Favorites section in the local storage so that you can observe them even after refreshing your browser.
        </p>
        <img
          src={favorites}
          alt="movie finder favorites section"
          className="info-img"
        />
      </div>

      <div className="info-block info_block3">
        <img
          src={movie_card}
          alt="movie finder card"
          className="info-img"
        />
        <p className="info-description">
          Also when you hover over a movie card there will be appeared button „Show More“. After clicking on it you’ll be teleported to a separate page with more information about the movie. Also, there will be recommendations based on the genre of the current movie displayed.
        </p>
      </div>

      <div className="info-block info_block4">
        <img
          src={recomendations}
          alt="movie recomendations"
          className="info-img"
        />
      </div>

      <div className="technologies-block techno_block_MF">
        <h2>Apllied Technologies:</h2>
        <ul className="technologies-list">
          <li><b>React</b></li>
          <li><b>Typescript</b></li>
          <li><b>RESTful API</b> - In this project I used axios to make a request</li>
          <li><b>Git</b></li>
        </ul>
      </div>

      <div className="project-links">
        <div className="project-links_link">
          <a
            href="https://ernestmk1.github.io/Movie-finder/"
            rel="noreferrer"
            target="_blank"
          >
            Watch DEMO
          </a>
        </div>

        <div className="project-links_link">
          <a
            href="https://github.com/ErnestMk1/Movie-finder"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieFinder;
