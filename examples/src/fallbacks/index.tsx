import React from 'react'
import { ReactSVG } from 'react-svg'

class ClassFallback extends React.Component {
  render() {
    return <img alt="nyan" src="nyan.jpg" />
  }
}
const FunctionFallback = () => <img alt="doge" src="doge.png" />
const StringFallback = 'div'

export default () => (
  <React.Fragment>
    <ReactSVG fallback={ClassFallback} src="notfound.svg" />
    <ReactSVG fallback={FunctionFallback} src="notfound.svg" />
    <ReactSVG fallback={StringFallback} src="notfound.svg" />
  </React.Fragment>
)
