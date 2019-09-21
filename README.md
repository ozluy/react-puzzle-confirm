# React Puzzle Confirm

[![npm version](https://badge.fury.io/js/react-puzzle-confirm.svg)](https://badge.fury.io/js/react-puzzle-confirm)

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

# install

Install as a node module

`npm i react-puzzle-confirm -S`

# usage

```jsx
import React from 'react'
import ReactPuzzleConfirm from 'react-puzzle-confirm'
import 'react-puzzle-confirm/eact-puzzle-confirm.css'

const Demo = () => (
  <ReactPuzzleConfirm
    onSuccess={() => console.log('success')}
    onFail={() => console.log('fail')}
    onClose={() => () => console.log('close clicked')}
  />
)

export default Demo
```

===

#### onSuccess `string`

`onSuccess = () => console.log('success')`
function for successful attempt

#### onFail `string`

`onFail = () => console.log('fail')`
function for failed attempt

#### onClose `ReactElement`

`onClose = () => console.log('close clicked')`
function Close button click

 <!--- 
 important note
===

For older versions of React ^15.0.0 please install following version with tag `react-version-15`

 `npm install react-puzzle-confirm@react-version-15 -S`

-->

<a href="https://paypal.me/ozluy"> <img src="https://github.com/ozluy/react-sripe-script-loader/blob/master/buy-me-a-coffee-with-paypal.png" /></a>

Thanks

Yusuf Özlü
