import '../App.css';
import ProjectTab from '../component/projectTab';
import ProjectCard from '../component/projectCard';
function Project() {
    return (
        <div className="App w-full h-screen">
            <div>
                <h1 className='text-blue-500 text-center font-bold text-2xl items-center text-left p-4'>專案作品</h1>
                <ProjectTab />
            </div>
            <div className='flex p-10 justify-center'>
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}



export default Project;