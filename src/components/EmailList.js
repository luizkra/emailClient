import React from 'react';
import PropTypes from 'prop-types';
import store from '../lib/store';
import '../scss/EmailList.scss';
import { addToViewer, showImbox, showTrash, showSpam } from '../lib/actionCreators';
import { connect } from 'react-redux';
import Selector from './Selector';

const EmailList = ({ listMails, addToViewer, current }) => {
    return (
      <div className="List-container">
        <header className="List-header">
          <div className="left-menu-list">
            <h3 className="List-title">Inbox <span className="badge">2</span></h3>
          </div>
          <div className="rigth-menu-list">
          <Selector/>
          </div>
        </header>
        <div className={(listMails.length < 1) ? 'text-center-flex' : 'content-list'}>
          {listMails.length < 1 &&
            <div className="text-center-flex">
              <h2 className="text-empty">  vacío</h2>
            </div>
          }
          {listMails.length > 0 &&
            <div className="List-custom">
              {listMails.map((item, index) =>
                <div className={(item.isReaded == true && current.idMail != index) ? 'item-custom' : (current.idMail === index && item.isReaded == true) ? 'item-custom active' : 'item-custom new'} key={index} onClick={() => addToViewer(index, 'spam')}>
                    <div className="col-user">
                      <div className="item-name">{item.from}</div>
                    <div className="item-description">{item.body}</div>
                    </div>
                    <div className="col-date">
                      <div className="item-date">{new Intl.DateTimeFormat('en-GB', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                      }).format(new Date(item.date))}</div>
                      <i className="fas fa-paperclip"></i>
                      </div>
                </div>
              )}
            </div>
          }
        </div>
      </div>
    );
  //}

  // addToViewer(idMail, typeMail) {
  //   store.dispatch(addToViewer(idMail, typeMail))
  // }
  // showImbox() {
  //   store.dispatch(showImbox())
  // }
  // showTrash() {
  //   store.dispatch(showTrash())
  // }
  // showSpam() {
  //   store.dispatch(showSpam())
  // }

}

const mapStateToProps = state => {
  console.log('​state lista', state);
  return {
    listMails: state.listMails,
    current: state.current,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToViewer(idMail, typeMail) {
        dispatch(addToViewer(idMail, typeMail))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EmailList);