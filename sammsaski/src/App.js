// import logo from './logo.svg';
import './App.css';
import { Landing } from './components/body/Landing';
import { Heading } from './components/header/Heading';
import { NavBar } from './components/header/NavBar';
import { ProjectsPage } from './components/body/ProjectsPage';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className='d-flex align-items-center vh-100'>
        <Landing></Landing>
      </div>
      
      <div>
        <ProjectsPage></ProjectsPage>
      </div>
    </div>
  );
}

export default App;
