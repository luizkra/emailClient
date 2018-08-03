import React from 'react';
import '../scss/EmailList.scss';
import { connect } from 'react-redux';
import Selector from './Selector';
import ListCustom from './ListCustom';
import SearchCustom from './SearchCustom';

const EmailList = ({ listMails, currentView, viewList, badge, current, inboxMails, trashMails, spanMails }) => {
  var listMaster
  switch (viewList) {
    case 'Trash':
      listMaster = trashMails
      break;
    case 'Spam':
      listMaster = spanMails
      break;
    default:
      listMaster = inboxMails
  }


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
      <SearchCustom />
      <ListCustom dataMail={listMaster} type={currentView} currentIdMail={current} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    listMails: state.listMails,
    spanMails: state.spanMails,
    trashMails: state.trashMails,
    inboxMails: state.inboxMails,
    current: state.current,
    currentView: state.currentView,
    badge: state.badge,
    viewList: state.viewList,
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
