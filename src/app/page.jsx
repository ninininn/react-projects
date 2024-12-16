
//!Home page
import Link from 'next/link';

export default function Home() {
    return (
        <div className='flex flex-col gap-3'>
            <Link className="project" href='/todolist'>TodoList</Link>
            <Link className="project" href='/caculater'>Caculater</Link>
        </div>
    );
}