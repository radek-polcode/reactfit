import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>ReactFit</h1>
        <p>Your personal fitness dashboard</p>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Dashboard name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})