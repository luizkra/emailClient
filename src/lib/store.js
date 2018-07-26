import { createStore} from 'redux'

const reducer = (state, action) => {
	
	switch(action.type) {
    case 'ADD_TO_LIST':
      return {
      	...state,
      	listMails: state.listMails.concat(action.mail)
      }
    default:
      return state
  	}
}
export default createStore(reducer, { listMails: [] })