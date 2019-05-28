import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers";

import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/Counters";
import Footer from "./components/Footer";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      count: 0
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Counter with Redux</h1>
        </header>
        <div className="App-intro">
          <Provider store={store}>
            <Counters />
            <Footer />
          </Provider>
        </div>
      </div>
    );
  }
}

export default App;
