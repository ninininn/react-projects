//!Todolist Page
'use client';

import React from 'react';
import dynamic from "next/dynamic";
import '../../styles/todolist.css';

const TodoList = dynamic(() => import('./todolist.jsx'), { ssr: false });

export default function todoPage() {
    return <TodoList />;
}