import './ProjectPresentation.css';
import todo_app from '../../../images/todo_app.png';

const TodoApp = () => {
  return (
    <div className="main_project_block todo_main_prj">
      <h1 className="main_project-name">„ToDo“</h1>
      <div className="info-block">
        <img
          src={todo_app}
          alt="great change project banner"
          className="info-img"
        />
        <p className="info-description">
        When you look at this to-do app you’ll notice its primitive design and realization. But actually creating apps like this one is helping a lot to understand deeper concepts of React and React Hooks. It was not that hard to build it but at some point, I was really stuck. If you click the DEMO link and then the “delete” icon you’ll notice an interesting effect. Well, that was really hard to implement for me, but then I figured that out{")"} Feel free to explore!<br></br><br></br>
        <b><i>P.S. You can scope an image by hovering on it.</i></b>
        </p>
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
        </ul>
      </div>

      <div className="project-links">
        <div className="project-links_link">
          <a
            href="https://ernestmk1.github.io/todo_application/"
            rel="noreferrer"
            target="_blank"
          >
            Watch DEMO
          </a>
        </div>

        <div className="project-links_link">
          <a
            href="https://github.com/ErnestMk1/todo_application"
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

export default TodoApp;
