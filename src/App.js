import React, { Component } from 'react';
import './css/App.css';
import Content from './components/Content';
import EmailList from './components/EmailList';
import data from './data/mail-data.json';
class App extends Component {

  render() {
    return (
      <div className="App-container">
        <div className="App-left-side">
          <EmailList items={data} />
        </div>
        <div className="App-right-side">
          <Content />
        </div>
      </div>
    );
  }
}
export default App;