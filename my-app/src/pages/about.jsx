import '../App.css';
import person2 from '../img/person2.png';
import Tab from '../component/aboutTab';
import { useState } from 'react';
const about1 = {"content": "您好!我是劉丞亞，喜歡新奇的事物，善於獨立思考、分析問題，樂於分享想法與架構概念作團隊參考，吸收融合彼此間的想法推斷我不斷成長,全力以赴，持續學習，是我在前往前端路上的座右銘。"}
const about2 = {"content": "履歷【工作經歷】欄位就傻傻空白，讓你和好工作機會擦身而過？！社會新鮮人履歷的工作經歷到底該怎麼寫呢？很多剛出社會的畢業新鮮人，在求職處處碰壁一陣子之後，總是不禁開始懷疑自己。"}
const about3 = {"content": "107年5月24日行政院第3601次院會責成本會成立「個人資料保護專案辦公室」，專案辦公室業於107年7月4日正式成立，工作重點包括統籌因應GDPR相關事宜與協調整合我國個人資料保護法落實之一致性，其後行政院於7月25日正式將個人資料保護法之法律主政機關移交本會。"}


function About() {
    const [title, setTitle] = useState('介紹')
    const [content, setContent] = useState(about1.content)
    return (
        <div className="App w-screen h-screen">
            <div className='w-full'>
                <h1 className='text-blue-500 text-center font-bold text-2xl items-center p-4'>關於我 About us</h1>
            </div>
            <div className='flex flex-col lg:flex-row flex-wrap'>
                <div className="homeImg relative flex-1 flex justify-center">
                    <div className="circle absolute top-8 left-36 inset-x-1/2 rounded-full h-3/5 w-3/5 bg-blue-400 filter"></div>
                    <div className="circle absolute top-48 left-0 inset-x-1/2 rounded-full h-3/5 w-3/5 bg-yellow-500 filter"></div>
                    <div className="circle absolute top-32 left inset-x-1/2 rounded-full h-3/5 w-3/5 bg-red-300 filter"></div>
                    <div className='flex justify-center'>
                        <img src={person2} alt="" className='w-3/6 z-10 relative object-contain lg:w-full'/>
                    </div>
                </div>  
                <div className="homeTxt flex-1 flex flex-col items-center p-3 lg:p-24">
                    <div className="txtWrapper">
                        <div className='flex'>
                            <Tab title={'介紹'} setTitle={setTitle} content={about1} setContent={setContent}/>
                            <Tab title={'經歷'} setTitle={setTitle} content={about2} setContent={setContent}/>
                            <Tab title={'個人資訊'} setTitle={setTitle} content={about3} setContent={setContent}/>
                        </div>
                        <div>
                            <h2 className='text-blue-500 font-bold text-lg px-4 pt-4 leading-8'>&rArr; {title}</h2>
                            <h3 className='text-gray-900 font-semibold text-md pt-2 pb-4 px-4 leading-8'>{content}</h3>    
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}


export default About;