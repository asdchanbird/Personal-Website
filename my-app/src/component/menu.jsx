import $ from 'jquery'
const MenuImg = [{
    id: 1,
    name: 'home',
    img: "images/home.png",
},{
    id: 2,
    name: 'About',
    img: "images/menu-user.png",
},{
    id: 3,
    name: 'skill',
    img: "images/skill.png",
},{
    id: 4,
    name: 'project',
    img: "images/project.png",
},{
    id: 5,
    name: 'contact',
    img: "images/contact.png",
},]
function LinkTo(name) {
    console.log(MenuImg)
    window.scrollTo({
        top: 0,
        behavior: 'smooth'

    })
    console.log(124124)
}
function Menu() {
    const List = MenuImg.map((item) => (
        <div className="w-full mx-3 p-2 flex justify-center cursor-pointer round hover:bg-blue-200 duration-500 flex-col" onClick={LinkTo(item.name)}>
            <a href={`#${item.name}`}>
            <img src={item.img} alt={item.img} className=""/>
            </a>
        </div>
    ))
    // const hie = document.getElementById("about")
    // console.log(hie)
    // console.log(hie.offsetHeight)
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