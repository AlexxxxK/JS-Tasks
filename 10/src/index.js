import Notepad from "./js/notepad-model";
import initialNotes from "./assets/notes.json";
import { renderNoteList, getRefs } from "./js/view";
import { createNewNote, removeListItem, filterNotes } from "./js/handlers";

import "./sass/main.scss";

export const notepad = new Notepad(initialNotes);
const refs = getRefs();

renderNoteList(refs.listRef, notepad.notes);

// Add new note

refs.noteEditorForm.addEventListener("submit", createNewNote);

// Delete note

refs.listRef.addEventListener("click", removeListItem);

// Filter notes

refs.searchForm.addEventListener("input", filterNotes);
