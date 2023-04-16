function ProjectTab(props) {
    function Change() {
        props.setType(props.title)
    }
    return (
        <span className="text-red-400 m-4 mx-4   font-bold cursor-pointer hover:bg-blue-200 p-4 rounded-xl" onClick={Change}>{props.title}</span>
    )
}


export default ProjectTab;