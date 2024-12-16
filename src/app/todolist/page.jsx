//!Todolist Page
'use client';

import React from 'react';
import dynamic from "next/dynamic";
import '../../styles/todolist.css';

const App = dynamic(() => import('./App.jsx'), { ssr: false });

export default function todoPage() {
    return <App />;
}