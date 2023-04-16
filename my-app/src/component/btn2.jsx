import $ from 'jquery';
import { useEffect } from 'react';
function Button2(props) {
    useEffect(() => {
    },[]);
    return(
        <button type="button" className="button btn2 px-4 py-2 m-2 text-md w-22 rounded-lg font-bold">{props.content}</button>
    )
}

export default Button2;