import { createStore} from 'redux'

const reducer = (state, action) => {
	
	switch(action.type) {
    case 'ADD_TO_LIST':
      return {
      	...state,
      	listMails: state.listMails.concat(action.mail)
      }
    case 'ADD_TO_VIEWER':
      return {
      	...state,
      	mailViewer: state.listMails.map((mail, index) => {mail.index == action.idMail, console.log(index)})
      }
    default:
      return state
  	}
}
export default createStore(reducer, { listMails: [], mailViewer: [] })