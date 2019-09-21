import React, { useState } from 'react'
import './App.scss'
import './components/ReactPuzzleConfirm/index.scss'
import ReactPuzzleConfirm from './components/ReactPuzzleConfirm/index.js'

const App = () => {
  const [popupVisible, setPopupVisible] = useState(false)

  return (
    <div className='App'>
      <header className='App-header'>
        {popupVisible && <ReactPuzzleConfirm onSuccess={()=> setPopupVisible(false)} />}
        <button onClick={() => setPopupVisible(true)}>open puzzle confirm</button>
      </header>
    </div>
  )
}

export default App
