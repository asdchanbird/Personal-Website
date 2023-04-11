import $ from 'jquery';
import { useEffect } from 'react';
function Button2(props) {
    useEffect(() => {
    },[]);
    return(
        <button type="button" className="button btn2 px-5 py-3 m-2 text-lg w-28 rounded-lg font-bold">{props.content}</button>
    )
}

export default Button2;