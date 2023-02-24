import { useParams } from "react-router-dom";
import ComingSoon from "./ProjectPresentation/ComingSoon";
import GreatChange from "./ProjectPresentation/GreatChange";
import Navigation from "./ProjectPresentation/Navigation";
import TodoApp from "./ProjectPresentation/TodoApp";

const ProjectPresentation = () => {
  const { id } = useParams();

  if (Number(id) === 1) {
    return (
      <>
        <Navigation />
        <GreatChange />
      </>
    );
  } else if (Number(id) === 2) {
    return (
      <>
        <Navigation />
        <TodoApp />
      </>
    );
  } else if (Number(id) === 3) {
    return (
      <>
        <Navigation />
        <ComingSoon />
      </>
    );
  };

  return (
    <div style={{textAlign: "center"}}>
      <h1>Incorrect web route! Try something else</h1>
    </div>
  );
};

export default ProjectPresentation;
