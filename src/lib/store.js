import { createStore } from "redux";
import dataDefault from "./../data/mail-data.json";

const reducer = (state, action) => {
  const updateList = currentView => {
    return currentView == 2
      ? state.trashMails
      : currentView == 3
        ? state.spanMails
        : state.inboxMails;
  };

  switch (action.type) {
    case "SEARCH": //Fix: Reicia el store de la lista de mensajes, quedo en Beta :(
      return {
        ...state,
        inboxMails: state.inboxMails.filter(
          "from"
            ? a => a["from"] === action.text
            : a => Object.keys(a).some(k => a[k] === action.text)
        )
      };
    case "MOVE_TO_INBOX":
      if (action.viewList === "Spam") {
        const moveTo = {
          ...state,
          inboxMails: state.inboxMails.concat(action.mailViewer),
          spanMails: state.spanMails.filter(
            (mail, index) => index !== action.current
          ),
          mailViewer: []
        };
        return moveTo;
      }

      if (action.viewList === "Trash") {
        const moveTo = {
          ...state,
          inboxMails: state.inboxMails.concat(action.mailViewer),
          trashMails: state.trashMails.filter(
            (mail, index) => index !== action.current
          ),
          mailViewer: []
        };
        return moveTo;
      }
    case "ADD_TO_LIST":
      return {
        ...state,
        inboxMails: state.inboxMails.concat(action.mail),
        badge: state.inboxMails.reduce(
          (pre, cur) => (cur.isReaded == false ? ++pre : pre),
          1
        )
      };
    case "ADD_TO_VIEWER":
      return {
        ...state,
        mailViewer: state.inboxMails.filter((mail, index) => {
          return index === action.idMail;
        }),
        inboxMails: state.inboxMails.map(
          (mail, i) =>
            i === action.idMail ? { ...mail, isReaded: true } : mail
        ),
        current: { idMail: action.idMail, typeMail: action.typeMail }
      };
    case "MOVE_TO_TRASH":
      if (action.viewList !== "Spam") {
        const moveTo = {
          ...state,
          trashMails: state.trashMails.concat(action.mailViewer),
          inboxMails: state.inboxMails.filter(
            (mail, index) => index !== action.current
          ),
          mailViewer: []
        };
        return moveTo;
      }

      if (action.viewList === "Spam") {
        const moveTo = {
          ...state,
          trashMails: state.trashMails.concat(action.mailViewer),
          spanMails: state.spanMails.filter(
            (mail, index) => index !== action.current
          ),
          mailViewer: []
        };
        return moveTo;
      }
    case "MOVE_TO_SPAM":
      if (action.viewList !== "Trash") {
        const moveTo = {
          ...state,
          spanMails: state.spanMails.concat(action.mailViewer),
          inboxMails: state.inboxMails.filter(
            (mail, index) => index !== action.current
          ),
          mailViewer: []
        };
        return moveTo;
      }

      if (action.viewList === "Trash") {
        const moveTo = {
          ...state,
          spanMails: state.spanMails.concat(action.mailViewer),
          trashMails: state.trashMails.filter(
            (mail, index) => index !== action.current
          ),
          mailViewer: []
        };
        return moveTo;
      }
    case "CHANGE_VIEW":
      return {
        ...state,
        viewList: action.viewList,
        mailViewer: []
      };
    default:
      return state;
  }
};
export default createStore(reducer, {
  viewList: null,
  listMails: [],
  inboxMails: dataDefault,
  spanMails: [],
  trashMails: [],
  mailViewer: [],
  current: [],
  currentView: 1,
  badge: 2
});
