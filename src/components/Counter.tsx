import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
    <div className="px-28 py-8 bg-amber-100 rounded-lg flex flex-col items-center">

      <button className="px-4 py-2 bg-slate-400 rounded-lg text-white font-bold" onClick={() => setCount(count => count + 1)}>Plus</button>
      <div className="py-4">The count is {count}</div>
      <button className="px-4 py-2 bg-slate-400 rounded-lg text-white font-bold"  onClick={() => setCount(count => count - 1)}>Minus</button>

    </div>
    </>
  );
};

export default Counter;
