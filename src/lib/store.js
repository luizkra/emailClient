import { createStore} from 'redux'
const reducer = (state, action) => {
  const dataName = [ 'inboxMails', 'inboxMails', 'trashMails', 'spanMails']
  const updateList = (currentView)=>{
    return currentView == 2 ? state.trashMails: currentView == 3 ? state.spanMails : state.inboxMails
  }
	switch(action.type) {
    case 'ADD_TO_LIST':
      return {
      	...state,
        inboxMails: state.inboxMails.concat(action.mail),
        listMails: state.currentView == 1 ? state.listMails.concat(action.mail): state.listMails,
        trashMails: state.trashMails = state.currentView == 2 ? state.listMails: state.trashMails,
        badge: state.inboxMails.reduce((pre, cur) => (cur.isReaded == false) ? ++pre : pre, 1)
      }
    case 'ADD_TO_VIEWER':
      return {
        ...state,
      	mailViewer: state.listMails.filter((mail, index) => {return index === action.idMail}),
      	listMails: state.listMails.map(
           (mail, i) => i === action.idMail ? {...mail, isReaded: true}: mail),
        current: {idMail: action.idMail, typeMail:action.typeMail},
        inboxMails: state.currentView == 1 ? state.listMails: state.inboxMails,
        trashMails: state.currentView == 2 ? state.listMails: state.trashMails,
        badge: (state.currentView == 1 && state.badge >= 1) ? --state.badge: state.badge
      }
    case 'MOVE_TO_TRASH':
      console.log('​reducer -> MOVE_TO_TRASH', action);
      return {
        ...state,
        trashMails: state.trashMails.concat(state.listMails[action.current]),
        listMails: state.listMails.filter((mail, index) => index !== action.current),
        inboxMails: state.listMails.filter((mail, index) => index !== action.current),
        mailViewer: []
      }
    case 'MOVE_TO_SPAM':
      console.log('​reducer -> MOVE_TO_SPAM', action);
      return {
        ...state,
        spanMails: state.spanMails.concat(state.listMails[action.current]),
        listMails: state.listMails.filter((mail, index) => index !== action.current),
        inboxMails: state.listMails.filter((mail, index) => index !== action.current),
        mailViewer: []
      }
    case 'CHANGE_VIEW':
    console.log('​reducer -> CHANGE_VIEW', action.currentView);
      console.log('​reducer -> ​reducer', dataName[action.currentView]);
      return {
        ...state,
        listMails: state[dataName[action.currentView]],
        mailViewer: []
      }
    default:
      return state
  	}
}
export default createStore(reducer, {listMails: [], inboxMails: [], spanMails: [],trashMails: [], mailViewer: [], current: [], currentView: 1, badge: 0})