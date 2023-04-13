function ProjectTab(props) {
    const title = [{
        title: "全部"
    },{
        title: "網站"
    },{
        title: "小功能"
    },{
        title: "個人網站"
    },]

    const List = title.map((list)=> (
        <span className="text-red-400 m-4 mx-8 font-bold cursor-pointer hover:bg-blue-200 p-4 rounded-xl">{list.title}</span>
    ))
    return (
        <div className="w-full flex justify-center">
            {List}
        </div>
    )
}


export default ProjectTab;