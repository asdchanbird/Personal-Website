import '../App.css';
import Myself from '../component/contact1';
import Form from '../component/contact2';
function Contact() {
    return (
        <div className='App flex flex-wrap px-36'>
           <div className="pt-4 w-full">
                <h1 className='text-blue-500 text-center font-bold text-2xl items-center'>與我聯繫</h1>
            </div>
            <div className='flex w-full justify-center flex-col items-center p-4 lg:flex-row '>
                <Myself />
                <Form />
            </div>
        </div>
    )
}


export default Contact;