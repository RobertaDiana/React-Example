import React, { useState, useMemo } from 'react';

function Example5() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const result = useMemo(() => {
    console.log('calculating...');
    return a + b;
  }, [a, b]);

  return (
    <div>
      <h1>UseMemo Example</h1>
      <p>
        <label>A:</label>
        <input type="number" value={a} onChange={e => setA(parseInt(e.target.value))} />
      </p>
      <p>
        <label>B:</label>
        <input type="number" value={b} onChange={e => setB(parseInt(e.target.value))} />
      </p>
      <p>Result: {result}</p>
    </div>
  );
}

export default Example5;
