import LinkComponent from "../component/linkComponent";

function ProjectCard(props) {
    return (
        <div className="bg-white rounded-lg w-3/12 mx-6 my-3 p-4">
            <div>
                <img className="rounded-lg" src={props.img} alt={props.title} />
            </div>
            <div className="mt-4">
                <h2 className="text-lg font-bold my-2">{props.title}</h2>
                <p className="font-medium leading-7">{props.content}</p>
            </div>
            <LinkComponent item="Project"/>
        </div>
    )
}


export default ProjectCard;