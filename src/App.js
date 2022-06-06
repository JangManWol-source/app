
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Award from './components/Awards/Award';
import Contact from './components/Contacts/Contact';
import PopClick from './components/PopClick/PopClick';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <PopClick />
      <AboutMe/>
      <Skills />
      <Award />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
