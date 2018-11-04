import * as React from 'react';
import './App.css';
import Iti from './Components/iti';
import logo from './logo.svg';

interface IAppState {
  phoneNumber: string;
}
class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props)
    this.state = { phoneNumber: "" }
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Explore International Telephone Input in React</h1>
        </header>
        <div className="App-intro">
          <Iti showSearchBox={false} defaultCountryCode={"1"} optionSelectedCallback={phoneNumber => this.setState(() => ({ phoneNumber }))} />
          <input type="text" className="phone-number" defaultValue={this.state.phoneNumber} placeholder="Display box" readOnly={true} />
        </div>
      </div>
    );
  }
}

export default App;
