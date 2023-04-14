import '../App.css';
import ProjectTab from '../component/projectTab';
import ProjectCard from '../component/projectCard';
import { useEffect, useState } from 'react';
// const cache = []
const title = [{
    title: "全部"
},{
    title: "網站"
},{
    title: "小功能"
},{
    title: "個人網站"
},]
const Card = [{
    title: "To-do List1",
    img: "images/porject1.png",
    content: '以 Vue3.js 練習製作請款單記帳列表，練習使用 Firebase。',
    type: "網站",
},{
    title: "To-do List2",
    img: "images/porject1.png",
    content: '以 Vue33.js 練習製作請款單記帳列表，練習使用 Firebase。',
    type: "小功能",
},{
    title: "To-do List3",
    img: "images/porject1.png",
    content: '以 Vue3.js 練習製作請款單記帳列表，練習使用 Firebase。',
    type: "網站",
},{
    title: "To-do List4",
    img: "images/porject1.png",
    content: '以 Vue3.js 練習製作請款單記帳列表，練習使用 Firebase。',
    type: "個人網站",
},{
    title: "To-do List5",
    img: "images/porject1.png",
    content: '以 Vue3.js 練習製作請款單記帳列表，練習使用 Firebase。',
    type: "網站",
},{
    title: "To-do List6",
    img: "images/porject1.png",
    content: '以 Vue34.js 練習製作請款單記帳列表，練習使用 Firebase。',
    type: "小功能",
},]
let test = []
function Project() {
    const [Storage, setStorage] = useState([])
    const [Type, setType] = useState('全部')
    // const testContext = createContext('全部')
    // const CardContainer = test.map((item)=> (
    //     <ProjectCard title={item.title} img={item.img} content={item.content} key={item.title}/>
    // ))
    const List = title.map((list)=> (
       <ProjectTab title={list.title} setType={setType} key={list.title} />
    )) 
    useEffect(()=> {
        test = []
        const arr = Card.filter(function(value, index){
            if(Type === value.type) {
                test.push(value)
                return value
            }
            // console.log(value)
        })
        // console.log(arr)
        // // test.push(arr)
        
        // console.log(test)
    },[Type])
    useEffect(()=> {
        // function ddf() {
        //     const CardContainers = test.map((item)=> (
        //         <ProjectCard title={item.title} img={item.img} content={item.content} key={item.title}/>
        //     ))
        // }
        
    },[test])
    return (
        <div className="App w-full h-screen">
            <div className="pt-4">
                <h1 className='text-blue-500 text-center font-bold text-2xl items-center'>專案作品</h1>
                <div className="flex justify-center">
                    {List}
                </div>
            </div>
            <div className='flex px-10 justify-start flex-wrap absolute'>
                {/* {CardContainer} */}
                {
                    test.map((item)=> (
                        <ProjectCard title={item.title} img={item.img} content={item.content} key={item.title}/>
                    ))
                }
            </div>
            
        </div>
    )
}



export default Project;