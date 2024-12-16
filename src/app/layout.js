//!RootLayout!
'use client';
import Link from 'next/link';
import '../styles/global.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);

import { useSelectedLayoutSegment } from 'next/navigation';

const options = ["Todolist", "Caculater", ""];

export default function RootLayout({ children }) {
    const activeSegment = useSelectedLayoutSegment();

    const backHome = () => {

    };
    return (
        <html lang="en">
            <body>
                <div id="root">
                    <div className="App">
                        <header className="App-header">
                            <h1 className='title font-bold text-dark-blue select-none'>{activeSegment === null ? "Home" : activeSegment}</h1>
                            <Link href='/' className="absolute right-5">
                                <FontAwesomeIcon className="text-dark-blue" icon="fa-solid fa-home" >
                                </FontAwesomeIcon>
                            </Link>
                        </header>
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}