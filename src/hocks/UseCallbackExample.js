import React, { useCallback, useEffect, useState, useMemo } from 'react'

// useCallback和useMemo的参数跟useEffect一致，他们之间最大的区别有是useEffect会用于处理副作用，而前两个hooks不能。

// useMemo和useCallback都会在组件第一次渲染的时候执行，之后会在其依赖的变量发生改变时再次执行；并且这两个hooks都返回缓存的值，useMemo返回缓存的变量，useCallback返回缓存的函数。



export function UseCallback() {
  const [count, setCount] = useState(0)

  const doSomething = count => {
    console.log('doSomething', count)
  }

  const memoizedCallback = useCallback(
    () => {
      // 依赖项数组不会作为参数传给回调函数。虽然从概念上来说它表现为：所有回调函数中引用的值都应该出现在依赖项数组中。
      doSomething();
    },
    [],
  );

  

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(preCount => preCount + 1)}>Click</button>
      <button onClick={() => memoizedCallback}>Click memoizedCallback</button>
    </div>
  )
}

// useCallback
// 与effct类似，会返回缓存的函数
// 借助set无重复添加数据的原理如下：
const set = new Set();

export const Callback = () => {
  const [count, setCount] = useState(1);
  const [val, setVal] = useState('');

  // function作为props传递子组件，可以避免不必要的更新。防止每次render 都create new func
  const callback = useCallback(() => {
      console.log('count', count);
      return count
  }, [count]);

  set.add(callback);
  console.log('set', set)

  return <div>
      <h3>我是callback{callback()}</h3>
      <h4>{count}</h4>
      <h4>{set.size}</h4>
      <Child callback={callback}/>
      <div>
          <button onClick={() => setCount(count + 1)}>+</button>
          <input value={val} onChange={event => setVal(event.target.value)}/>
      </div>
  </div>;
}


// export function Parent() {
//   const [count, setCount] = useState(1);
//   const [val, setVal] = useState('');

//   const callback = useCallback(() => {
//       return count;
//   }, [count]);
//   return <div>
//       <h4>{count}</h4>
//       <Child callback={callback}/>
//       <div>
//           <button onClick={() => setCount(count + 1)}>+</button>
//           <input value={val} onChange={event => setVal(event.target.value)}/>
//       </div>
//   </div>;
// }

function Child({ callback }) {
  const [count, setCount] = useState(() => callback());
  useEffect(() => {
      setCount(callback());
      console.log(`调用了${count}`)
  }, [callback]);
  return (
    <div>
      {`我是child函数，set了${count}次`}
    </div>
  )
}


// useMemo
export function UseMemo () {
  const [count, setCount] = useState(1);
  const [val, setValue] = useState('');
  
  // 不依赖val，但val改变时候还是会进行昂贵的计算。
  function expensive() {
    console.log('compute - 没有useMemo');
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
      sum += i;
    }
    return sum;
  }
  
  // useMemo会返回缓存的变量，只有在count改变时会触发函数并return
  const memoExpensive = useMemo(() => {
    console.log('compute - memo');
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
        sum += 1;
    }
    return sum;
  }, [count]);


  return (
    <>
      {/* 这里可以看到 expensive 不依赖val，但是val改变还是会触发expensive */}
      <div>
          <h4>{count}-{val}-{expensive()}</h4>
          <h4>{count}-{val}-{memoExpensive}</h4>
          <div>
              <button onClick={() => setCount(count + 1)}>+c1</button>
              <input value={val} onChange={event => setValue(event.target.value)}/>
          </div>
      </div>
    </>
  )
}
