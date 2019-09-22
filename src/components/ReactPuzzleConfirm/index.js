import React, { useState } from 'react'

function ReactPuzzleConfirm({
  onSuccess = () => console.log('success'),
  onFail = () => console.log('fail'),
  onClose = () => console.log('close clicked'),
}) {
  const minValue = 6
  const maxValue = 36
  const multiplier = 5
  const randomValueCreator = () => {
    const min = Math.ceil(minValue)
    const max = Math.floor(maxValue)
    const randomIntegerInclusive =
      Math.floor(Math.random() * (max - min + 1)) + min

    return randomIntegerInclusive
  }
  const [value, setValue] = useState(0)
  const [status, setStatus] = useState('Idle')
  const [randomValue, setRandomValue] = useState(randomValueCreator())

  const handleAttempt = () => {
    if (value === randomValue) {
      setStatus('Success')
      setTimeout(() => onSuccess(), 1000)
    } else {
      setStatus('Failed')
      onFail()
    }
  }

  const isFailed = status === 'Failed'

  return (
    <div className='react-puzzle-confirm-modal'>
      <div className='react-puzzle-confirm'>
        <h1 className='react-puzzle-confirm-title'>
          Please fit the puzzle piece carefully
        </h1>
        <div className='react-puzzle-confirm-body'>
          <div className='react-puzzle-confirm-puzzle-wrapper'>
            <div className='react-puzzle-confirm-puzzle'>
              <div
                className={`react-puzzle-confirm-flash ${
                  status === 'Success' ? 'flash--me' : ''
                }`}
              />
              <div
                className='react-puzzle-confirm-puzzle-missing-piece'
                style={{
                  left: `${value * multiplier}px`,
                  backgroundPositionX: -randomValue * multiplier - 1 / 2,
                }}
              />
              <div
                className='react-puzzle-confirm-puzzle-missing-piece missing-piece-placeholder'
                style={{ left: `${randomValue * multiplier}px` }}
              />
            </div>
          </div>
          <input
            disabled={isFailed}
            type='range'
            className={isFailed ? 'react-puzzle-confirm-slider-disabled' : ''}
            onMouseUp={handleAttempt}
            onTouchEnd={handleAttempt}
            name='points'
            value={value}
            onChange={event => {
              event.persist()
              const selectedValue = event.target.value
              !isNaN(selectedValue) && setValue(parseInt(selectedValue))
            }}
            min='0'
            max={maxValue}
          />
          <div className='react-puzzle-confirm-slider-note'>
            Slide to complete the puzzle
          </div>
        </div>

        <div
          className={`react-puzzle-confirm-state ${
            isFailed ? 'react-puzzle-confirm-state--fail' : ''
          }`}
        >
          &nbsp; {status !== 'Idle' && status}
        </div>

        <div className='react-puzzle-confirm-button-group'>
          <button
            className='react-puzzle-confirm-button react-puzzle-confirm-button--secondary'
            onClick={() => onClose}
          >
            close
          </button>
          <button
            className='react-puzzle-confirm-button'
            disabled={!isFailed}
            onClick={() => {
              setRandomValue(randomValueCreator())
              setValue(0)
              setStatus('Idle')
            }}
          >
            refresh
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReactPuzzleConfirm
