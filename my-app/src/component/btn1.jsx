import { useEffect } from 'react';
function Button(props) {
    useEffect(() => {
    },[]);
    return(
        <button type="button" className="button btn1 px-5 py-3 m-2 text-lg w-24 rounded-lg font-bold">{props.content}</button>
    )
}

export default Button;