import React, { useState, createContext } from 'react';

const initialCount = 0

export const {Provider, Consumer} = createContext('张三');

export default function UseStateExample() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(initialCount)

  const name = '我是context'
  return (
    <Provider value={name}>
      <div>
        1. 通过解构数组的方式
      </div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <div>
        <p>2. useState也可以进行函数式更新, 如无返回值为undefined</p>
      </div>
      Num: {num}
      <button onClick={() => setNum(initialCount)}>Reset</button>
      <button onClick={() => setNum(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setNum(prevCount => prevCount - 1)}>-</button>
    </Provider>
  );
}
