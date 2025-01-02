import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import FadeInComponent from '../../components/fadeInComponent';
import { motion } from 'motion/react';

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
import w1 from '../../../public/work1.png';
import w2 from '../../../public/work2.png';
import w3 from '../../../public/work3.png';
import w4 from '../../../public/work4.png';

function PersonIntro() {
    return (
        <div className='p-3 text-3xl text-dark-blue'>
            <p className='font-bold'>Hello World!</p>
            <span>This is</span>
            <p className='font-black text-[63px]'>Nini Ku</p>
        </div>
    );
}

//#personal infos
const programmingSkills = [{ name: "HTML/ CSS/ JavaScript", description: "能快速且精準的RWD切版及製作可重用的UI元件，且熟悉Bootstrap、Tailwind等主流的Library。", img: web }, {
    name: "React", description: "具有React side project經驗，了解 Hooks 的使用及styled-components等工具。", img: react
}, { name: "Next.js", description: "具有side project經驗，了解基礎app router概念並使用，建立CSR頁面架構。", img: next }, { name: "API", description: "能夠使用fetchAPI抓取資料回傳至前端畫面進行渲染", img: api }];

const designingSkills = [{ name: "Figma", img: figma }, { name: "UI/UX", img: uiux }, { name: "Adobe illustrator", img: ai }, { name: "Adobe photoshop", img: ps }];

const hobbies = [{ name: "illustration", img: illustrate }, { name: "Pets", img: pets }, { name: "Reading", img: reading }, { name: "Photography", img: photographs }];

const works = [{ name: "Taipei Into Website", tag: "design | frontend | API", img: w1 }, { name: "GIS UI design", tag: "UI/UX", img: w2 }, { name: "UI/UX Redesign Project", tag: "UI/UX", img: w3 }, { name: "Feeling Interior Design", tag: "design", img: w4 }];

function Skills() {
    return (
        <>
            <div className='flex flex-col gap-5' >
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
            {works.map((el) => <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.05 }} className='work-item' key={el.name}><Image src={el.img} width={50} height={50} alt={el.name} /><p>{el.name}</p><span className='tag'>{el.tag}</span><p className='description'>content & description ...</p></motion.div>)}
        </div>
    );
}

export default function AboutMe() {
    return (
        <>
            <FadeInComponent>
                <div className='flex justify-around gap-[8rem] m-10'>

                    <div className='flex flex-col items-end'>
                        <Image src={me} alt="me" width={250} className='rounded-[20%] relative'></Image>
                        <PersonIntro />
                    </div>

                    <div className='flex flex-col gap-10'>
                        <p className="section-title">Hobby</p>
                        <Hobbies />
                        <p className="section-title">01 Skills</p>
                        <Skills />
                        <p className="section-title">02 Experiences</p>
                        <p className="section-title">03 Works</p>
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
                <a>
                    <FontAwesomeIcon icon="fa-solid fa-envelope" className='text-2xl hover:text-yellow transition-all' />
                </a>
                <a href="https://github.com/ninininn?tab=repositories" target='_blank'>
                    <FontAwesomeIcon icon="fa-brands fa-github" className='text-2xl hover:text-yellow transition-all' />
                </a>
            </div>
        </>
    );
}