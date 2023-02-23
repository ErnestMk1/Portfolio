import { useParams } from "react-router-dom";

const ProjectPresentation = () => {
  const { id } = useParams();

  if (Number(id) === 1) {
    return (
      <div>
        <h1>hello, world. My id is {id}</h1>
      </div>
    );
  } else if (Number(id) === 2) {
    return (
      <div>Hi, i'm {id}</div>
    );
  } else if (Number(id) === 3) {
    return (
      <div>and I'm not even done yet wth</div>
    );
  };

  return (
    <div>
      <h1>Incorrect route or something, idk</h1>
    </div>
  );
};

export default ProjectPresentation;
