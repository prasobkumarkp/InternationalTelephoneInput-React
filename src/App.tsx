import * as React from 'react';
import './App.css';
import Iti from './Components/iti';
// import logo from './logo.svg';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <Iti />
      </div>
    );
  }
}

export default App;
