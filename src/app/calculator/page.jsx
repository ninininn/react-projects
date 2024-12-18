//!Calculator page
'use client';

import React from 'react';
import dynamic from "next/dynamic";
import '../../styles/calculate.css';

const Calculator = dynamic(() => import('./calculator.jsx'), { ssr: false });
export default function CalculatePage() {
    return <Calculator />;
}