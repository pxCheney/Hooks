import React, { useState, useEffect } from 'react';

export default function UseEffectExample() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    
  });

  return (
    <div>
      <div>
        <p>1. effect可以传入第二个参数，作为依赖项。参数类型为Array。</p>
        <p>2. effect每次运行函数都会重新执行，在重新执行之前，都会清除前一个effect。我们将effect理解为一张快照。这与我们之前的class 模式是完全不同的心智模型</p>
        <p>3. effect 可以返回一个函数，用来清除一些可能会引起内存泄漏的副作用。每次运行的时候都会执行清除操作。</p>
        <p>4. componentDidMount、componentDidUpdate 不同的是，在浏览器完成布局与绘制之后，传给 useEffect 的函数会延迟调用。这使得它适用于许多常见的副作用场景，比如如设置订阅和事件处理等情况，因此不应在函数中执行阻塞浏览器更新屏幕的操作。
然而，并非所有 effect 都可以被延迟执行。例如，在浏览器执行下一次绘制前，用户可见的 DOM 变更就必须同步执行，这样用户才不会感觉到视觉上的不一致。（概念上类似于被动监听事件和主动监听事件的区别。）React 为此提供了一个额外的 useLayoutEffect Hook 来处理这类 effect。它和 useEffect 的结构相同，区别只是调用时机不同。</p>
      </div>


      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export function EffectUpdate() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tId = setInterval(() => {
      console.log(count);
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(tId);
    };
  }, [count]);

  return <h1>{count}</h1>;
}


export function LifeCyles({ id }) {
  const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   console.log("componentDidMount or componentDidUpdate");
  //   return () => {
  //     console.log("componentWillUnmount");
  //   };
  // });

  // useEffect(() => {
  //   console.log("仅在componentDidMount的时候执行");
  // }, []);

  useEffect(() => {
    console.log(id);
    console.log("在componentDidMount的时候执行, 或者loaded改变时");
    setLoaded(true);
  }, [loaded, id]);

  return <div>{loaded ? 111 : 222}</div>;
}

let timer;
export function EffectDemo() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("componentDidMount" + count);
  }, []);

  useEffect(() => {
    timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    // return () => {
    //   console.log("componentWillUnmount");
    //   clearInterval(timer);
    // };
  }, []);
  return (
    <div>
      Count: {count}
      <button
        onClick={() => {
          console.log('timer');
          clearInterval(timer);
        }}
      >
        clear
      </button>
    </div>
  );
}
