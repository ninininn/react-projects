//!RootLayout!
'use client';
import Link from 'next/link';
import '../styles/global.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);
import { Afacad } from 'next/font/google';
import { useSelectedLayoutSegment } from 'next/navigation';
import FadeInComponent from '../components/fadeInComponent';

const projects = ["Todolist", "Calculator", "About", "Finance"];

const afacad = Afacad({
    subsets: ['latin'],
    variable: '--font-afacad'
});
export default function RootLayout({ children }) {
    const activeSegment = useSelectedLayoutSegment();

    return (
        <html lang="en">
            <body className={`${afacad.variable}`}>
                <div id="root">
                    <div className={`App ${activeSegment}`}>
                        <FadeInComponent>
                            <header className="App-header">
                                <h1 className='title font-bold text-dark-blue select-none text-3xl'>{activeSegment === null ? "Home Page" : projects[projects.map((el) => el.toLowerCase()).indexOf(activeSegment)]}</h1>
                                {activeSegment === null || <Link href='/' className="absolute right-5 bg-dark-blue p-2 rounded-md text-white text-sm hover:bg-orange transition-all">
                                    <FontAwesomeIcon className="text-white mr-2" icon="fa-solid fa-home" >
                                    </FontAwesomeIcon>
                                    Back to Hompage
                                </Link>}
                            </header>
                            {children}
                        </FadeInComponent>
                    </div>
                </div>
            </body>
        </html>
    );
}