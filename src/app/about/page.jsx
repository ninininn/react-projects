'use client';
//!About me
import dynamic from "next/dynamic";
const AboutMe = dynamic(() => import('./aboutme.jsx'), { ssr: false });


export default function About() {

    return (
        <>
            <AboutMe />
        </>
    );
}