# React Puzzle Confirm

[![npm version](https://badge.fury.io/js/react-puzzle-confirm.svg)](https://badge.fury.io/js/react-puzzle-confirm)
![npm download](https://img.shields.io/npm/dt/react-puzzle-confirm.svg)

Posted on [React Status](https://react.statuscode.com/issues/157) 🔥🔥🔥


# dependencies

```json
 "react": "^16.9.0",
 "react-dom": "^16.9.0"
```

<img width="500" src="https://github.com/ozluy/react-puzzle-confirm/blob/master/react-puzzle.gif" />

```
<ReactPuzzleConfirm />
```

<a target="_blank" rel="noopener noreferrer" href="http://ozluy.github.io/projects/react-puzzle-confirm"> Demo </a>

<a target="_blank" rel="noopener noreferrer" href="https://codesandbox.io/s/react-puzzle-confirm-fsdcf"> Code Sandbox </a>

# install

Install as a node module

`npm i react-puzzle-confirm -S`

# usage

```jsx
import React from 'react'
import ReactPuzzleConfirm from 'react-puzzle-confirm'
import 'react-puzzle-confirm/react-puzzle-confirm.css'

const Demo = () => (
  <ReactPuzzleConfirm
     onClose={() => setShowModal(false)}
     onSuccess={() => setShowModal(false)}
     onFail={() => console.log("failed")}
     title="Please fit the puzzle piece carefully"
     sliderTitle="Slide to complete the puzzle"
     failMessage="Failed"
     successMessage="Success"
     closeButtonLabel="Close"
     refrefButtonLabel="Refresh"
     disableRefreshIdleState={true}
  />
)

export default Demo
```

# props

#### onSuccess `function`

default `() => console.log('success')`

function for successful attempt

#### onFail `function`

default `() => console.log('fail')`

function for failed attempt

#### onClose `function`

default `() => console.log('close clicked')`

function for close button click

### title `string`
default `"Please fit the puzzle piece carefully"`

###    sliderTitle `string`
default `"Slide to complete the puzzle"`

###    failMessage `string`
default`"Error"`

###    successMessage `string`
default`"Success"`

###    closeButtonLabel `string`
default`"Close"`

###    refrefButtonLabel `string`
default `"Refresh"`

###    disableRefreshIdleState `boolean`
default `true`


 important note
===

For older versions of React  15.0.0 and above (^15.0.0) please install following version with tag `react-v15.0.0` or `1.0.16`
 
 `npm install react-puzzle-confirm@react-v15.0.0 -S`

 or 

`npm install react-puzzle-confirm@1.0.16 -S`



<a href="https://paypal.me/ozluy"> <img src="https://github.com/ozluy/react-stripe-script-loader/blob/master/buy-me-a-coffee-with-paypal.png" /></a>

Thanks

Yusuf Özlü
