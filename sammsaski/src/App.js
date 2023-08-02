// import logo from './logo.svg';
import './App.css';
import { Landing } from './components/body/Landing/Landing';
import { Heading } from './components/header/Heading';
import { NavBar } from './components/header/NavBar';
import { ProjectsPage } from './components/body/ProjectsPage';
import { Research } from './components/body/Research/Research';
import { Publications } from './components/body/Publications/Publications';
import { TeachingAwardsHonors } from './components/body/Teaching+Awards+Honors/TeachingAwardsHonors';
import { AboutMe } from './components/body/AboutMe/AboutMe';
import { Footer } from './components/footer/Footer';
import { CustomCursor } from './components/custom_cursor/CustomCursor';
import { CVContact } from './components/body/CV+Contact/CVContact';

function App() {
  return (
    <div className="App">
      <CustomCursor/>
      <Landing />
      <Research />
      <Publications />
      <TeachingAwardsHonors />
      <AboutMe />
      <CVContact />
    </div>
  );
}

export default App;
