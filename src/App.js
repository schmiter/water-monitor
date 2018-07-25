import React, { Component } from 'react';
import CustomMapComponent from './MapContainer.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomMapComponent/>
      </div>
    );
  }
}

export default App;
