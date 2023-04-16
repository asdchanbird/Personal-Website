function Information(props) {
    return (
        <div className="rounded-lg bg-white shadow p-5 w-72 mx-8 my-4">
            <div className="flex justify-center py-2">
                <img src={props.img} alt={props.title} />
            </div>
            <div className="text-center">
                <h2 className="font-bold text-md">{props.title}</h2>
                <h3 className="text-sm font-bold text-gray-600">{props.content}</h3>
            </div>
        </div>
    )
}


export default Information;