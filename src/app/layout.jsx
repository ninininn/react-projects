//!ClientLayoutRootLayout!
'use client';
import Link from 'next/link';
import '../styles/global.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);
import { useSelectedLayoutSegment } from 'next/navigation';
import FadeInComponent from '../components/fadeInComponent';
//#font 
import { spFont } from './utils/font';

const projects = ["Todolist", "Calculator", "About", "FileReader"];

export default function RootLayout({ children }) {
    const activeSegment = useSelectedLayoutSegment();
    const currentPage = activeSegment
        ? projects.find((el) => el.toLowerCase() === activeSegment) || "Unknown Page"
        : "Home Page";

    return (
        <html lang="en">
            <body className={spFont}>
                <div id="root" >
                    <div className={`App ${activeSegment || ""}`}>
                        <header className="App-header">
                            <h1 className='title'>{currentPage}</h1>
                            {activeSegment && (
                                <Link href='/' className="backHM">
                                    <FontAwesomeIcon className="text-xl p-3" icon="fa-solid fa-house-chimney-window" />
                                </Link>
                            )}
                        </header>
                        <FadeInComponent>
                            {children}
                        </FadeInComponent>
                    </div>
                </div>
            </body>
        </html>

    );
}