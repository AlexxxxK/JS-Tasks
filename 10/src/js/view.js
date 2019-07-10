import { ICON_TYPES, NOTE_ACTIONS } from "./utils/constants";
import Notepad from "./notepad-model";

export const createNoteContent = (title, body) => {
  const noteContent = document.createElement("div");
  noteContent.classList.add("note__content");

  const noteTitle = document.createElement("h2");
  noteTitle.classList.add("note__title");
  noteTitle.textContent = title;

  const noteBody = document.createElement("p");
  noteBody.classList.add("note__body");
  noteBody.textContent = body;

  noteContent.append(noteTitle, noteBody);

  return noteContent;
};

const createButton = (dataAction, btnTextContent) => {
  const btn = document.createElement("button");
  btn.classList.add("action");
  btn.dataset.action = dataAction;

  const buttonText = document.createElement("i");
  buttonText.classList.add("material-icons", "action__icon");
  buttonText.textContent = btnTextContent;

  btn.appendChild(buttonText);

  return btn;
};

export const createNoteFooter = priority => {
  const noteFooter = document.createElement("footer");
  noteFooter.classList.add("note__footer");

  const prioritySection = document.createElement("section");
  prioritySection.classList.add("note__section");

  const decrPriorityBtn = createButton(NOTE_ACTIONS.DECREASE_PRIORITY, ICON_TYPES.ARROW_DOWN);

  const incrPriorityBtn = createButton(NOTE_ACTIONS.INCREASE_PRIORITY, ICON_TYPES.ARROW_UP);

  const notePriority = document.createElement("span");
  notePriority.classList.add("note__priority");
  notePriority.textContent = `Priority: ${Notepad.getPriority(priority)}`;

  prioritySection.append(decrPriorityBtn, incrPriorityBtn, notePriority);

  const editNoteSection = prioritySection.cloneNode(false);
  const editNoteBtn = createButton(NOTE_ACTIONS.EDIT, ICON_TYPES.EDIT);
  const delNoteBtn = createButton(NOTE_ACTIONS.DELETE, ICON_TYPES.DELETE);

  editNoteSection.append(editNoteBtn, delNoteBtn);
  noteFooter.append(prioritySection, editNoteSection);

  return noteFooter;
};

const createListItem = ({ id, title, body, priority }) => {
  const noteListItem = document.createElement("li");
  noteListItem.classList.add("note-list__item");
  noteListItem.dataset.id = id;

  const note = document.createElement("div");
  note.classList.add("note");

  note.append(createNoteContent(title, body), createNoteFooter(priority));
  noteListItem.appendChild(note);

  return noteListItem;
};

export const renderNoteList = (listRef, notes) =>
  listRef.append(...notes.map(note => createListItem(note)));

export const addListItem = (listRef, note) => listRef.appendChild(createListItem(note));

export const getRefs = () => ({
  listRef: document.querySelector(".note-list"),
  noteEditorForm: document.querySelector(".note-editor"),
  searchForm: document.querySelector(".search-form"),
});
