import Button from "./btn1";
function Form() {
    return (
        <div className="w-full md:w-2/3 lg:w-1/2">
            <div className="">    
                <h2 className="text-center text-xl mainColor mx-4 my-1 font-bold">留下您的想法</h2>
            </div> 
            <div className="">
                <div className="px-6 py-2">
                    <label htmlFor="姓名" className="block font-bold text-lg">姓名</label>
                    <input type="text" name="姓名" placeholder="請輸入姓名" className="w-full p-2 my-2 rounded-lg shadow" />
                </div>
                <div className="px-6 py-2">
                    <label htmlFor="電子信箱" className="block font-bold text-lg">電子信箱</label>
                    <input type="text" name="電子信箱" placeholder="請輸入電子信箱" className="w-full p-2 my-2 rounded-lg shadow" />
                </div>
                <div className="px-6 py-2">
                    <label htmlFor="電子信箱" className="block font-bold text-lg">內容</label>
                    <textarea type="text" name="電子信箱" placeholder="請輸入內容   " className="w-full p-2 my-2 rounded-lg shadow" rows="7" cols="40" />
                    <Button content='傳送'/>
                </div>
            </div> 
        </div>
    )
}

export default Form;



