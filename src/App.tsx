import "./index.css";
import { useState } from "react";
import Button from "./assets/Button";

type TodoItem = {
  id: string;
  text: string;
  completed: boolean;
};

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState<TodoItem[]>([]);

  const handleInput = (event): void => {
    setInput(event.target.value);
  };

  const handleOnClick = (event) => {
    console.log(event.target);
    console.log("pinota");
    console.log(input);
    addTodoItem(input);
  };

  const addTodoItem = (text: string) => {
    const newTodo: TodoItem = {
      id: text + "_" + todoList.length,
      text,
      completed: false,
    };

    setTodoList([...todoList, newTodo]);
  };

  const handleComplete = (id: string) => {
    console.log(id, "this is the id");
    const newList = todoList.map((items) => {
      if (id === items.id) return { ...items, completed: !items.completed };
      else return items;
    });

    console.log(newList);
    setTodoList(newList);
  };

  const handleRemove = (id: string) => {
    const newList = todoList.filter((items) => {
      if (id !== items.id) {
        return items;
      }
    });

    console.log(newList);

    setTodoList(newList);
  };

  console.log(todoList);

  return (
    <main className="container flex justify-center items-center bg-slate-000 mx-auto">
      <div className="p-6 border shadow-xl bg-neutral-100 py-12 mt-12 rounded-lg w-11/12 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-stone-700">
          Hello This is A Todo List App
        </h1>
        <div className="mx-auto my-8 flex gap-4 items-center justify-center w-full">
          <input
            value={input}
            onChange={handleInput}
            className="px-2 py-4 rounded-lg w-8/12 focus:neutral-200"
            type="text"
            name="searchbar"
            placeholder="Add Task"
          />
          <Button content={"Add Task"} handleOnClick={handleOnClick} />
        </div>
        <ol className="rounded-lg bg-slate-100 flex p-4 flex-col justify-center w-2/3 mx-auto">
          {todoList.map((items, index) => (
            <li
              key={items.text + index}
              className=" bg-slate-100 px-2 py-2 flex items-center justify-between"
            >
              <input
                type="checkbox"
                name={items}
                checked={items.completed}
                onChange={() => handleComplete(items.id)}
              />
              {items.text}{" "}
              <button
                onClick={() => handleRemove(items.id)}
                className="shadow-lg hover:opacity-75 bg-slate-500 font-bold text-sky-100 px-4 py-2 rounded-lg"
              >
                Delete Task
              </button>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
};

export default App;
