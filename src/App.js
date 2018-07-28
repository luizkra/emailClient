import React, { Component } from 'react';
import './css/App.css';
import Content from './components/Content';
import EmailList from './components/EmailList';
import store from './lib/store';
import data from './data/mail-data.json';
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
        //var newMails = this.state.mails.concat(mails);
        //this.setState({ mails: newMails })
        this.addToList(mails)
      })
    }, 5000);
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
    store.dispatch({
      type: "ADD_TO_LIST",
      mail
    })
  }
}
export default App;