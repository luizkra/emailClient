import { createStore} from 'redux'
const reducer = (state, action) => {
	const listMailsGlobal = state.listMails
	const trashMailsGlobal = state.trashMails
	const spanMailsGlobal = state.spanMails
	switch(action.type) {
    case 'ADD_TO_LIST':
      return {
      	...state,
      	listMails: listMailsGlobal.concat(action.mail)
      }
    case 'ADD_TO_VIEWER':
      return {
      	...state,
      	mailViewer: listMailsGlobal.filter((mail, index) => {return index == action.idMail}),
      	listMails: listMailsGlobal.map(
           (mail, i) => i === action.idMail ? {...mail, isReaded: true}: mail),
      	current: action.idMail
      }
    case 'ADD_TO_UNREAD':
      return {
      	...state,
      	listMails: listMailsGlobal.map(
           (mail, i) => i === action.current ? {...mail, isReaded: false}: mail),
      	mailViewer: []
      }
    case 'MOVE_TO_TRASH':
      return {
      	...state,
      	trashMails: state.trashMails.concat(state.listMails.filter((mail, index) => {return index == action.current})),
      	listMails: listMailsGlobal.filter((mail, index) => {return index != action.current}),
      	mailViewer: []
      }
    default:
      return state
  	}
}
export default createStore(reducer, { listMails: [],spanMails: [],trashMails: [], mailViewer: [], current: -1})