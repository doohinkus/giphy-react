import React, { Component } from 'react';
import './App.css';
import ApiCall from './components/ApiCall.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ApiCall />
      </div>
    );
  }
}

export default App;
