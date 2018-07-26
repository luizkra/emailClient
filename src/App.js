import React, { Component } from 'react';
import './css/App.css';
import Content from './components/Content';
import EmailList from './components/EmailList';
import data from './data/mail-data.json';
class App extends Component {
  constructor(){
    super();
    this.state = {
      mails: []
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      data.map((mails, index)=>{
        console.log(mails[index], index)
        var newMails = this.state.mails.concat(mails);
        this.setState({ mails: newMails })
      })
    }, 9000);
  }

  render() {
    return (
      <div className="App-container">
        <div className="App-left-side">
          <EmailList items={this.state.mails} />
        </div>
        <div className="App-right-side">
          <Content />
        </div>
      </div>
    );
  }
}
export default App;