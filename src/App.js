import React, { Component } from 'react';
import './scss/App.scss';
import Content from './components/Content';
import EmailList from './components/EmailList';
import store from './lib/store';
import data from './data/mail-data.json';
import { addToViewer, showImbox, showTrash, showSpam, addToList } from './lib/actionCreators';
import { connect } from 'react-redux';


class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      mails: []
    }
  }
  
  componentDidMount() {

    this.interval = setInterval(() => {
        data.map((mails)=>{
          this.props.addToList(mails)
        }) 
    }, 2000);
  }

  componentDidUpdate() {
  if(this.props.listMails.length === 4) {
    clearInterval( this.interval);
  }
    
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
  // addToList(mail) {
  //   store.dispatch(addToList(mail))
  // }
}
const mapStateToProps = state => {
  return {
    listMails: state.listMails,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToList(mail) {
      dispatch(addToList(mail))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);