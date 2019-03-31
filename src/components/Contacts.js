import React, { Component } from 'react'

class Contacts extends Component {
  constructor () {
    super()
    this.state = {
      contacts: [{id: 1,name: 'John Doe',email: 'jdoe@gmail.com',phone: '555-555-555'}, {id: 2,name: 'Jane Williams',email: 'jwill@gmail.com',phone: '333-333-333'}, {id: 3,name: 'John Henry',email: 'jhen@gmail.com',phone: '555-555-333'}]
    }
  }

  render () {
    return (
      <div>
      </div>
    )
  }
}

export default Contacts
