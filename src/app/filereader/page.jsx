//!FileReader Page
'use client';

import React from 'react';
import dynamic from "next/dynamic";
import '../../styles/filereader.css';

const FileReader = dynamic(() => import('./fileReader.jsx'), { ssr: false });

export default function FinancePage() {
    return <FileReader />;
}