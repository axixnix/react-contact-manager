import React, { Component } from 'react'
import Contact from './components/Contact'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header branding='Contact Manager' />
        <Contact name='John Doe' email='jdoe@yahoo.com' phone='555-555-555' />
        <Contact name='Karen Doe' email='kdoe@yahoo.com' phone='333-555-555' />
      </div>
    )
  }
}

export default App
