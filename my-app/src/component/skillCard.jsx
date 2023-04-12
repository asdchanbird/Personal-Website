
function App(props) {
    const object = props.List
    const FrontList = object.map((list)=> (
        <li className="leading-8" key={list.id}>{list.list}</li>
    )) 
    return (
        <>
        <div className="cardShawdow bg-white rounded-xl flex-1 w-2/8 h-4/6 m-10 p-6 mx-16">
            <h1 className="font-bold text-xl">{props.title}</h1>
            <ul className="mt-6">
                {FrontList}
            </ul>
        </div>
        </>
    )
}


export default App;