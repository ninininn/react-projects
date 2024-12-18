import React, { useEffect, useState, useRef } from 'react';

//@keyboard layout
const col1 = ["AC", "÷", "<"];
const col2 = ["7", "8", "9", "x"];
const col3 = ["4", "5", "6", "-"];
const col4 = ["1", "2", "3", "+"];
const col5 = [".", "0", "="];

const keyboardBtn = [...col1, ...col2, ...col3, ...col4, ...col5];

export default function Calculator() {
    const [nextRound, setNextRound] = useState(false);
    const [input, setInput] = useState('');
    const [calResult, setCalResult] = useState(null);

    //TODO 按下"="時把目前結果顯示
    const calculateResult = () => {
        // const result = evaluateExpression(input);
        // setCalResult("result");
        setNextRound(!nextRound);
    };

    //抓取點擊的內容
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
                setInput(prev => prev.slice(0, -1));
                break;
            default:
                setInput(prev => prev + keyValue);
                evaluateExpression(input, keyValue);
                break;
        }
    };


    //清除所有值
    const clear = () => {
        setInput('');
        setCalResult(null);
    };

    //計算邏輯
    const evaluateExpression = (input, operator) => {
        console.log("start counting!");
        console.log("當次傳入的input狀態:", input, "目前的calResult:", calResult, "當下按鈕:", operator);
        //TODO 紀錄當次計算結果，接續計算
        // let result = input.split("+").map(el => Number(el)).reduce((a, b) => a + b);
        // console.log("result:", result);
        setCalResult(operator);
    };

    return (
        <div id="cal-container">
            <div className='key-input'>
                <p>{input}</p>
                <p>{calResult}</p>
            </div>
            <div className="keyboard">
                {keyboardBtn.map(el => <button onClick={el === "=" ? calculateResult : () => { handelClick(el); }} key={el} className="keys">{el}</button>)}
            </div>
        </div>
    );
}
