import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contacts from "./Component/Contacts/Contacts";
import AddContact from "./Component/Contacts/AddContact";
import Header from "./Component/layout/Header";
import About from "./Component/pages/About";
import { Provider } from "./context";
import "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

class App extends Component {
  render() {
    return (
      <Provider>
        <React.Fragment>
          <CssBaseline />
          <Router>
            <div className="App">
              <Header title="Navigation Bar" />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Contacts} />
                  <Route exact path="/about" component={About} />
                </Switch>
              </div>
              <AddContact/>
            </div>
          </Router>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
