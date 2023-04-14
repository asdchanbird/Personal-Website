import $ from 'jquery';
function LinkComponent(props) {
    return (
        <div className="my-3 cursor-pointer flex group">
            <h2 className="font-bold mainColor">{props.item}</h2>
            <div className='link font-bold mainColor group-hover:transform group-hover:translate-x-2 duration-500 ml-1'> &rarr;</div>
        </div>
    )
}


export default LinkComponent;