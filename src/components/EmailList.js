import React from 'react';
import '../scss/EmailList.scss';
import { addToViewer, showImbox, showTrash, showSpam } from '../lib/actionCreators';
import { connect } from 'react-redux';
import Selector from './Selector';
import ListCustom from './ListCustom';

const EmailList = ({ listMails, currentView, inboxMails, trashMails, spanMails,  badge, current }) => {
    return (
      <div className="List-container">
        <header className="List-header">
          <div className="left-menu-list">
            <h3 className="List-title">Inbox <span className="badge">{badge}</span></h3>
          </div>
          <div className="rigth-menu-list">
            <Selector />
          </div>
        </header>
        {/* { currentView == 2 ? (listMails=trashMails) 
          : currentView == 3 ? (listMails=spanMails) 
          : (listMails=inboxMails)
        } */}
        <ListCustom dataMail={listMails} type={currentView} currentIdMail={current}/>
      </div>
    );
}

const mapStateToProps = state => {
  console.log('​state', state);
  return {
    listMails: state.listMails,
    spanMails: state.spanMails,
    trashMails: state.trashMails,
    inboxMails: state.inboxMails,
    current: state.current,
    currentView: state.currentView,
    badge: state.badge
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToViewer2(idMail, typeMail) {
        dispatch(addToViewer2(idMail, typeMail))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EmailList);