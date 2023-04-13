// import Project1 from 'images/porject1.png'
function ProjectCard(props) {
    return (
        <div className="bg-white rounded-lg w-2/6 m-10 p-4">
            <div>
                <img src={props.img} alt="" />
            </div>
            <div>
                <h2 className="text-lg font-bold my-2">{props.title}</h2>
                <p className="">{props.content}</p>
            </div>
        </div>
    )
}


export default ProjectCard;