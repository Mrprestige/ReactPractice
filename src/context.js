import React, { Component } from "react";
import uuid from "uuid";
import { stat } from "fs";

const Context = React.createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "DELETE_CONTACT":
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         )
//       };
//     default:
//       return state;
//   }
// };
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    contacts: [
      {
        id: uuid(),
        name: "Mohsen",
        email: "Mrprestige@gmail.com",
        phone: 9194682527
      },
      {
        id: uuid(),
        name: "Mohammad",
        email: "Mrpres@gmail.com",
        phone: 919468
      },
      {
        id: uuid(),
        name: "Moh3n",
        email: "Mr@gmail.com",
        phone: 9194
      }
    ],
    // dispatch: action => this.setState(state => reducer(state, action))
    dispatch: action => this.setState(state => reducer(state, action))
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
