import { useEffect, useRef, useState } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

function App() {

  const inputRef = useRef();
  const [TodoList, SetTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")) : []);

  const Add = ()=> {
    const inputText = inputRef.current.value.trim();
    
    if(inputText==="") {
      return null;
    }
    else {
      const newItem = {
        id: Date.now(),
        text: inputText,
        isComplete: false,
      }

      SetTodoList((prev)=> [...prev, newItem])
      inputRef.current.value = "";
    }
  }

  function deleteItem(id) {
    SetTodoList((prev)=> prev.filter((todo)=> todo.id !== id))
  }

  function toggle(id) {
    SetTodoList((prev)=> prev.map((todo)=> {
      if(todo.id ===id) {
        return {...todo, isComplete: !todo.isComplete}
      }
      return todo;
    }))
  }

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(TodoList))
  },[TodoList])

  return (
    <div className="App bg-slate-800 h-screen w-full flex justify-center items-center">
      <div className="container w-96 min-h-64 p-8 bg-white rounded-xl">
        <h1 className="text-3xl md:text-4xl font-semibold">To-do List</h1>
        <div className="container relative flex justify-between items-center pt-4 pb-8">
          <input ref={inputRef} className='border-2 bg-slate-300 border-none outline-none flex-1 p-2 rounded-full w-full placeholder:text-slate-600' placeholder='Add your text' type="text" />
          <button onClick={Add} className='bg-redColor border-2 border-redColor text-white py-2 px-6 flex justify-center items-center rounded-full absolute right-0'>Add +</button>
        </div>
        {TodoList.map((item, index)=> {
          return <ToDoList key={index} text={item.text} isComplete={item.isComplete} id={item.id} deleteItem={deleteItem} toggle={toggle} />
        })}
      </div>
    </div>
  );
}

export default App;
