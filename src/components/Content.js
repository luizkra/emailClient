import React, { Component } from 'react';
import '../css/Content.css';
import store from '../lib/store';
class Content extends Component {
  constructor() {
    super();
    this.state = {
      mailViewer: [],
      current: -1
    }
    this.unreadEmail = this.unreadEmail.bind(this);
    this.moveTrash = this.moveTrash.bind(this);
    this.moveSpam = this.moveSpam.bind(this);
    store.subscribe(() => {
      this.setState({
        mailViewer: store.getState().mailViewer,
        trashMails: store.getState().trashMails,
        spanMails: store.getState().spanMails,
        current: store.getState().current
      })
    })
  }

  render() {
    let showContent = "";
    let ContendFull = (
      <div className="Content">
        {this.state.mailViewer.map((item, index) => 
          <div className="Wrapper-content"key={index}>
            <header className="Content-header">
              <div className="left-menu">
                <h5 className="Content-title">{item.subject}</h5>
              </div>
              <div className="rigth-menu">
                <i className="fas fa-circle icon-action" onClick={() => this.unreadEmail(this.state.current)}></i>
                <i className="far fa-trash-alt icon-action" onClick={() => this.moveTrash(this.state.current)}></i>
                <i className="fas fa-microchip icon-action" onClick={() => this.moveSpam(this.state.current)}></i>
              </div>
            </header>
            <div className="Content-container">
              <div className="Mail-header">
                <div className="Mail-from">{item.from}</div>
                <div className="Mail-date">{new Intl.DateTimeFormat('es-GB', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: '2-digit' 
                    }).format(new Date(item.date))}
                </div>
              </div>
              <div className="Mail-text">{item.body}
              </div>
            </div>
          </div>
        )}
      </div>
    );
    if (this.state.mailViewer.length > 0) {
      showContent = ContendFull
    }else{
      showContent = (
        <div className="Content-empty">
          <i className="far fa-envelope mail-icon"></i>
        </div>
      );
    }
    return (
      <div className="Content-first">
      {showContent}
      </div>
    );
  }

  moveSpam(current) {
    store.dispatch({
      type: "MOVE_TO_SPAM",
      current
    })
  }

  moveTrash(current) {
    store.dispatch({
      type: "MOVE_TO_TRASH",
      current
    })
  }

  unreadEmail(current) {
    store.dispatch({
      type: "ADD_TO_UNREAD",
      current
    })
  }
}

export default Content;