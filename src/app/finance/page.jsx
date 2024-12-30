//!Finance Page
'use client';

import React from 'react';
import dynamic from "next/dynamic";
import '../../styles/finance.css';

const FinanceManage = dynamic(() => import('./financeManage.jsx'), { ssr: false });

export default function FinancePage() {
    return <FinanceManage />;
}