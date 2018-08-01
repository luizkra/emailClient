import React from 'react';
import '../scss/Content.scss';
import store from '../lib/store';
import { moveSpam, moveTrash, unreadEmail } from '../lib/actionCreators';
import { connect } from 'react-redux';

const Content = ({ mailViewer, unreadEmail }) => {

    return (
      <div className="Content-first">
       { mailViewer.length < 1 ? 
       <div className="Content-empty">
           <i className="far fa-envelope mail-icon"></i>
        </div> :
        <div className="Content">
          {mailViewer.map((item, index) =>
            <div className="Wrapper-content" key={index}>
              <header className="Content-header">
                <div className="left-menu">
                  <h5 className="Content-title">{item.subject}</h5>
                </div>
                <div className="rigth-menu">
                  <div className="">
                    <i className="fas fa-circle icon-action" onClick={() => unreadEmail(current.idMail, typeMail)}></i>
                  </div>
                  <div className="">
                    <i className="far fa-trash-alt icon-action" onClick={() => this.unreadEmail(current.idMail, typeMail)}></i>
                  </div>
                  <div className="">
                    <i className="fas fa-microchip icon-action" onClick={() => this.unreadEmail(current.idMail, typeMail)}></i>
                  </div>
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
       }
      </div>
    );
  //}

  // moveSpam(current) {
  //   store.dispatch(moveSpam(current))
  // }

  // moveTrash(current) {
  //   store.dispatch(moveTrash(current))
  // }

  // unreadEmail(current) {
  //   store.dispatch(unreadEmail(current))
  // }
}
const mapStateToProps = state => {
  return {
    mailViewer: state.mailViewer,
    current: state.current,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    unreadEmail(current, typeMail) {
        dispatch(unreadEmail(current, typeMail))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);