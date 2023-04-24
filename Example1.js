import React, { useState } from 'react';

function Example1() {
  const [steps, setSteps] = useState(0);

  function increment() {
    setSteps(prevState => prevState + 1);
  }

  return (
    <div>
      Today you've taken {steps} steps!
      <br />
      <button onClick={increment}>
        I took another step
      </button>
    </div>
  );
}

export default Example1;