import * as React from 'react'
import * as ReactDom from 'react-dom'
import { PaintPen } from '@paint-pen/lib'

const renderApp = () => {
  //@ts-ignore
  ReactDom.render(
    React.createElement(PaintPen, null),
    document.getElementById('root') as HTMLElement,
  )
}

// @ts-ignore
if (window.cordova) {
  document.addEventListener('deviceReady', renderApp)
} else {
  renderApp()
}
