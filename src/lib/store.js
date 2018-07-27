import { createStore} from 'redux'
const reducer = (state, action) => {
	const arrayGlobal = state.listMails
	switch(action.type) {
    case 'ADD_TO_LIST':
    const arrayAux1 = arrayGlobal.concat(action.mail)
      return {
      	...state,
      	listMails: arrayAux1
      }
    case 'ADD_TO_VIEWER':
      return {
      	...state,
      	mailViewer: arrayGlobal.filter((mail, index) => {return index == action.idMail}),
      	listMails: arrayGlobal.map(
           (mail, i) => i === action.idMail ? {...mail, isReaded: true}: mail),
      	current: action.idMail
      }
    case 'ADD_TO_UNREAD':
      return {
      	...state,
      	listMails: arrayGlobal.map(
           (mail, i) => i === action.current ? {...mail, isReaded: false}: mail),
      	mailViewer: []
      }
    default:
      return state
  	}
}
export default createStore(reducer, { listMails: [],spanMails: [],trashMails: [], mailViewer: [], current: -1})