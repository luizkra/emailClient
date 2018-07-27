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
        mailViewer: store.getState().mailViewer,
        trashMails: store.getState().trashMails,
        spanMails: store.getState().spanMails
      })
    })
  }
  render() {
    return (
      <ContentMail verifyContent={this.state.mailViewer}/>
    );
  }

  addSpam(idMail) {
    store.dispatch({
      type: "ADD_TO_SPAM",
      idMail
    })
  }
  addTrash(idMail) {
    store.dispatch({
      type: "ADD_TO_TRASH",
      idMail
    })
  }
  viewEmail(idMail) {
    store.dispatch({
      type: "VIEW_EMAIL",
      idMail
    })
  }
}

function ContentMail(props) {
    const lenghtArray = props.verifyContent;
    if (lenghtArray.length > 0) {
      return <ContendFull arrayContent={lenghtArray}/>;
    }
    return <EmptyContend />;
  }

  function EmptyContend() {
    return (
          <div className="Content-empty">
              <i className="far fa-envelope mail-icon"></i>
          </div>
    );
  }
function ContendFull(props) {
  const arrayContent_ = props.arrayContent;
  return (
    <div className="Content">
      {arrayContent_.map((item, index) => 
        <div className="Wrapper-content"key={index}>
        <header className="Content-header">
          <div className="left-menu">
          <h5 className="Content-title">{item.subject}</h5>
          </div>
          <div className="rigth-menu">
            <i className="fas fa-circle icon-action"></i>
            <i className="far fa-trash-alt icon-action"></i>
            <i className="fas fa-microchip icon-action"></i>
          </div>
        </header>
        <div className="Content-container">
          <div className="Mail-header">
            <div className="Mail-from">{item.from}</div>
            <div className="Mail-date">{new Intl.DateTimeFormat('es-GB', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: '2-digit' 
                }).format(new Date(item.date))}</div>
          </div>
          <div className="Mail-text">{item.body}
          </div>
        </div>
        </div>
        )}
      </div>
  );
}
export default Content;