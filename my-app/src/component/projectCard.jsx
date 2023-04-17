import LinkComponent from "../component/linkComponent";
function ProjectCard(props) {
        return (
        <div className="bg-white rounded-lg mx-6 my-3 p-4 w-2/3 md:w-4/12 lg:w-3/12">
            <div>
                <img className="rounded-lg" src={props.img} alt={props.title} />
            </div>
            <div className="mt-4">
                <h2 className="text-lg font-bold my-2">{props.title}</h2>
                <p className="font-bold text-gray-600 text-sm leading-7">{props.content}</p>
            </div>
            <LinkComponent item="Project"/>
        </div>
    )
}
    

export default ProjectCard;