import React, { useState, useEffect } from 'react';

const CountA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CountA update : count: ${count}`);
  });
  return <div>{count}</div>;
});

const CountB = ({ obj }) => {
  useEffect(() => {
    console.log(`CountB update : count: ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

const areEqual = (pre, next) => {
  if (pre.obj.count === next.obj.count) {
    return true;
  }
  return false;
};

const MemoizedCountB = React.memo(CountB, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <CountA count={count} />
        <h2>Count A</h2>
        <button onClick={() => setCount(count)}>A Button</button>
      </div>

      <div>
        <MemoizedCountB obj={obj} />
        <h2>Count B</h2>
        <button onClick={() => setObj({ count: obj.count })}>B Button</button>
      </div>
    </div>
  );
};

export default OptimizeTest;
