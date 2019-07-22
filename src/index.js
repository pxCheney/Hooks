import React from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import ReactDOM from "react-dom";
import App from './App'
import UseStateExample from './hocks/UseStateExample'
import UseEffectExample, { EffectUpdate, LifeCyles, EffectDemo } from './hocks/UseEffectExample'
import { LayoutEffectDemo }from './hocks/UseEffectLayoutExample'
import { UseCallback, Callback, UseMemo, Parent }from './hocks/UseCallbackExample'
import { UseReducerExample } from './hocks/UseReducerExample'

import Hocks from './hocks'

// import "./styles.css";


const BasicRoute = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/hocks' component={Hocks} />
      <Route path='/hocks/UseStateExample' component={UseStateExample} />
      <Route path='/hocks/UseEffectExample' component={EffectDemo} />
      <Route path='/hocks/UseEffectLayoutExample' component={LayoutEffectDemo} />
      <Route path='/hocks/UseCallbackExample' component={Callback} />
      <Route path='/hocks/UseReducerExample' component={UseReducerExample} />
    </Switch>
  </Router>
)

const rootElement = document.getElementById("root");
ReactDOM.render(<BasicRoute />, rootElement);
