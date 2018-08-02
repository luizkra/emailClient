import data from './../data/mail-data.json';

const addToList = mail => {
  console.log('​data', data);
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

const moveSpam = current => {
	return {
      type: "MOVE_TO_SPAM",
      current
    }
}

const moveTrash = current => {
	return {
      type: "MOVE_TO_TRASH",
      current
    }
}

const actionButons = (current, typeMail) => {
  let typeCorrect;
  typeMail==='trash' ? typeCorrect= 'MOVE_TO_TRASH' : typeMail==='spam' ? typeCorrect= 'MOVE_TO_SPAM' : typeCorrect= 'ADD_TO_UNREAD';

	return {
      type: typeCorrect,
      current
    }
}

export { addToList, addToViewer, showImbox, showTrash, showSpam, moveSpam, moveTrash, actionButons }