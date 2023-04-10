import person1 from '../img/person1.png'
// import './App.css';
function Home() {
    return(
        <div className="App flex w-screen h-screen overflow-hidden">
            <div className="homeTxt flex-1 flex flex-col items-center justify-center p-32">
                <div className="txtWrapper">
                    <h1 className='text-blue-500 font-bold text-5xl items-center text-left p-4'>Hello! 我是劉丞亞</h1>
                    <h2 className='text-gray-900 font-bold text-4xl p-4 leading-10'>我是一名前端工程師，樂於接受挑戰、學習新事物    </h2>    
                </div>
            </div>
            <div className="homeImg relative flex-1">
                <div className="circle absolute top-8 left-2 inset-x-1/2 rounded-full h-3/5 w-3/5 bg-blue-400 filter"></div>
                <div className="circle absolute top-32 left inset-x-1/2 rounded-full h-3/5 w-3/5 bg-red-300 filter"></div>
                <img src={person1} alt="" className='w-5/6 z-10 relative'/>
            </div>  
        </div>
    )
}

export default Home;