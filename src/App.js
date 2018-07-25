import React, { Component } from 'react';
import './css/App.css';
import Content from './components/Content';
import EmailList from './components/EmailList';
class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-left-side">
          <EmailList />
        </div>
        <div className="App-right-side">
          <Content />
        </div>
      </div>
    );
  }
}
export default App;