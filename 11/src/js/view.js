import shortid from "shortid";
import noteTemplate from "../templates/noteTemplate.hbs";
import { PRIORITY_TYPES } from "./utils/constants";
import getRefs from "./utils/refs";
const refs = getRefs();

const createNewNote = (title, body) => ({
  id: shortid.generate(),
  title,
  body,
  priority: PRIORITY_TYPES.LOW
});

const addNewNote = note => {
  const notesListMarkup = noteTemplate(note);
  refs.listRef.insertAdjacentHTML("beforeend", notesListMarkup);
};

const rendernotesArray = notesArray => {
  const notesListMarkup = notesArray.map(note => noteTemplate(note));
  refs.listRef.insertAdjacentHTML("beforeend", notesListMarkup);
};

export { rendernotesArray, addNewNote, createNewNote };
