import { useEffect } from 'react';
function Button(props) {
    useEffect(() => {
    },[]);
    function smooth() {
        window.scrollTo({
        top: '-1200px',
        behavior: 'smooth'
    })
    }
    return(
        <a href="#About">
            <button type="button" className="button btn1 px-4 py-2 m-2 text-md w-22 rounded-lg font-bold" onClick={smooth}>{props.content}</button>
        </a>
    )
}

export default Button;