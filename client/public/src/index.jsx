import React from 'react'
import ReactDOM from 'react-dom'

class Public extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>PUBLIC VIEW</div>
    )
  }
}

ReactDOM.render(<Public />, document.getElementById('public'))