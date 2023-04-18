import $ from 'jquery';
import { useEffect } from 'react';
function Button2(props) {
    useEffect(() => {
    },[]);
    return(
        <a href="images/劉丞亞_CV.pdf" download="劉丞亞_CV">
            <button type="button" className="button btn2 px-4 py-2 m-2 text-md w-22 rounded-lg font-bold">{props.content}</button>
        </a>
    )
}

export default Button2;