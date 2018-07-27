import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../lib/store';
import '../css/EmailList.css';
class EmailList extends Component {
  constructor() {
    super();

    this.addToViewer = this.addToViewer.bind(this);

    this.state = {
      listMails: [],
      trashMails: [],
      spanMails: []
    }

    store.subscribe(() => {
      this.setState({
        listMails: store.getState().listMails
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
    return (
      <div className="List-container">
        <header className="List-header">
          <div className="left-menu-list">
          <h3 className="List-title">{title}</h3>
          </div>
          <div className="rigth-menu-list">
            <i className="fas fa-inbox icon-mail-list active"> Inbox</i>
            <i className="far fa-trash-alt icon-mail-list"> Trash</i>
            <i className="fas fa-microchip icon-mail-list"> Spam</i>
          </div>
        </header>
        {this.state.listMails.length < 1 &&
          <div className="text-center-flex">
            <h2 className="text-empty"> Bandeja de entrada vacía</h2>
          </div>
        }
        {this.state.listMails.length > 0 &&
        <div className="List-custom">
          {this.state.listMails.map((item, index) => 
            <div className={item.isReaded ? 'item-custom' : 'item-custom new'} key={index} onClick={() => this.addToViewer(index)}>
              <div className="item-wrapper">
                <div className="item-user">
                  <div className="user-icon"/>
                  <div className="user-name">{item.from} {index}</div>
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
  }

  addToViewer(idMail) {
    store.dispatch({
      type: "ADD_TO_VIEWER",
      idMail
    })
  }

}
export default EmailList;