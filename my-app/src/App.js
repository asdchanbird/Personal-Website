// import person1 from './img/person1.png';
import Home from './pages/home';
import About from './pages/about';
import Skill from './pages/Skill';
import Project from './pages/project';
import './App.css';

function App() {
    return (
        <div className='overflow-hidden'>
            <Home />
            <About />
            <Skill />
            <Project />
        </div>
    );
}

export default App;
