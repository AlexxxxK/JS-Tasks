import shortid from "shortid";
import noteTemplate from "../templates/noteTemplate.hbs";
import Notepad from "./notepad-model";
import { PRIORITY_TYPES } from "./utils/constants";
import getRefs from "./utils/refs";
const refs = getRefs();

const saveToLocalStorage = notes => {
  setTimeout(() => {
    const notesStr = JSON.stringify(notes);
    window.localStorage.setItem("notepad.initial-notes", notesStr);
  }, 500);
};

const createNewNote = (title, body) => ({
  id: shortid.generate(),
  title,
  body,
  priority: PRIORITY_TYPES.LOW,
});

const addNewNote = note => {
  let newNote = { ...note };
  newNote.priority = Notepad.getPriority(newNote.priority);
  const notesListMarkup = noteTemplate(newNote).trim();
  refs.listRef.insertAdjacentHTML("beforeend", notesListMarkup);
};

const rendernotesArray = notesArray => {
  const notesListMarkup = notesArray.map(note => {
    let newNote = { ...note };
    newNote.priority = Notepad.getPriority(newNote.priority);
    return noteTemplate(newNote).trim();
  });
  refs.listRef.innerHTML = notesListMarkup;
};

export { rendernotesArray, addNewNote, createNewNote, saveToLocalStorage };
