import logo from './logo.svg';
import './App.css';
import Intro from './sections/intro';
import About from './sections/about';
import SkillSection from './sections/skill_section';
import ProjectSection from './sections/project_section';
import Footer from './sections/footer';
import { useRef } from 'react';

function App() {
  const skillRef = useRef();
  const projectRef = useRef();
  return (
    <div className="App">
      <Intro skillRef={skillRef} projectRef={projectRef} />
      <About />
      <SkillSection reference={skillRef} />
      <ProjectSection reference={projectRef} />
      <Footer />
    </div>
  );
}

export default App;
