import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter">
      <button
        className="counter__button"
        onClick={() => setCounter(counter + 1)}
      >
        -
      </button>
      <span className="counter__value" onClick={() => setCounter(0)}>
        {counter}
      </span>
      <button
        className="counter__button"
        onClick={() => setCounter(counter - 1)}
      >
        +
      </button>
    </div>
  );
};

// REACT APPROACH
// 0. make a layout
// 1. split on components
// 2. static version in react
// 3. declare state and props
// 4. write logic

export default Counter;
