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
        <div className="item-custom">number 1</div>
        <div className="item-custom">number 2</div>
        <div className="item-custom">number 3</div>
        <div className="item-custom">number 4</div>
        </div>
      </div>
    );
  }
}
export default EmailList;