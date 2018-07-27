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
      //const arrayAux =arrayGlobal.map((mail, index) => { (index == action.idMail)?(console.log(mail), mail.isReaded=true):(console.log('not found ', index,action.idMail)); return mail})
      return {
      	...state,
      	mailViewer: arrayGlobal.filter((mail, index) => {return index == action.idMail})
      }
    default:
      return state
  	}
}
export default createStore(reducer, { listMails: [],spanMails: [],trashMails: [], mailViewer: [] })