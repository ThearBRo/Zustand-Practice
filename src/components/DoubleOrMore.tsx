import { useState } from "react";
import { useDoubleTodoStore } from "./store/useStore";
import Tip from "./Tip";

interface DoubleTodo {
  id: number;
  title: string;
  tasks: string[];
  deadline: string;
}

const DoubleOrMore = () => {
  const { doubles, addTodo, removeTodo } = useDoubleTodoStore();
  const [title, setTitle] = useState<string>("");
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [editTodo, setEditTodo] = useState<DoubleTodo | null>(null);

  const handleAddTodo = () => {
    if (title.trim() == "" || task.trim() == "" || deadline.trim() == "") {
      return;
    }
    addTodo({
      id: Date.now(),
      title,
      tasks: task.split(",").map((task) => task.trim()),
      deadline,
    });

    setTitle("");
    setTask("");
    setDeadline("");
  };

  const handleUpdateTodo = () => {
    if (title.trim() == "" || task.trim() == "" || deadline.trim() == "") {
      return;
    }
    if (editTodo) {
      removeTodo(editTodo.id);
      addTodo({
        id: Date.now(),
        title,
        tasks: task.split(",").map((task) => task.trim()),
        deadline,
      });
      setEditTodo(null);
    }
    setTitle("");
    setTask("");
    setDeadline("");
  };

  const handleCancelTask = () => {
    setEditTodo(null);
    setTitle("");
    setTask("");
    setDeadline("");
  };

  const handleEditTodo = (todo: DoubleTodo) => {
    setEditTodo(todo);
    setTitle(todo.title);
    setTask(todo.tasks.join(", "));
    setDeadline(todo.deadline);
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-green-100">
        <div className="bg-white p-6 round-lg shadow-lg w-full max-w-2xl">
          <h1 className="text-3xl font-bold mb-6 text-center text-green-800">
            Double Todo
          </h1>
          <div className="space-y-4 mb-4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Task"
              className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              placeholder="Deadline"
              className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="flex justify-between">
              {editTodo ? (
                <div>
                  <button
                    onClick={handleUpdateTodo}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    Update Recipe
                  </button>

                  <button
                    onClick={handleCancelTask}
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={handleAddTodo}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    Add Todo
                  </button>
                </>
              )}
            </div>
          </div>
          <ul className="space-y-4">
            {doubles.map((todo) => (
              <li className="p-4 bg-green-50 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-green-80 mb-2">
                  {todo.title}
                </h2>
                <p className="text-gray-700 mb-2">
                  <strong>All todo: </strong> {todo.tasks.join(", ")}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Deadline: </strong> {todo.deadline}
                </p>
                <Tip />

                <div className="flex justify-between">
                  <button
                    onClick={() => handleEditTodo(todo)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => removeTodo(todo.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoubleOrMore;
