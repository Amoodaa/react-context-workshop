import React from 'react';
import './App.css';
import Page from './components/Page';
import Controls from './components/Controls';
import AuthContext from './AuthContext';

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
        <AuthContext.Provider value={{ logged, admin }}>
          <Page />
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
