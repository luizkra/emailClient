import React, { Component } from 'react';
import '../css/Content.css';
class Content extends Component {
  render() {
    return (
      <div className="Content">
        <header className="Content-header">
          <h1 className="Content-title">Amazon</h1>
        </header>
        <div className="Content-container">
         <h2>Mails</h2>
        </div>
      </div>
    );
  }
}
export default Content;