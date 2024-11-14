
# Description專案介紹

## Requirement環境需求
- Node.js

## Tech
- React
- Tailwind
- Vite
- twin.macro
- Ant Design

## User Flow 使用者流程
使用者在輸入欄位(InputEnter)填入內容後，加入清單元件(TodoItem)
1. 儲存InputEnter輸入的文字內容
2. 紀錄Checkbox元件狀態
3. 依照點擊的Button種類決定進行 編輯(edit) / 刪除(delete) 的動作

## Components 專案元件結構及說明
    <App/>
    |-- allTodoList : 記錄所有項目內容
    |-- count : 總數
    |
    |-- <InputEnter/>  
    |   |-- inputRef(useRef) : 輸入的項目內容
    |
    |-- <ListContainer/>
    |   | 
    |   |-- <TodoItem/>
    |   |   |-- todoValue : 項目內容
    |   |   |-- doneStatus : 完成狀態
    |   |   |
    |   |   |-- <Checkbox/>
    |   |   |   |-- check : 勾選狀態

- `<App/>` 最終匯出元件

- `<InputEnter/>` 輸入框

- `<ListContainer/>` 所有項目容器

- `<TodoItem/>` 每個清單項目

- `<Checkbox/>` 勾選狀態




