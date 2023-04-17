import Information from "./information";
const info = [{
    title: "Email",
    content: "asdchanbird@gmail.com",
    img: "images/email.png",
},{
    title: "Phone",
    content: "0928001121",
    img: "images/phone.png",
},{
    title: "Address",
    content: "桃園市龜山區文化二路271號",
    img: "images/user.png",
},]
function Myself() {
    const InfoCard = info.map((item)=> (
        <Information title={item.title} content={item.content} img={item.img} key={item
        .title} /> 
    ))
    return (
        <div className="w-full lg:w-1/2">
            <div className="w-full text-center">
                <h2 className="text-xl mainColor mx-4 my-1 font-bold">聯絡資訊</h2>
            </div>
            <div className="w-full flex flex-col items-center">
                {InfoCard}
            </div>
        </div>

    )
}

export default Myself;



