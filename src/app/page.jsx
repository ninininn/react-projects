
//!Home page
import Link from 'next/link';
import Image from 'next/image';
import list from '../../public/list.png';
import calculate from '../../public/cal.png';
import me from '../../public/me.png';
import financePig from '../../public/finance.png';


export default function Home() {
    return (
        <>
            <div className='grid place-content-center bg-gray-dark w-[75%] rounded-md py-8 mx-auto my-20'>
                <p className='code'>Hello World !</p>
            </div>
            <h1 className='mt-10 text-3xl font-bold text-orange'>Check out my Projects</h1>
            <div className='grid grid-cols-3 gap-5 m-10'>
                <Link className="project" href='/todolist'><Image width={70} src={list} alt="todolist" />TodoList 代辦清單</Link>
                <Link className="project" href='/calculator'><Image width={60} src={calculate} alt="calculator" />Calculator 計算機</Link>
                <Link className="project" href='/about'><Image width={60} src={me} alt="me" />About 關於我</Link>
                <Link className="project" href='/finance'><Image width={60} src={financePig} alt="finance" />Finance 財務管理</Link>
            </div>
        </>
    );
}