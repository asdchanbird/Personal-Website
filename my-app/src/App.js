// import person1 from './img/person1.png';
import Home from './pages/home';
import About from './pages/about';
import Skill from './pages/Skill';
import Project from './pages/project';
import Contact from './pages/contact';
import Menu from './component/menu';
import Footer from './pages/footer';
import './App.css';

function App() {
    return (
        <div className='overflow-hidden relative App'>
            <Home />
            <About />
            <Skill />
            <Project />
            <Contact />
            <Footer />
            <Menu /> 
        </div>
    );
}

export default App;
