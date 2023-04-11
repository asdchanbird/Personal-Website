function Tab(props) {
    function change() {
        props.setTitle(props.title)      
        props.setContent(props.content.content)  
    }
    return (
        <div className="shadow bg-white py-6 text-black text-center rounded-lg font-bold flex-1 mx-5 my-2 cursor-pointer" onClick={change}>{props.title}</div>
    )
}

export default Tab;