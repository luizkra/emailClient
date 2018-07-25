import React, { Component } from 'react';
import '../css/EmailList.css';
class EmailList extends Component {
  render() {
    return (
      <div className="List-container">
        <header className="List-header">
          <h1 className="List-title">Header</h1>
        </header>
        <div className="List-custom">
        <div className="item-custom">
          <div className="item-user"><div className="user-icon"></div> <div className="user-name">Google</div><div className="item-date">Jun 1</div></div>
          <div className="item-tittle">Amazon SESS Addres Verification Request</div>
          <div className="item-description">Lorem ipsum dolor amet consecutire dv </div>
        </div>
        <div className="item-custom">
          <div className="item-user"><div className="user-icon"></div> <div className="user-name">Amazon</div><div className="item-date">May 23</div></div>
          <div className="item-tittle">Amazon SESS Addres Verification Request</div>
          <div className="item-description">Lorem ipsum dolor amet consecutire dv </div>
        </div>
        <div className="item-custom">
          <div className="item-user"><div className="user-icon"></div> <div className="user-name">Microsoft</div><div className="item-date">Abr 7</div></div>
          <div className="item-tittle">Amazon SESS Addres Verification Request</div>
          <div className="item-description">Lorem ipsum dolor amet consecutire dv </div>
        </div>
        <div className="item-custom">
          <div className="item-user"><div className="user-icon"></div> <div className="user-name">Github</div><div className="item-date">Feb 11</div></div>
          <div className="item-tittle">Amazon SESS Addres Verification Request</div>
          <div className="item-description">Lorem ipsum dolor amet consecutire dv </div>
        </div>
        </div>
      </div>
    );
  }
}
export default EmailList;