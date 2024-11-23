import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // Fonksiyonları sadeleştirme
  const increase: () => void = () => setCount((prevCount) => prevCount + 1);
  const decrease: () => void = () => setCount((prevCount) => prevCount - 1);

  return (
    <div className="p-4">
      <p className="text-xl font-bold">Counter: {count}</p>
      <div className="space-x-2">
        <button
          onClick={increase}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Increase
        </button>
        <button
          onClick={decrease}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrease
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
