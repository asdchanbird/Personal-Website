const MenuImg = [{
    img: "images/home.png",
},{
    img: "images/menu-user.png",
},{
    img: "images/skill.png",
},{
    img: "images/project.png",
},{
    img: "images/contact.png",
},]
function Menu() {
    const List = MenuImg.map((item) => (
        <div className="w-full mx-3 p-2 flex justify-center cursor-pointer round hover:bg-blue-200 duration-500 flex-col">
            <img src={item.img} alt={item.img} className=""/>
        </div>
    ))
    return (
        <div className="w-full fixed bottom-10 flex justify-center z-10">
            <div className="px-7 py-3 rounded-3xl menu">
                <div className="w-72 flex justify-center">
                    {List}
                </div>
            </div>
        </div>
    )
}


export default Menu;