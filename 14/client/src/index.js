import { Notyf } from "notyf";
import Notepad from "./js/notepad-model";
import { renderNotesArray } from "./js/view";
import * as handlers from "./js/handlers";
import getRefs from "./js/utils/refs";
import "./sass/main.scss";
import "notyf/notyf.min.css";

export const notyf = new Notyf({
  types: [
    {
      type: "warning",
      backgroundColor: "orange",
      icon: {
        className: "notyf__icon--error",
        tagName: "i",
        text: "warning",
      },
    },
  ],
});
const refs = getRefs();
export const notepad = new Notepad();

const getInitialNotes = async () => {
  try {
    const initialNotes = await notepad.get();
    renderNotesArray(initialNotes);
  } catch (error) {
    notyf.error(`${error}`);
  }
};

getInitialNotes();

// Open Editor
refs.openEditorBtn.addEventListener("click", handlers.handleOpenEditorBtnClick);

// Submit note
refs.noteEditorForm.addEventListener("submit", handlers.handleEditorSubmit);

// Edit note
// refs.listRef.addEventListener("click", handlers.handleNoteEditBtnClick);

// Delete note
refs.listRef.addEventListener("click", handlers.removeListItem);

// Filter notes by query
refs.searchForm.addEventListener("input", handlers.handleSearchFormInput);
