
const addToList = mail => {
  return {
    type: "ADD_TO_LIST",
    mail
  }
}

const addToViewer = (idMail, typeMail, viewList) => {
  return {
    type: "ADD_TO_VIEWER",
    idMail,
    typeMail,
    viewList
  }
}

const searchList = (text) => {
  return {
    type: "SEARCH",
    text
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

const chageView = (currentView, viewList) => {
  return {
    type: "CHANGE_VIEW",
    currentView,
    viewList
  }
}

const actionButons = (current, typeMail, mailViewer, viewList) => {
  return {
    type: typeMail,
    current,
    mailViewer,
    viewList
  }
}

export { addToList, addToViewer, showImbox, showTrash, showSpam, actionButons, chageView, searchList }
