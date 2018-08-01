import React, { Component } from 'react';
import './scss/App.scss';
import Content from './components/Content';
import EmailList from './components/EmailList';
import store from './lib/store';
import data from './data/mail-data.json';
import { addToList } from './lib/actionCreators';

class App extends Component {
  constructor() {
    super();
    this.addToList = this.addToList.bind(this);

    this.state = {
      mails: []
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      data.map((mails, index)=>{
        this.addToList(mails)
      })
    }, 9000);
  }

  render() {
    return (
      <div className="App-container">
        <div className="App-left-side">
          <EmailList />
        </div>
        <div className="App-right-side">
          <Content />
        </div>
      </div>
    );
  }
  addToList(mail) {
    store.dispatch(addToList(mail))
  }
}
export default App;