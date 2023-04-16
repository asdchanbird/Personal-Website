import { useEffect } from 'react';
function Button(props) {
    useEffect(() => {
    },[]);
    return(
        <button type="button" className="button btn1 px-4 py-2 m-2 text-md w-22 rounded-lg font-bold">{props.content}</button>
    )
}

export default Button;