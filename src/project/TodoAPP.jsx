import { useState } from "react";
const TodoApp = () => {
  const [inpute, setinpute] = useState("")
  const [todo, settodo] = useState([])
  const delettodo = (c) => {const uppdate = todo.filter((todo,index) =>{return index !==c;

  });
      settodo(uppdate)}
  const addtodos = () => {
    if(inpute.trim() =="") return;
    settodo([...todo,inpute]);
    setinpute("");
  }
  return (
    <div className="min-h-screen bg-blue-800 flex justify-center items-center">
      <div className="bg-green-600 w-150 p-6 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">
          Todo App
        </h1>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter a task..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500"
            value={inpute}
            onChange={(e) =>setinpute(e.target.value)}
          />

          <button className="bg-blue-600 text-white px-5 rounded-lg hover:bg-blue-700 cursor-pointer"
          type="submit" 
          onClick={addtodos}>
            Add
          </button>
        </div>

        <ul className="space-y-3">

         {todo.map((todo, index) => (
           <li
           key={index}
            className="flex justify-between items-center border rounded-lg p-3" >
            <span>{todo}</span>

            <button className="cursor-pointer bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onClick={() => delettodo(index)}>
              Delete
            </button>
          </li>))}
        </ul>

      </div>
    </div>
  );
};

export default TodoApp;