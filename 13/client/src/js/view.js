import noteTemplate from "../templates/noteTemplate.hbs";
import Notepad from "./notepad-model";
import { PRIORITY_TYPES } from "./utils/constants";
import getRefs from "./utils/refs";
const refs = getRefs();

const createNewNote = (title, body) => ({
  title,
  body,
  priority: PRIORITY_TYPES.LOW,
});

const CreateNotesListItem = note => {
  let newNote = { ...note };
  newNote.priority = Notepad.getPriority(newNote.priority);
  const notesListMarkup = noteTemplate(newNote).trim();
  refs.listRef.insertAdjacentHTML("beforeend", notesListMarkup);
};

const renderNotesArray = notesArray => {
  const notesListMarkup = notesArray.map(note => {
    let newNote = { ...note };
    newNote.priority = Notepad.getPriority(newNote.priority);
    return noteTemplate(newNote).trim();
  });
  refs.listRef.innerHTML = notesListMarkup;
};

export { renderNotesArray, CreateNotesListItem, createNewNote };
