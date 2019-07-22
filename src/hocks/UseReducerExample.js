import React, { useReducer } from 'react'

const initialState = {count: 0};

function reducer(state, action) {
  console.log('reducer', action, state)
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1, text: 'reducer'};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}
      
function Counter({ initialState }) {
  const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state)
    return (
      <>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'increment', num: 666})}>+</button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      </>
  );
}

export const UseReducerExample = () => {
  return (
    <Counter initialState={initialState} />
  )
}
