import React, { Component } from 'react'
import './App.scss'
import './components/ReactPuzzleConfirm/index.scss'
import ReactPuzzleConfirm from './components/ReactPuzzleConfirm/index.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      popupVisible: false,
    }
  }

  render() {
    const { popupVisible } = this.state
    return (
      <div className='App'>
        <header className='App-header'>
          {popupVisible && (
            <ReactPuzzleConfirm
              onSuccess={() => this.setState({ popupVisible: false })}
              onClose={() => this.setState({ popupVisible: false })}
            />
          )}
          <button onClick={() => this.setState({ popupVisible: true })}>
            open puzzle confirm
          </button>
        </header>
      </div>
    )
  }
}

export default App
