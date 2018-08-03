
const addToList = mail => {
	return {
      type: "ADD_TO_LIST",
      mail
    }
}

const addToViewer = (idMail, typeMail) => {
	return {
      type: "ADD_TO_VIEWER",
      idMail,
      typeMail
    }
}

const showImbox = mail => {
	return {
      type: "SHOW_IMBOX",
      mail
    }
}

const showTrash = mail => {
	return {
      type: "SHOW_TRASH",
      mail
    }
}

const showSpam = mail => {
	return {
      type: "SHOW_SPAM",
      mail
    }
}

const chageView = (currentView) => {
	return {
      type: "CHANGE_VIEW",
      currentView
    }
}

const actionButons = (current, typeMail) => {
  let typeCorrect;
  typeMail===2 ? typeCorrect= 'MOVE_TO_TRASH' : typeMail===2 ? typeCorrect= 'MOVE_TO_SPAM' : typeCorrect= 'ADD_TO_UNREAD';
	return {
      type: typeCorrect,
      current
    }
}

export { addToList, addToViewer, showImbox, showTrash, showSpam, actionButons, chageView }