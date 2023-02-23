import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import ProjectPresentation from './components/Projects/ProjectPresentation';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/projects/:id" element={ <ProjectPresentation /> } />
          <Route path="/" element={ <MainComponent /> } />
        </Routes>
      </Router>
    </>
  );
};

export default App;
