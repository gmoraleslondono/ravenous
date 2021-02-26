import React from 'react';
// import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BusinessList />
      </div>
    );
  }
}

export default App;
