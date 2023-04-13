import '../App.css';
import ProjectTab from '../component/projectTab';
import ProjectCard from '../component/projectCard';
const Card = [{
    title: "To-do List",
    img: "images/porject1.png",
    content: 'fqkflqjfq;fqwfqfmqwm;f'
},{
    title: "To-do List",
    img: "images/porject1.png",
    content: 'fqkflqjfq;fqwfqfmqwm;f'
},{
    title: "To-do List",
    img: "images/porject1.png",
    content: 'fqkflqjfq;fqwfqfmqwm;f'
},]
function Project() {
    return (
        <div className="App w-full h-screen">
            <div>
                <h1 className='text-blue-500 text-center font-bold text-2xl items-center p-4'>專案作品</h1>
                <ProjectTab />
            </div>
            <div className='flex p-10 justify-center'>
                <ProjectCard title={Card[0].title} img={Card[0].img} content={Card[0].content}/>
                <ProjectCard title={Card[0].title} img={Card[0].img} content={Card[0].content}/>
            </div>
        </div>
    )
}



export default Project;