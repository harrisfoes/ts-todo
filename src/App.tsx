import "./index.css";
import {useState} from "react";
import Button from "./assets/Button";

type TodoItem = {
  id: number;
  text: string;
  completed:boolean;
}

const App = () => {
  const [todoList, setTodoList] = useState()
  const [input, setInput] = useState<TodoItem[]>([])

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>):void => {
    setInput(event.target.value)
  }

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event);
    console.log("pinota")
    
  }

  const addTodoItem = (text:string) => {
    const newTodo: TodoItem = {
      id: todoList.length + 1,
      text,
      completed:false,
    };

    setTodoList([...todoList, newTodo])
  }

  console.log(todoList)

  return (
    

    <main className="container flex justify-center items-center bg-slate-000 mx-auto">
    <div className="p-6 border shadow-xl bg-neutral-100 py-12 mt-12 rounded-lg">
      <h1 className="text-3xl font-bold text-stone-700">Hello This is A Todo List App</h1>
      <div className="mx-auto my-8 flex gap-4 items-center justify-center w-full">
      <input value={input} onChange={handleInput} className="px-2 py-4 rounded-lg w-8/12 focus:neutral-200" type="text" name="searchbar" placeholder="Add Task" />
      <Button content={"Add Task"} handleOnClick={handleOnClick}/>
      </div>
    </div>
    </main>
  );
};

export default App;
