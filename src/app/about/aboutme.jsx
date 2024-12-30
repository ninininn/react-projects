import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

// images
import me from '../../../public/me.png';
import pets from '../../../public/pets.png';
import illustrate from '../../../public/illustration.png';
import reading from '../../../public/illustration.png';
import photographs from '../../../public/illustration.png';
import react from '../../../public/react.png';
import web from '../../../public/web.png';
import figma from '../../../public/figma.png';
import uiux from '../../../public/UIUX.png';
import next from '../../../public/nextjs.svg';


function Intro() {
    return (
        <div className='p-3 text-3xl text-dark-blue'>
            <p>Hello World!</p>
            <p>This is Nini Ku</p>
        </div>
    );
}

const programmingSkills = [{ name: "HTML/CSS/JavaScript", img: web }, { name: "React", img: react }, { name: "Next.js", img: next }];

const designingSkills = [{ name: "Adobe", img: web }, { name: "Figma", img: figma }, { name: "UI/UX", img: uiux }];

const hobbies = [{ name: "illustration", img: illustrate }, { name: "pets", img: pets }, { name: "reading", img: reading }, { name: "photographs", img: photographs }];

function Skills() {
    return (
        <>
            <div className='flex flex-col gap-5'>
                {programmingSkills.map((skill) => <div className='skill-item' key={skill.name}><Image src={skill.img} width={50} height={50} alt={skill.name} /><p>{skill.name}</p></div>)}
            </div>
            <div className='flex flex-col gap-5'>
                {designingSkills.map((skill) => <div className='skill-item' key={skill.name}><Image src={skill.img} width={50} height={50} alt={skill.name} /><p>{skill.name}</p></div>)}
            </div>
        </>
    );
}

function Hobbies() {
    return (
        <div className="flex gap-3 justify-between items-center">
            {hobbies.map((el) => <div className='hobby-item' key={el.name}><Image src={el.img} width={50} height={50} alt={el.name} /><p >{el.name}</p></div>)}
        </div>
    );
}

export default function AboutMe() {
    return (
        <>
            <div className='w-[75%] flex mx-auto justify-around mt-5'>
                <div className='flex flex-col items-center'>
                    <Image src={me} alt="me" width={250} className='rounded-[20%]'></Image>
                    <Intro />
                </div>
                <div className='flex flex-col gap-10'>
                    <p className="section-title">My Hobby</p>
                    <Hobbies />
                    <p className="section-title">My Skills</p>
                    <Skills />
                </div>
            </div>
            <div className='footer'></div>
        </>
    );
}