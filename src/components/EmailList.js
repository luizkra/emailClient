import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../lib/store';
import '../css/EmailList.scss';
class EmailList extends Component {
  constructor() {
    super();

    this.addToViewer = this.addToViewer.bind(this);
    this.showImbox = this.showImbox.bind(this);
    this.showTrash = this.showTrash.bind(this);
    this.showSpam = this.showSpam.bind(this);

    this.state = {
      listMails: [],
      trashMails: [],
      spanMails: [],
      current: [],
      currentView: -1
    }

    store.subscribe(() => {
      this.setState({
        listMails: store.getState().listMails,
        trashMails: store.getState().trashMails,
        spanMails: store.getState().spanMails,
        current: store.getState().current,
        currentView: store.getState().currentView
      })
    })
  }

  static propTypes = {
    title: PropTypes.string,
    items: PropTypes.array
  };

  viewEmail = (index) => {
    console.log('Show index ', index)
  }

  render() {
    const { title, items } = this.props;
    let showList = "";
    let ContentImbox = (
      <div className={(this.state.listMails.length < 1) ? 'text-center-flex' : 'content-list'}>
      {this.state.listMails.length < 1 &&
          <div className="text-center-flex">
            <h2 className="text-empty"> Bandeja de entrada vacía</h2>
          </div>
        }
        {this.state.listMails.length > 0 &&
        <div className="List-custom">
          {this.state.listMails.map((item, index) => 
            <div className={(item.isReaded == true && this.state.current.idMail != index) ? 'item-custom' : (this.state.current.idMail === index && item.isReaded == true) ? 'item-custom active' : 'item-custom new'} key={index} onClick={() => this.addToViewer(index, 'imbox')}>
              <div className="item-wrapper">
                <div className="item-user">
                  <div className="user-icon"/>
                  <div className="user-name">{item.from}</div>
                  <div className="item-date">{new Intl.DateTimeFormat('en-GB', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: '2-digit' 
                  }).format(new Date(item.date))}</div>
                </div>
                <div className="item-tittle">{item.subject}</div>
                <div className="item-description">{item.body}</div>
              </div>
            </div>
          )}
        </div>
        }
      </div>
      );
    let ContentTrash = (
      <div className={(this.state.trashMails.length < 1) ? 'text-center-flex' : 'content-list'}>
      {this.state.trashMails.length < 1 &&
          <div className="text-center-flex">
            <h2 className="text-empty"> Correo basura vacío</h2>
          </div>
        }
        {this.state.trashMails.length > 0 &&
        <div className="List-custom">
          {this.state.trashMails.map((item, index) => 
            <div className={(item.isReaded == true && this.state.current.idMail != index) ? 'item-custom' : (this.state.current.idMail === index && item.isReaded == true) ? 'item-custom active' : 'item-custom new'} key={index} onClick={() => this.addToViewer(index, 'trash')}>
              <div className="item-wrapper">
                <div className="item-user">
                  <div className="user-icon"/>
                  <div className="user-name">{item.from}</div>
                  <div className="item-date">{new Intl.DateTimeFormat('en-GB', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: '2-digit' 
                  }).format(new Date(item.date))}</div>
                </div>
                <div className="item-tittle">{item.subject}</div>
                <div className="item-description">{item.body}</div>
              </div>
            </div>
          )}
        </div>
        }
      </div>
      );
    let ContentSpam = (
      <div className={(this.state.spanMails.length < 1) ? 'text-center-flex' : 'content-list'}>
      {this.state.spanMails.length < 1 &&
          <div className="text-center-flex">
            <h2 className="text-empty"> Spam vacío</h2>
          </div>
        }
        {this.state.spanMails.length > 0 &&
        <div className="List-custom">
          {this.state.spanMails.map((item, index) => 
            <div className={(item.isReaded == true && this.state.current.idMail != index) ? 'item-custom' : (this.state.current.idMail === index && item.isReaded == true) ? 'item-custom active' : 'item-custom new'} key={index} onClick={() => this.addToViewer(index, 'spam')}>
              <div className="item-wrapper">
                <div className="item-user">
                  <div className="user-icon"/>
                  <div className="user-name">{item.from}</div>
                  <div className="item-date">{new Intl.DateTimeFormat('en-GB', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: '2-digit' 
                  }).format(new Date(item.date))}</div>
                </div>
                <div className="item-tittle">{item.subject}</div>
                <div className="item-description">{item.body}</div>
              </div>
            </div>
          )}
        </div>
        }
      </div>
      );
    let imboxClass = ["content-icon"];
    let trashClass = ["content-icon"];
    let spamClass = ["content-icon"];
    (this.state.currentView == 1)? (showList = ContentTrash, trashClass.push('active')) : (this.state.currentView == 2)?(showList = ContentSpam, spamClass.push('active')):(showList = ContentImbox, imboxClass.push('active'));

    return (
      <div className="List-container">
        <header className="List-header">
          <div className="left-menu-list">
          <h3 className="List-title">{title}</h3>
          </div>
          <div className="rigth-menu-list">
          <div className={imboxClass.join(' ')}>
            <i className="fas fa-inbox icon-mail-list" onClick={() => this.showImbox()}> Inbox</i>
          </div>
          <div className={trashClass.join(' ')}>
            <i className="far fa-trash-alt icon-mail-list" onClick={() => this.showTrash()}> Trash</i>
          </div>
          <div className={spamClass.join(' ')}>
            <i className="fas fa-microchip icon-mail-list" onClick={() => this.showSpam()}> Spam</i>
          </div>
          </div>
        </header>
        {showList}
      </div>
    );
  }

  addToViewer(idMail, typeMail) {
    store.dispatch({
      type: "ADD_TO_VIEWER",
      idMail,
      typeMail
    })
  }
  showImbox() {
    store.dispatch({
      type: "SHOW_IMBOX",
    })
  }
  showTrash() {
    store.dispatch({
      type: "SHOW_TRASH",
    })
  }
  showSpam() {
    store.dispatch({
      type: "SHOW_SPAM",
    })
  }

}
export default EmailList;