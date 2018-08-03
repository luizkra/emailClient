import React, { Component } from 'react';
import './scss/App.scss';
import Content from './components/Content';
import EmailList from './components/EmailList';
import data from './data/mail-data.json';
import { addToList } from './lib/actionCreators';
import { connect } from 'react-redux';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mails: [],
      menuOpen: false,
      loadin: false
    }
  }

  componentDidMount() {

    this.interval = setInterval(() => {
        data.map((mails)=>{
          this.props.addToList(mails)
        })
    },30000);
    this.loadin = setTimeout(() => {
      this.setState({loadin: true})
    },1000);
    this.menu = setTimeout(() => {
      this.setState({menuOpen: true})
    },2500);
  }

  componentDidUpdate() {
    if (this.props.inboxMails.length === 50) {
      clearInterval(this.interval);
    }

  }

  render() {
    
  if(!this.state.loadin) {
    return <div id="app" className="loader"></div>; 
  }
    return (
      
      <div className="App-container">
      {this.props.menuOpen}
        <div className={this.state.menuOpen == true ? 'App-left-side open' : 'App-left-side'}>
          <EmailList />
        </div>
        <div className="App-right-side">
          <Content />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    listMails: state.listMails,
    inboxMails: state.inboxMails,
    menuOpen: state.menuOpen,
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
