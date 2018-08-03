
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
  console.log('​actionButons -> current, typeMail', current, typeMail);
//   MOVE_TO_SPAM
// MOVE_TO_INBOX
	return {
      type: typeMail,
      current
    }
}

export { addToList, addToViewer, showImbox, showTrash, showSpam, actionButons, chageView }