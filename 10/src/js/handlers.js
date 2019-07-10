import shortid from "shortid";

import { notepad } from "../index";
import { PRIORITY_TYPES } from "./utils/constants";
import { addListItem, renderNoteList, getRefs } from "./view";

const refs = getRefs();

// Add new note

const isFormEmpty = (input, textarea) =>
  !input.value.trim().length || !textarea.value.trim().length;

export const createNewNote = event => {
  event.preventDefault();
  const [input, textarea] = [...event.target.elements];

  if (isFormEmpty(input, textarea)) {
    alert("Необходимо заполнить все поля!");
    //event.currentTarget.reset();
    return;
  }

  const note = {
    id: shortid.generate(),
    title: input.value,
    body: textarea.value,
    priority: PRIORITY_TYPES.LOW,
  };

  notepad.saveNote(note);
  addListItem(refs.listRef, note);
  event.currentTarget.reset();
};

// Delete note

export const removeListItem = ({ target }) => {
  if (target.parentNode.dataset.action !== "delete-note") return;
  const listItem = target.closest("li");
  const id = listItem.dataset.id;
  notepad.deleteNote(id);
  listItem.remove();
};

// Filter notes

export const filterNotes = ({ target }) => {
  const value = target.value;
  const filteredNotes = notepad.filterNotesByQuery(value);
  refs.listRef.innerHTML = "";
  renderNoteList(refs.listRef, filteredNotes);
};
