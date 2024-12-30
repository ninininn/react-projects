import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import me from '../../../public/me.png';

function Intro() {
    return (
        <div className='p-3 text-2xl text-dark-blue'>
            <p>Hello World!</p>
            <p>This is Nini Ku</p>
        </div>
    );
}

export default function AboutMe() {
    return (
        <div className='mx-auto w-[75%] shadow-sm rounded-md bg-white bg-opacity-50 flex p-24'>
            <Image src={me} alt="me" width={200}></Image>

            <Intro />
        </div>
    );
}