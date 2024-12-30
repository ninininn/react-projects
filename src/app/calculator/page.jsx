//!Calculator page
'use client';

import React from 'react';
import dynamic from "next/dynamic";
import '../../styles/calculate.css';

//dynamic import - client component
const Calculator = dynamic(() => import(/* webpackChunkName:"calculator" */'./calculator.jsx'), { ssr: false });

export default function CalculatePage() {
    return <Calculator />;
}