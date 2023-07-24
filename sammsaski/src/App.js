// import logo from './logo.svg';
import './App.css';
import { Landing } from './components/body/Landing';
import { Heading } from './components/header/Heading';
import { NavBar } from './components/header/NavBar';
import { ProjectsPage } from './components/body/ProjectsPage';
import { LeftScrollableSubsection } from './components/body/LeftScrollableSubsection';

function App() {
  return (
    <div className="App">
      <Heading/>
      <Landing />
      <LeftScrollableSubsection title='research'/>
      <LeftScrollableSubsection title='publications'/>
      <LeftScrollableSubsection title='teaching + honors + extras'/>
      <LeftScrollableSubsection title='about'/>
    </div>
  );
}

export default App;
