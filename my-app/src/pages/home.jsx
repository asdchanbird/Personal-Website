import { useState, useEffect } from 'react';
import person1 from '../img/person1.png';
import Button from '../component/btn1';
import Button2 from '../component/btn2';
// import $ from 'jquery';
// import './App.css';

function Home() {
    // Get()
    const [Data, setData] = useState([])
    function Get(username) {
    // var params4 = new URLSearchParams({username: "Felix"});
         fetch(`http://127.0.0.1:5000/user?username=${username}`,{
            method: 'GET',
        }).then(res=>{
            return res.json()
        }).then(json => {
            setData(json)
        }) 
    }
    function GetAll() {
        fetch('http://127.0.0.1:5000/users',{
            method: 'GET',
        }).then(res=>{
            return res.json()
        }).then(json => {
            // setData(json)
            console.log(json.user_list[0])
        }) 
    }
    useEffect(()=> {
        //呼叫api使用
        // Get('Felix')
        // GetAll()
    },[])

    return(
        <div className="App w-screen h-screen sm:h-screen xl:h-screen flex flex-col">
            <div className='container flex flex-col items-center mx-auto'>
                <div className="homeTxt flex flex-col items-center justify-center pt-3 mt-4">
                    <div className="txtWrapper p-1">
                        <h1 className='text-center text-blue-500 items-center p-1 sm:text-lg font-bold lg:text-2xl'>你好! 我是Felix Liu </h1>
                        <h2 className='text-gray-800 text-center text-md leading-10 text-sm sm:text-sm font-bold lg:text-md my-1 '>是一名前端工程師，樂於接受挑戰、學習新事物</h2>    
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <Button2 content={'履歷CV'}/>
                    <Button content={'關於我'}/>  
                </div>
                <div className="homeImg relative flex justify-center h-72">
                    <div className="circle absolute top-8 left-1/3 inset-x-1/2 rounded-full bg-blue-400 filter"></div>
                    <div className="circle absolute top-28 left inset-x-1/2 rounded-full bg-red-300 filter"></div>
                    <div className='flex justify-center h-full'>
                        <img src={person1} alt="" className='w-full z-10 relative object-contain'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;