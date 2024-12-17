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


const options = ["Todolist", "Caculator", "About"];


export default function RootLayout({ children }) {
    const activeSegment = useSelectedLayoutSegment();

    return (
        <html lang="en">
            <body>
                <div id="root">
                    <div className="App">
                        <header className="App-header">
                            <h1 className='title font-bold text-dark-blue select-none text-3xl'>{activeSegment === null ? "Projects Home" : options[options.map((el) => el.toLowerCase()).indexOf(activeSegment)]}</h1>
                            {activeSegment === null || <Link href='/' className="absolute right-5 bg-dark-blue p-2 rounded-md text-white text-sm hover:bg-orange transition-all">
                                <FontAwesomeIcon className="text-white mr-2" icon="fa-solid fa-home" >
                                </FontAwesomeIcon>
                                Back to Hompage
                            </Link>}
                        </header>
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}