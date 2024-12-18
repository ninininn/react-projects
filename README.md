
# Description專案介紹

## Requirement環境需求
- Node.js

## Tech
- React
- Tailwind
- Next.js
- twin.macro
- Ant Design

## User Flow 使用者流程
使用者在輸入欄位(InputEnter)填入內容後，加入清單元件(TodoItem)
1. 儲存InputEnter輸入的文字內容
2. 紀錄Checkbox元件狀態
3. 依照點擊的Button種類決定進行 編輯(edit) / 刪除(delete) 的動作

## Documents 專案結構

        React-Projects/
        ├─ public/
        │  
        ├─ src/
        │  ├─ app/                  #App router
        │  │  ├─ about/             #關於我
        │  │  ├─ calculator/         #計算機專案
        │  │  ├─ todolist/          #TodoList專案
        │  │  ├─ layout.jsx         #RootLayout
        │  │  ├─ page.jsx           
        │  │  ├─ loading.jsx           
        │  │
        │  ├─ components/           #通用元件
        │  ├─ styles/               #專案內所有css樣式

## TodoList 專案元件結構及說明
1. 主要功能
 - 點擊 `Add` 時新增項目至清單中
 - 顯示並紀錄目前清單內總數
 - 每條項目可以勾選表示完成/未完成狀態
 - 點選各項目的刪除按鈕來刪除該項目，並跳出提醒視窗
 - 點選各項目的編輯按鈕以開啟編輯內容
 - 將當下所有清單內容記錄到 `localStorage` 中
 - 點擊 `Clear All History` 以清除所有暫存

## Calculator 專案元件結構及說明
1. 主要功能
 - 點擊 `AC` 時清除所有內容
 - 一般加減乘除計算
 - 點擊 `<` 時代表倒退一步
 - 每點擊一次 `=` 即代表開始重新一輪的計算
