import { Notyf } from "notyf";
import Notepad from "./js/notepad-model";
import { renderNotesArray } from "./js/view";
import * as handlers from "./js/handlers";
import getRefs from "./js/utils/refs";
import "./sass/main.scss";
import "notyf/notyf.min.css";

export const notyf = new Notyf();
const refs = getRefs();

export const notepad = new Notepad();
notepad
  .get()
  .then(notes => renderNotesArray(notes))
  .catch(error => notyf.error(error));

// Open Editor
refs.openEditorBtn.addEventListener("click", handlers.handleOpenEditorBtnClick);

// Submit note
refs.noteEditorForm.addEventListener("submit", handlers.handleEditorSubmit);

//Delete note
refs.listRef.addEventListener("click", handlers.removeListItem);

//Filter notes by query
refs.searchForm.addEventListener("input", handlers.handleSearchFormInput);
