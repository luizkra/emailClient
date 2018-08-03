import { createStore} from 'redux'
const reducer = (state, action) => {
  const listMailsGlobal = state.listMails
  const updateList = (currentView)=>{
    return currentView == 2 ? state.trashMails: currentView == 3 ? state.spanMails : state.inboxMails
  }
  //state.listMails = state.currentView == 2 ? state.trashMails: state.currentView == 3 ? state.spanMails : state.inboxMails;
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
        badge: state.currentView == 1 ? --state.badge: state.badge
      }
    case 'ADD_TO_UNREAD':
      return {
      	...state,
      	listMails: state.listMails.map(
           (mail, i) => i === action.current ? {...mail, isReaded: false}: mail),
        mailViewer: [],
        inboxMails: state.inboxMails = state.currentView == 1 ? state.listMails: state.inboxMails,
        trashMails: state.trashMails = state.currentView == 2 ? state.listMails: state.trashMails,
        spanMails: state.spanMails = state.currentView == 3 ? state.listMails: state.spanMails,
        badge: state.currentView == 1 ? state.inboxMails.reduce((pre, cur) => (cur.isReaded === false) ? ++pre : pre, 1): state.badge
      }
    case 'MOVE_TO_TRASH':
      return {
        ...state,
        trashMails: state.trashMails.concat(state.listMails.filter((mail, index) => {return index === action.current})),
        listMails: listMails.filter((mail, index) => {return index !== action.current}),
        inboxMails: state.inboxMails = state.currentView == 1 ? state.listMails: state.inboxMails,
        spanMails: state.spanMails = state.currentView == 3 ? state.listMails: state.spanMails,
        mailViewer: []
      }
    case 'MOVE_TO_SPAM':
      return {
        ...state,
        spanMails: state.spanMails.concat(state.listMails.filter((mail, index) => {return index === action.current})),
        listMails: state.listMails.filter((mail, index) => {return index !== action.current}),
        inboxMails: state.inboxMails = state.currentView == 1 ? state.listMails: state.inboxMails,
        trashMails: state.trashMails = state.currentView == 2 ? state.listMails: state.trashMails,
        mailViewer: []
      }
    case 'CHANGE_VIEW': 
      return {
        ...state,
        currentView: state.currentView = action.currentView,
        listMails: state.currentView == 2 ? state.trashMails : state.currentView == 3 ? state.trashMails : state.inboxMails,
        mailViewer: []
      }
    case 'SHOW_TRASH':
      return {
        ...state,
        currentView: state.currentView = 1
      }
    case 'SHOW_SPAM':
      return {
      	...state,
      	currentView: state.currentView = 2
      }
    default:
      return state
  	}
}
export default createStore(reducer, { listMails: [], inboxMails: [], spanMails: [],trashMails: [], mailViewer: [], current: [], currentView: 1, badge: 0})