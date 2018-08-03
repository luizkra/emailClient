import React from 'react';
import '../scss/Content.scss';
import { moveSpam, moveTrash, actionButons } from '../lib/actionCreators';
import { connect } from 'react-redux';
import ButtonCustom from './ButtonCustom';

const Content = ({ mailViewer, actionButons, current }) => {

    return (
      <div className="Content-first">
        {mailViewer.length < 1 ?
          <div className="Content-empty">
            {/* <i className="far fa-envelope mail-icon"></i> */}
          </div> :
          <div className="contentBody">
            <header>
              <div className="left-menu-header">
                <div className="">
                  <ButtonCustom
                    customClass={'deleteMailButton'}
                    textBtn='Delete'
                    click={() => actionButons(current.idMail, 'MOVE_TO_TRASH')}
                  />
                </div>
                <div className="">
                  <ButtonCustom
                    customClass={'spamMailButton'}
                    textBtn='Spam'
                    click={() => actionButons(current.idMail, 'MOVE_TO_SPAM')}
                  />
                </div>
              </div>
              <div className="rigth-menu-header">
                <div className="">
                  <ButtonCustom customClass={'unreadMailButton'} textBtn='Mark as unread' click={() => actionButons(current.idMail, 'MOVE_TO_INBOX')} />
                </div>
              </div>
            </header>
            <div className="Content">
              {mailViewer.map((item, index) =>
                <div className="Wrapper-content" key={index}>
                  <div className="Content-header">
                    <div className="left-menu">
                      <h5 className="Content-title">{item.from}</h5>
                    </div>
                  </div>
                  <div className="content-section">
                    <div className="left-tags">
                      <div className="tags">Tags</div>
                    </div>
                    <div className="rigth-tags">
                      <div className="item-tags">{item.tag}</div>
                    </div>
                  </div>
                  <div className="Content-container">
                    <div className="Wrapper-header">
                      <div className="Mail-text">{item.body}</div>
                    </div>
                    <div className="content-footer">
                      <div className="icon-footer">
                        <i className="fas fa-paperclip"></i>
                      </div>
                      <div className="replay-footer">
                        Replay
                        </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
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
    actionButons(current, typeMail) {
        dispatch(actionButons(current, typeMail))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);