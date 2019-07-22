import React from 'react'
import { Link } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Link to='/hocks' >Go to Hocks</Link>
      </div>
    )
  }
}

export default App
