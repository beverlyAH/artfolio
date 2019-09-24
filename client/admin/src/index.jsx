import React from 'react'
import ReactDOM from 'react-dom'
import Sidebar from './components/Sidebar.jsx'

class Admin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <Sidebar />
    )
  }
}

ReactDOM.render(<Admin />, document.getElementById('admin'))