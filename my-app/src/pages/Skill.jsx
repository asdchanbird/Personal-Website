import SkillCard from '../component/skillCard';
const FirstList = [{
    id:1,
    list:'- HTML / CSS',
},{
    id:2,
    list:'- JavaScript',
},{
    id:3,
    list:'- AJAX / Axios / Fetch',
},{
    id:4,
    list:'- jQuery',
},{
    id:4,
    list:'- GSAP',
},{
    id:5,
    list:'- SASS',
},{
    id:6,
    list:'- Vue3 / Vue cli / Vite',
},{
    id:7,
    list:'- React',
},{
    id:8,
    list:'- Bootstrap / Tailwind CSS',
},]
const SecondList = [{
    id:1,
    list:'- PHP',
},{
    id:2,
    list:'- Python',
},{
    id:3,
    list:'- MySQL',
},{
    id:4,
    list:'- SQLite',
},]
const ThirdList = [{
    id:1,
    list:'- Sourcetree / Git 版控',
},{
    id:2,
    list:'- Adobe Photoshop',
},{
    id:3,
    list:'- Figma',
},{
    id:4,
    list:'- Postman API測試工具',
},{
    id:5,
    list:'- Notion 筆記工具',
},]
function Skill(props) {
    return(
        <div className="App h-screen">
            <div className='flex justify-center h-screen font-extrabold flex-col'>
                <div className=''>
                    <h2 className='mainColor text-2xl w-full text-center mt-4 h-1/6'>技能 Skills</h2>
                </div>
                <div className='flex h-5/6'>
                    <SkillCard List={FirstList} title='前端技能' />
                    <SkillCard List={SecondList} title='後端技能與資料庫' />
                    <SkillCard List={ThirdList} title='其他技能與輔助工具' />
                </div>
            </div>
        </div>
    )
}


export default Skill;       