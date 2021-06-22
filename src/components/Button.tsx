import { useState } from 'react';

export function Button() {
  const [counter, setCounter] = useState(0)

  function increment() {
    const newCounter = counter + 1;

    setCounter(newCounter);
    console.log(counter);
    console.log(newCounter);
  }

  return (
    <button onClick={increment}>
      {counter}
    </button>
  )
}