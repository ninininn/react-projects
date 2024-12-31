import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import FadeInComponent from '../../components/fadeInComponent';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, faGithub);
// #images
import me from '../../../public/me.png';
import pets from '../../../public/pets.png';
import illustrate from '../../../public/illustration.png';
import reading from '../../../public/read.png';
import photographs from '../../../public/camera.png';
import react from '../../../public/react.png';
import web from '../../../public/web.png';
import figma from '../../../public/figma.png';
import uiux from '../../../public/UIUX.png';
import next from '../../../public/nextjs.png';
import ai from '../../../public/ai.png';
import ps from '../../../public/ps.png';
import api from '../../../public/api.png';

function Intro() {
    return (
        <div className='p-3 text-3xl text-dark-blue '>
            <p className='font-bold'>Hello World!</p>
            <span>This is</span>
            <p className='font-black text-[63px] absolute'>Nini Ku</p>
        </div>
    );
}

//#personal
const programmingSkills = [{ name: "HTML/ CSS/ JavaScript", description: "能快速且精準的RWD切版及製作可重用的UI元件，且熟悉Bootstrap、Tailwind等主流的Library。", img: web }, {
    name: "React", description: "具有React side project經驗，了解 Hooks 的使用及styled-components等工具。", img: react
}, { name: "Next.js", description: "具有side project經驗，了解基礎app router概念並使用，建立CSR頁面架構。", img: next }, { name: "API", description: "能夠使用fetchAPI抓取資料回傳至前端畫面進行渲染", img: api }];

const designingSkills = [{ name: "Figma", img: figma }, { name: "UI/UX", img: uiux }, { name: "Adobe illustrator", img: ai }, { name: "Adobe photoshop", img: ps }];

const hobbies = [{ name: "illustration", img: illustrate }, { name: "Pets", img: pets }, { name: "Reading", img: reading }, { name: "Photography", img: photographs }];

const works = [{ name: "Taipei Into", img: illustrate }, { name: "GIS UI design", img: reading }, { name: "UI/UI Redesign Project", img: photographs }, { name: "Feeling Interior Design", img: pets }];

function Skills() {
    return (
        <>
            <div className='flex flex-col gap-5'>
                {programmingSkills.map((skill) => <div className='skill-item' key={skill.name}><Image src={skill.img} width={50} height={50} alt={skill.name} /><p>{skill.name}</p><span>{skill.description}</span></div>)}
            </div>
            <div className='grid grid-cols-2 gap-5'>
                {designingSkills.map((skill) => <div className='skill-item design' key={skill.name}><Image src={skill.img} width={50} height={50} alt={skill.name} /><p>{skill.name}</p></div>)}
            </div>
        </>
    );
}

function Hobbies() {
    return (
        <div className="flex gap-3 justify-between items-center">
            {hobbies.map((el) => <div className='hobby-item' key={el.name}><Image src={el.img} width={50} height={50} alt={el.name} /><p>{el.name}</p></div>)}
        </div>
    );
}

function Works() {
    return (
            <div className='flex flex-col gap-5'>
                {works.map((el) => <div className='work-item' key={el.name}><Image src={el.img} width={50} height={50} alt={el.name} /><p>{el.name}</p><span></span></div>)}
            </div>
    );
}

export default function AboutMe() {
    return (
        <>
            <FadeInComponent>
                <div className='flex mx-auto justify-around gap-[8rem] mt-5'>
                    <div className='flex flex-col items-center'>
                        <Image src={me} alt="me" width={250} className='rounded-[20%] relative'></Image>
                        <Intro />
                    </div>
                    <div className='flex flex-col gap-10'>
                        <p className="section-title">Hobby</p>
                        <Hobbies />
                        <p className="section-title">Skills</p>
                        <Skills />
                        <p className="section-title">Works</p>
                        <Works />
                    </div>
                </div>
            </FadeInComponent>
            <div className='footer'>
                <Image src={me} alt="me" width={100} className='rounded-full relative'></Image>
                <div className='flex-auto text-left'>
                    <p>Nini Ku</p>
                    <p className='border-b border-white my-3'></p>
                    <p>FRONTEND ENGINEER / UI DESIGNER</p>
                </div>
                <p>Contact me with</p>
                <FontAwesomeIcon icon="fa-solid fa-envelope" className='text-2xl' />
                <FontAwesomeIcon icon="fa-brands fa-github" className='text-2xl' />
            </div>
        </>
    );
}