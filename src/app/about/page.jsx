'use client';
//!About me
import '../../styles/about.css';
import dynamic from "next/dynamic";
const AboutMe = dynamic(() => import('./aboutme.jsx'), { ssr: false });


export default function About() {
    return (
        <>
            <AboutMe />
        </>
    );
}