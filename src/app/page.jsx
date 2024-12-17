
//!Home page
import Link from 'next/link';
import Image from 'next/image';
import list from '../../public/list.png';
import caculate from '../../public/cal.png';
import me from '../../public/me.png';

export default function Home() {
    return (
        <>
            <div className='grid place-content-center bg-gray-dark w-[75%] rounded-md py-8 m-auto'>
                <p className='code'>Hello World !</p>
            </div>
            {/* <h1 className='mt-10 text-3xl font-bold text-orange'>Hello World</h1> */}
            <div className='grid grid-cols-3 gap-5 m-10'>
                <Link className="project" href='/todolist'><Image width={70} src={list} alt="todolist"></Image>TodoList</Link>
                <Link className="project" href='/caculator'><Image width={60} src={caculate} alt="caculator"></Image>Caculator</Link>
                <Link className="project" href='/about'><Image width={60} src={me} alt="me"></Image>About</Link>
            </div>
        </>
    );
}