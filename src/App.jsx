import React, { Component } from 'react'
import TooltipComponent from './components/TooltipComponent'
import './styles/index.scss'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <h1 className="m-all-100 p-top-100">Twitter Api</h1> */}
        <TooltipComponent classname={`tooltip__right`}/>
        {/* <TooltipComponent classname={`tooltip__bottom`}/>
        <TooltipComponent classname={`tooltip__top`}/>
        <TooltipComponent classname={`tooltip__left`}/> */}
      </div>
    )
  }
}
