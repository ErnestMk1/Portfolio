import './ProjectPresentation.css';

const ComingSoon = () => {
  return (
    <div className="main_project_block coming_soom_prj">
      <h1 className="main_project-name">„Coming Soon...“</h1>
      <div className="technologies-block">
        <h2>Technologies that are planning to be used:</h2>
        <ul className="technologies-list">
          <li>
            <b>React</b> - well-known front-end JavaScript library which I often use for alike projects;
          </li>
          <li>
            <b>Typescript</b> - also very popular programming language and in this project, as almost in every since I learnt it, was used;
          </li>
          <li>
            <b>RESTful API</b> - I've used this technology several times, but here I'm planning to make something really cool. It'll be my own social-media application with a bunch of posts and cool features;
          </li>
          <li>
            <b>Node.js</b> - Here I plan to use it for a second time in my life{")"} I'm also really excited to explore something new;
          </li>
          <li>
            <b>MySQL</b> - database, which is used to keep data. Planning to use for keeping some posts information;
          </li>
          <li>
            <b>Git</b> - techology that I'm using in every project to connect my repositories to GitHub;
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ComingSoon;
