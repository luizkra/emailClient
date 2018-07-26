import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../lib/store';
import '../css/EmailList.css';
class EmailList extends Component {
  constructor() {
    super();

    this.state = {
      listMails: []
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
          <h1 className="List-title">{title}</h1>
        </header>
        <div className="List-custom">
        {this.state.listMails.map((item, index) => 
          <div className={item.isReaded ? 'item-custom' : 'item-custom new'} key={index} onClick={() => this.viewEmail(index)}>
            <div className="item-wrapper">
              <div className="item-user">
                <div className="user-icon"/>
                <div className="user-name">{item.title}</div>
                <div className="item-date">{new Intl.DateTimeFormat('en-GB', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: '2-digit' 
                }).format(item.title)}</div>
              </div>
              <div className="item-tittle">{item.subject}</div>
              <div className="item-description">{item.body}</div>
            </div>
          </div>
          )}
        </div>
      </div>
    );
  }

}
export default EmailList;