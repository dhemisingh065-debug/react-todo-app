const TodoApp = () => {
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
          />

          <button className="bg-blue-600 text-white px-5 rounded-lg hover:bg-blue-700">
            Add
          </button>
        </div>

        <ul className="space-y-3">

          <li className="flex justify-between items-center border rounded-lg p-3">
            <span>Learn React</span>

            <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
              Delete
            </button>
          </li>

          <li className="flex justify-between items-center border rounded-lg p-3">
            <span>Learn JavaScript</span>

            <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
              Delete
            </button>
          </li>

        </ul>

      </div>
    </div>
  );
};

export default TodoApp;