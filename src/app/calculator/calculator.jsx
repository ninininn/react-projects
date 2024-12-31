import React, { useEffect, useState } from 'react';
import FadeInComponent from '../../components/fadeInComponent';

//@keyboard layout
const col1 = ["AC", "÷", "<"];
const col2 = ["7", "8", "9", "x"];
const col3 = ["4", "5", "6", "-"];
const col4 = ["1", "2", "3", "+"];
const col5 = [".", "0", "="];

const keyboardBtn = [...col1, ...col2, ...col3, ...col4, ...col5];

//@Main component
export default function Calculator() {

    const [nextRound, setNextRound] = useState(false); //新一輪計算
    const [input, setInput] = useState(''); //輸入時數字
    const [calResult, setCalResult] = useState(null); //計算之結果

    //#按下"="時把目前結果顯示
    const calculateResult = () => {
        const result = evaluateExpression(input);
        setCalResult(result);
        setInput('');
        setNextRound(!nextRound);
    };

    //#處理倒退按鈕 "<" 點擊
    const handleBackspaceClick = () => {
        const updatedInput = input.slice(0, -1);
        setInput(updatedInput);

        if (isCompleteExpression(updatedInput)) {
            try {

                const calcResult = evaluateExpression(updatedInput);
                setCalResult(calcResult);
            } catch {
                setCalResult('Error');
            }
        } else {
            setCalResult(null);
        }
    };

    //#抓取點擊的內容
    const handelClick = (keyValue) => {
        if (nextRound) {
            console.log("new round!");
            clear();
            setNextRound(!nextRound);
        }
        switch (keyValue) {
            case "AC":
                clear();
                break;
            case "<":
                handleBackspaceClick();
                break;
            default:
                setInput(prev => prev + keyValue);
                const updatedInput = input + keyValue;
                if (isCompleteExpression(updatedInput)) {
                    const calcResult = evaluateExpression(updatedInput);
                    setCalResult(calcResult);
                }
                break;
        }
    };

    //#清除所有值
    const clear = () => {
        setInput('');
        setCalResult(null);
    };


    //#判斷是否為完整的表達式
    const isCompleteExpression = (expression) => {
        // 完整表達式的結尾應該是數字（不是運算符）
        return /\d$/.test(expression);
    };

    //#計算表達式
    const evaluateExpression = (expression) => {
        // 替換 x 和 ÷ 為對應的運算符號
        const sanitizedExpression = expression.replace(/x/g, '*').replace(/÷/g, '/');

        const tokens = sanitizedExpression.match(/(\d+(\.\d+)?|[+\-*/])/g);
        if (!tokens) return '';

        let total = parseFloat(tokens[0]);

        for (let i = 1; i < tokens.length; i += 2) {
            const operator = tokens[i];
            const nextNumber = parseFloat(tokens[i + 1]);

            switch (operator) {
                case '+':
                    total += nextNumber;
                    break;
                case '-':
                    total -= nextNumber;
                    break;
                case '*':
                    total *= nextNumber;
                    break;
                case '/':
                    if (nextNumber === 0) throw new Error('Division by Zero');
                    total /= nextNumber;
                    break;
                default:
                    throw new Error('Invalid Operator');
            }
        }

        return total;
    };

    //#處理鍵盤輸入
    const handleKeyDown = (e) => {
        const key = e.key;
        switch (key) {
            case ("Enter" || "="):
                calculateResult();
                break;
            case "Backspace":
                handleBackspaceClick();
                break;
            case "Escape":
                clear();
                break;
            default:
                handelClick(key === '*' ? 'x' : key === '/' ? '÷' : key);
                break;
        }
    };

    //#清除 keydown監聽器(副作用)
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [input]);


    return (
        <FadeInComponent>
            <div id="cal-container">
                <div className='key-input'>
                    <p>{input}</p>
                    <p>{calResult !== null && `${calResult}`}</p>
                </div>
                <div className="keyboard">
                    {keyboardBtn.map(el => <button onClick={el === "=" ? calculateResult : () => { handelClick(el); }} key={el} className="keys">{el}</button>)}
                </div>
            </div>
        </FadeInComponent>
    );
}
