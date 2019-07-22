import React from 'react'
import { Link } from 'react-router-dom'

function Hocks() {
  return (
    <div>
      <h1>Hello， Let's start learning hocksr</h1>
      <div><Link to='/hocks/UseStateExample'>Go to useState</Link></div>
      <div><Link to='/hocks/UseEffectExample'>Go to useEffect</Link></div>
      <div><Link to='/hocks/UseEffectLayoutExample'>Go to useEffectLayout</Link></div>
      <div><Link to='/hocks/UseCallbackExample'>Go to useCallback</Link></div>
      <div><Link to='/hocks/UseReducerExample'>Go to useReducer</Link></div>
    </div>
  );
}

export default Hocks
