import React, { Component } from "react";

const context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-555"
      },
      {
        id: 2,
        name: "Jane Williams",
        email: "jwill@gmail.com",
        phone: "333-333-333"
      },
      {
        id: 3,
        name: "John Henry",
        email: "jhen@gmail.com",
        phone: "555-555-333"
      }
    ]
  };

  render() {
    return (
      <context.Provider value={this.state}>
        {this.props.children}
      </context.Provider>
    );
  }
}

export const Consumer = context.Consumer;
