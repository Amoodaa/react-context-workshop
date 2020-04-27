import React from 'react';
import './App.css';
import Page from './components/Page';
import Controls from './components/Controls';

class App extends React.Component {
  state = {
    logged: false,
    admin: false,
  };

  toggle = (key) => () =>
    this.setState(({ [key]: prevValue }) => ({ [key]: !prevValue }));

  render() {
    const { logged, admin } = this.state;
    return (
      <div className="App">
        <Controls logged={logged} admin={admin} toggle={this.toggle} />
        <Page admin={admin} />
      </div>
    );
  }
}

export default App;
