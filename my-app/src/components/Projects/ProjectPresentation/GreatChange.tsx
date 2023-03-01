import great_change from '../../../images/great_change.png';
import register from '../../../images/register.png';

const GreatChange = () => {
  return (
    <div className="main_project_block">
      <h1 className="main_project-name">„Great Change“</h1>
      <div className="info-block">
        <img
          src={great_change}
          alt="great change project banner"
          className="info-img"
        />
        <p className="info-description">
          This project is actually named after the church in Ukraine “Велика Переміна” which translates as “Great Change”. So, this is a casual one-page web application with registration for the refugees and was made only with one goal. Later our team decided to make a whole website with a bunch of cool stuff. For now, only one page is ready but in near future, it would be much greater!{")"}<br></br><br></br>
          <b><i>P.S. You can scope images by hovering on them.</i></b>
        </p>
      </div>

      <div className="info-block info_block2">
        <p className="info-description">
          Here you can see a screenshot of a registration page. In 2021 I made a similar project but with the difference of connecting it to google sheets. Now I’ve decided to improve my skills and connected the registration section to the MySQL database because we are expecting a big amount of people who will use this site
        </p>
        <img
          src={register}
          alt="great change project registration"
          className="info-img"
        />
      </div>

      <div className="technologies-block">
        <h2>Apllied Technologies:</h2>
        <ul className="technologies-list">
          <li>
            <b>React</b> - well-known front-end JavaScript library which I often use for alike projects;
          </li>
          <li>
            <b>Typescript</b> - also very popular programming language and in this project, as almost in every since I learnt it, was used;
          </li>
          <li>
            <b>Node.js</b> - I have never use this techology until this project where I basically didn't see better choice. I'm not expert in any meaning but really enthusiastic. That's why I wasn't scared to apply it{")"};
          </li>
          <li>
            <b>MySQL</b> - database, which is used to keep data. Also wasn't known to be before but I really liked using it;
          </li>
          <li>
            <b>Git</b> - techology that I'm using in every project to connect my repositories to GitHub. And this case isn't exception. Also I used it to connect project to Heroku;
          </li>
        </ul>
      </div>

      <div className="project-links">
        <div className="project-links_link">
          <a
            href="https://elaborate-queijadas-a26cbb.netlify.app"
            rel="noreferrer"
            target="_blank"
          >
            Watch DEMO
          </a>
        </div>

        <div className="project-links_link">
          <a
            href="https://github.com/ErnestMk1/GreatChange_client"
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

export default GreatChange;
