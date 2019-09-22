import React, { Component } from 'react'

class ReactPuzzleConfirm extends Component {
  constructor(props) {
    super(props)
    this.minValue = 6
    this.maxValue = 36
    this.multiplier = 5
    this.randomValueCreator = () => {
      const min = Math.ceil(this.minValue)
      const max = Math.floor(this.maxValue)
      const randomIntegerInclusive =
        Math.floor(Math.random() * (max - min + 1)) + min

      return randomIntegerInclusive
    }
    this.state = {
      value: 0,
      state: 'Idle',
      randomValue: this.randomValueCreator(),
    }

    this.handleAttempt = this.handleAttempt.bind(this)
  }

  handleAttempt() {
    const { onSuccess, onFail } = this.props

    const { value, randomValue } = this.state
    if (value === randomValue) {
      this.setState({ status: 'Success' })
      setTimeout(() => onSuccess(), 1000)
    } else {
      this.setState({ status: 'Failed' })
      onFail()
    }
  }

  render() {
    const {
      onClose,
      title,
      sliderTitle,
      failMessage,
      successMessage,
      closeButtonLabel,
      refrefButtonLabel,
      disableRefreshIdleState,
    } = this.props

    const { status, value, randomValue } = this.state

    const isFailed = status === 'Failed'
    const statusMessage = isFailed ? failMessage : successMessage
    return (
      <div className='react-puzzle-confirm-modal'>
        <div className='react-puzzle-confirm'>
          <h1 className='react-puzzle-confirm-title'>{title}</h1>
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
                    left: `${value * this.multiplier}px`,
                    backgroundPositionX: -randomValue * this.multiplier - 1 / 2,
                  }}
                />
                <div
                  className='react-puzzle-confirm-puzzle-missing-piece missing-piece-placeholder'
                  style={{ left: `${randomValue * this.multiplier}px` }}
                />
              </div>
            </div>
            <input
              disabled={isFailed}
              type='range'
              className={isFailed ? 'react-puzzle-confirm-slider-disabled' : ''}
              onMouseUp={this.handleAttempt}
              onTouchEnd={this.handleAttempt}
              name='points'
              value={value}
              onChange={event => {
                event.persist()
                const selectedValue = event.target.value
                !isNaN(selectedValue) &&
                  this.setState({ value: parseInt(selectedValue) })
              }}
              min='0'
              max={this.maxValue}
            />
            <div className='react-puzzle-confirm-slider-note'>
              {sliderTitle}
            </div>
          </div>

          <div
            className={`react-puzzle-confirm-state ${
              isFailed ? 'react-puzzle-confirm-state--fail' : ''
            }`}
          >
            &nbsp; {status !== 'Idle' && statusMessage}
          </div>

          <div className='react-puzzle-confirm-button-group'>
            <button
              className='react-puzzle-confirm-button react-puzzle-confirm-button--secondary'
              onClick={onClose}
            >
              {closeButtonLabel}
            </button>
            <button
              className='react-puzzle-confirm-button'
              disabled={!isFailed && disableRefreshIdleState}
              onClick={() => {
                this.setState({
                  value: 0,
                  status: 'Idle',
                  randomValue: this.randomValueCreator(),
                })
              }}
            >
              {refrefButtonLabel}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

ReactPuzzleConfirm.defaultProps = {
  onSuccess: () => console.log('success'),
  onFail: () => console.log('fail'),
  onClose: () => console.log('close clicked'),
  title: 'Please fit the puzzle piece carefully',
  sliderTitle: 'Slide to complete the puzzle',
  failMessage: 'Error',
  successMessage: 'Success',
  closeButtonLabel: 'Close',
  refrefButtonLabel: 'Refresh',
  disableRefreshIdleState: true,
}

export default ReactPuzzleConfirm
