import { useParams } from "react-router-dom";
import GreatChange from "./ProjectPresentation/GreatChange";
import Navigation from "./ProjectPresentation/Navigation";
import MovieFinder from "./ProjectPresentation/MovieFinder";
import TodoApp from "./ProjectPresentation/TodoApp";
import { useLayoutEffect } from "react";

const ProjectPresentation = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
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
        <MovieFinder />
      </>
    );
  } else if (Number(id) === 3) {
    return (
      <>
        <Navigation />
        <TodoApp />
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
