import Notepad from "./js/notepad-model";
import initialNotes from "./assets/notes.json";
import { rendernotesArray, saveToLocalStorage } from "./js/view";
import handleOpenEditorBtnClick from "./js/handlers/OpenEditorBtnClick";
import handleEditorSubmit from "./js/handlers/createNewNote";
import removeListItem from "./js/handlers/removeListItem";
import handleSearchFormInput from "./js/handlers/searchFormInput";
import getRefs from "./js/utils/refs";
import "./sass/main.scss";
import "notyf/notyf.min.css";

export const notepad = new Notepad(initialNotes);
const refs = getRefs();

if (window.localStorage.getItem("notepad.initial-notes")) {
  const initNotes = window.localStorage.getItem("notepad.initial-notes");
  const initMarkup = JSON.parse(initNotes);
  rendernotesArray(initMarkup);
} else {
  saveToLocalStorage(notepad.notes);
  rendernotesArray(notepad.notes);
}

// Open Editor
refs.openEditorBtn.addEventListener("click", handleOpenEditorBtnClick);

// Add new note
refs.noteEditorForm.addEventListener("submit", handleEditorSubmit);

//Delete note
refs.listRef.addEventListener("click", removeListItem);

//Filter notes by query
refs.searchForm.addEventListener("input", handleSearchFormInput);
