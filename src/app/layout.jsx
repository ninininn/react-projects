//!RootLayout!
'use client';
import Link from 'next/link';
import Head from "next/head";
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

    return (
        <html lang="en">
            <Head>
                <title>{currentPage}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/me.png" sizes="any" />
            </Head>
            <body className={`${spFont}`}>
                <div id="root" >
                    <div className={`App ${activeSegment}`}>
                        <header className="App-header">
                            <h1 className='title'>{activeSegment === null ? "Home Page" : projects[projects.map((el) => el.toLowerCase()).indexOf(activeSegment)]}</h1>
                            {activeSegment === null || <Link href='/' className="backHM">
                                <FontAwesomeIcon className="text-xl p-3" icon="fa-solid fa-house-chimney-window" />
                            </Link>}
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