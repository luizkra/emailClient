import React, { Component } from 'react';
import '../css/Content.css';
class Content extends Component {
  render() {
    return (
      <div className="Content">
        <header className="Content-header">
          <h5 className="Content-title">Amazon SES Address Verification Requets</h5>
        </header>
        <div className="Content-container">
          <div className="Mail-header">
            <div className="Mail-from">Amazon.com<span>noreply@amazon.com </span> </div>
            <div className="Mail-date">Thursday May 26, 11:09 AM</div>
          </div>
          <div className="Mail-text">Lorem ipsu rs efrer erregerg ergrgregergreger ergergerg ergerge ergege wefwef
            weewf wergerger ergerg ergreger regrg ergerg ergerg ergerg ergjshyevf khebfyewv wekfhbewfe wgwrg 
            wwewregte regert erhytrh rthrt rrherg erhgthrthr trhtetheth
          </div>
        </div>
      </div>
    );
  }
}
export default Content;