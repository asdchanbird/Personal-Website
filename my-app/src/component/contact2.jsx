import Button from "./btn1";
import emailjs from '@emailjs/browser';
import $ from 'jquery'
import { useState } from "react";
function Form() {
    const [state , setState] = useState(true)
    const sendEmail = () => {
        if (state === true) {
            setState(false)
            const name = document.getElementById('Name')
            const email = document.getElementById('Email')
            const message = document.getElementById('Message')
            if (name.value !== '' && email.value !== '') {
                const paramsEmail = {
                    From_Name: name.value,
                    Email: email.value,
                    Message: message.value,
                }
                emailjs.send('personal','template_yx1qi6z', paramsEmail, 'jDvCM8-y6OEauoG4F')
                .then((res)=> {
                    console.log(res.text)
                    $(name).val('')
                    $(email).val('')
                    $(message).val('')
                    const alert = document.getElementsByClassName('alert')
                    $(alert).addClass("opacity-100")
                    setTimeout(() => {
                        $(alert).removeClass("opacity-100")
                        setState(true)            
                    },"4000")   
                })
                .catch((error)=> {
                    console.log(error.text)
                })
            }else {
                const alert = document.getElementsByClassName('errorAlert')
                const errorContent = document.getElementsByClassName('errorContent')
                $(alert).addClass("opacity-100")
                $(errorContent).append('請輸入姓名或電子信箱')
                setTimeout(() => {
                    $(alert).removeClass("opacity-100")      
                    $(errorContent).empty()
                    setState(true)     
                },"4000")   
            }
        }
    }
    return (
        <div className="w-full md:w-2/3 lg:w-1/2">
            <div className="">    
                <h2 className="text-center text-xl mainColor mx-4 my-1 font-bold">留下您的想法</h2>
            </div> 
            <div className="">
                <div className="px-6 py-2">
                    <label htmlFor="姓名" className="block font-bold text-lg">姓名</label>
                    <input type="text" name="姓名" placeholder="請輸入姓名"  id="Name" className="w-full p-2 my-2 rounded-lg shadow" />
                </div>    
                <div className="px-6 py-2">
                    <label htmlFor="電子信箱" className="block font-bold text-lg">電子信箱</label>
                    <input type="text" name="電子信箱" placeholder="請輸入電子信箱" id="Email" className="w-full p-2 my-2 rounded-lg shadow" />
                </div>
                <div className="px-6 py-2">
                    <label htmlFor="電子信箱" className="block font-bold text-lg">內容</label>
                    <textarea type="text" name="電子信箱" placeholder="請輸入內容" id="Message" className="w-full p-2 my-2 rounded-lg shadow" rows="7" cols="40" /> 
                    <button type="button" className="button btn1 px-4 py-2 m-2 text-md w-22 rounded-lg font-bold" onClick={sendEmail}>傳送</button>
                </div>
            </div> 
           <div class="alert opacity-0 bg-teal-100 border-t-4 border-teal-500 rounded-lg text-teal-900 px-4 py-3 shadow-md fixed top-10 left-10 transition duration-400" role="alert">
                <div class="flex">
                    <div class="py-1 flex items-center"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                    <div>
                        <p class="font-bold">傳送成功!</p>
                        <p class="text-sm font-bold">請靜待我的回覆 謝謝您~</p>
                    </div>
                </div>
            </div>
            <div role="alert" className="errorAlert opacity-0 fixed top-10 left-10 transition duration-400">
                <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                    錯誤
                </div>
                <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                    <p className="errorContent font-bold"></p>
                </div>
            </div>
        </div>
    )
}

export default Form;



