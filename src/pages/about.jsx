import '../App.css';
import person2 from '../img/person2.png'

function About() {
    return (
        <div className="App flex w-screen h-screen">
            <div className="homeImg relative flex-1">
                <div className="circle absolute top-8 left-36 inset-x-1/2 rounded-full h-3/5 w-3/5 bg-blue-400 filter"></div>
                <div className="circle absolute top-48 left-0 inset-x-1/2 rounded-full h-3/5 w-3/5 bg-yellow-500 filter"></div>
                <div className="circle absolute top-32 left inset-x-1/2 rounded-full h-3/5 w-3/5 bg-red-300 filter"></div>
                <img src={person2} alt="" className='w-5/6 z-10 relative'/>
            </div>  
            <div className="homeTxt flex-1 flex flex-col items-center justify-center p-32">
                <div className="txtWrapper">
                    <h1 className='text-blue-500 font-bold text-5xl items-center text-left p-4'>關於我 About us</h1>
                    <h2 className='text-gray-900 font-bold text-xl p-4 leading-8'>您好!我是劉丞亞，喜歡新奇的事物，善於獨立思考、分析問題，樂於分享想法與架構概念作團隊參考，吸收融合彼此間的想法推斷我不斷成長,全力以赴，持續學習，是我在前往前端路上的座右銘。  </h2>    
                    <h3 className='text-blue-500 font-bolder'>//實務經驗</h3>
                </div>
            </div>
           
        </div>
    )
}


export default About;