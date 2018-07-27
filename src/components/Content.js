import React, { Component } from 'react';
import '../css/Content.css';
import store from '../lib/store';
class Content extends Component {
  constructor() {
    super();

    this.state = {
      mailViewer: []
    }
    store.subscribe(() => {
      this.setState({
        mailViewer: store.getState().mailViewer
      })
    })
  }
  render() {
    return (
      <div className="Content"> 
      {this.state.mailViewer.map((item) => 
        <div>
        <header className="Content-header">
          <h5 className="Content-title">{item.subject}</h5>
        </header>
        <div className="Content-container">
          <div className="Mail-header">
            <div className="Mail-from">{item.from}</div>
            <div className="Mail-date">{item.date}</div>
          </div>
          <div className="Mail-text">{item.body}
          </div>
        </div>
        </div>
        )}
      </div>
    );
  }
}
export default Content;