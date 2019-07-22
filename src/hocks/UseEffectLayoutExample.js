import React, { useState, useEffect, useLayoutEffect } from "react";
import { Consumer } from './UseStateExample'

export function LayoutEffectDemo () {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    window.addEventListener('resize', e => {
      console.log('111', e)
      setWidth(e.currentTarget.innerWidth);
    })
    const title = document.querySelector("#title");
    const titleWidth = title.getBoundingClientRect().width;
    // console.log("useLayoutEffect");
    // if (width !== titleWidth) {
    //   setWidth(titleWidth);
    // }
  });
  useEffect(() => {
    // console.log("useEffect");
  });

  return (
    <div>
      <h1 id="title">hello</h1>
      <h2>{width}</h2>

      <Consumer>
        {
          (props) => {
            console.log('props', props)
            return (
              <div>12</div>
            )
          }
        }
      </Consumer>
    </div>
  );
}
