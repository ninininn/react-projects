import React, { useEffect, useState, useRef } from 'react';
import './index.css';
// import tw from 'twin.macro';
// import ReactDOM from 'react-dom';
//font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);
//import other custom components
import Modal from '../src/components/Modal';

// twin.macro 使用tailwind+emotion寫法
// const Test = tw.button`
//   w-56 bg-primary text-white py-2
// `;


//[#] 定義輸入框(InputEnter)元件
function InputEnter({ add }) {

  //輸入的內容
  const inputRef = useRef(null);

  //1. 點擊AddBtn或直接按enter時，加入項目
  const handleClick = () => {
    if (inputRef.current.value === "" || inputRef.current.value === " ") {
      alert("Enter something");
      return null;
    } else {
      add(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick(e);
    }
  };
  return (
    <>
      <input type="text" className="add-input pl-8" placeholder="type something" onKeyDown={handleKeyDown} ref={inputRef} />
      <button className='add-btn' onClick={handleClick}>Add</button>
    </>
  );
}


//[#] 定義Checkbox、狀態元件
function Checkbox({ id, status, toggle }) {
  const handleClick = () => {
    toggle(id);
  };
  return (
    <FontAwesomeIcon icon={status ? "fa-solid fa-square-check" : "fa-regular fa-square"} size="xl" style={{ color: "#ecbea5", cursor: "pointer" }} onClick={handleClick} />
  );
}

//[#] 定義項目(TodoItem)元件
function TodoItem({ text, id, isComplete, del, toggle, edit, setEditingId, isEditing }) {
  const [open, setOpen] = useState(false);
  const todoRef = useRef(text);
  // const [editable, setEditable] = useState(false);
  const handleClick = (e) => {
    if (e.target.classList.contains("del-btn")) {
      //open確認刪除的modal
      setOpen(true);
    }
  };

  const handleEdit = () => {
    setEditingId(isEditing ? null : id);
  };

  //TODO 需要更新ref(todoRef)的current.value
  useEffect(() => { todoRef.current.value = text; }, []);
  return (
    <div className='item'>

      <label className='flex items-center'>
        <Checkbox status={isComplete} toggle={toggle} id={id} />
        <input type="text" className={isEditing ? "item-input pl-2" : "hidden"} ref={todoRef} value={text} onChange={() => { edit(id, todoRef.current.value); }} />
        <p className={`ml-2 ${isComplete ? "line-through text-gray" : ""} ${isEditing ? "hidden" : ""}`}>{text}</p>
      </label>
      <div>
        <FontAwesomeIcon className="edit-btn mr-2" icon={isEditing ? "fa-solid fa-check" : "fa-regular fa-pen-to-square"} style={{ color: "#ffffff" }} onClick={handleEdit} />
        <FontAwesomeIcon className="del-btn" icon="fa-solid fa-trash-can" style={{ color: "#ffffff" }} onClick={handleClick} />

        {/* dialog */}
        <Modal open={open} onClose={() => { setOpen(false); }}>
          <div className="del-btn bg-alert" onClick={() => del(id)}  >
            <span className='text-white mr-1'>Delete</span>
            <FontAwesomeIcon icon="fa-solid fa-trash-can" style={{ color: "#ffffff", }} />
          </div>
        </Modal>
      </div>
    </div >
  );
}


//[#] 整體list容器
function ListContainer({ contents, del, toggle, edit, setEditingId, isEditing }) {
  let contentArr = contents.map((el, index) => <TodoItem text={el.todo} key={index} id={el.id} isComplete={el.isComplete} del={del} toggle={toggle} edit={edit} setEditingId={setEditingId} isEditing={isEditing === el.id} />);

  return (
    <div className='listContainer'>{contentArr}</div>
  );
}

//[#] 完整清單容器
function App() {
  let title = "Todo List";

  //1. 用陣列儲存完整清單
  const [count, setCount] = useState(localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")).length : 0);
  const [allTodoList, setAllTodoList] = useState(localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []);
  //管理項目的編輯狀態
  const [editingId, setEditingId] = useState(null);


  //2. 新增todo
  const addTodo = (inputText) => {
    setCount((prev) => prev + 1);
    let newTodo = { id: count, todo: inputText, isComplete: false };
    setAllTodoList([...allTodoList, newTodo]);
  };

  //3. 刪除todo
  const deleteTodo = (id) => {
    setAllTodoList((prev) => {
      let delArr = prev.filter((el) => el.id !== id);
      //=更新id並re-render整個allTodoList
      let mapArr = delArr.map(({ id, ...el }, index) =>
        ({ ...el, id: index })
      );
      return mapArr;
    });
    setCount((prev) => prev - 1);
    setEditingId(null); //關閉所有項目編輯狀態
  };



  //4. toggle完成與否
  const toggleComplete = (id) => {
    setAllTodoList((prev) => {
      return prev.map((el) => {
        if (el.id === id) {
          return { ...el, isComplete: !el.isComplete };
        }
        return el;
      });
    });
  };

  //5. 編輯單項todo項目
  const editTodo = (id, newText) => {
    setAllTodoList((prev) => {
      return prev.map((el) => {
        if (el.id === id) {
          return { ...el, todo: newText };
        }
        return el;
      });
    });
  };



  //#儲存資料到localStorage
  useEffect(() => { localStorage.setItem("todo", JSON.stringify(allTodoList)); }, [allTodoList]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title font-bold text-dark-blue'>{title}</h1>
      </header>
      <p className="description">Enter Your Todo items, then press Enter key or the Add button behind.</p>
      <div className='addBlock'>
        <InputEnter add={addTodo} />
      </div>
      <div className="text-xl text-dark-blue mb-2">Total : <span className="text-orange font-bold">{count == 0 ? "Empty" : count} </span>lists</div>
      <ListContainer contents={allTodoList} del={deleteTodo} toggle={toggleComplete} edit={editTodo} setEditingId={setEditingId} isEditing={editingId} />

      {/* clear所有紀錄 */}
      <button className="bg-dark-blue hover:bg-alert w-fit p-2 rounded-sm mx-auto mt-3 text-white transition-colors" onClick={() => { setAllTodoList([]); setCount(0); }}>Clear All History</button>
    </div>
  );
}

export default App;