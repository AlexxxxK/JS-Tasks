import MicroModal from "micromodal";
import { notepad } from "../index";
import { createNewNote, CreateNotesListItem, renderNotesArray } from "./view";
import { NOTIFICATION_MESSAGES, NOTE_ACTIONS } from "./utils/constants";
import { notyf } from "../index";
import getRefs from "./utils/refs";

const refs = getRefs();

// Open editor

export const handleOpenEditorBtnClick = ({ target }) => {
  if (target.parentNode.dataset.action === "open-editor") {
    MicroModal.show("note-editor-modal");
  }
};

// Note submit

const isFormEmpty = (input, textarea) =>
  !input.value.trim().length || !textarea.value.trim().length;

export const handleEditorSubmit = event => {
  event.preventDefault();
  const [input, textarea] = [...event.target.elements];

  if (isFormEmpty(input, textarea)) {
    notyf.error(NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY);
    //event.currentTarget.reset();
    return;
  }

  notepad
    .saveNote(createNewNote(input.value, textarea.value))
    .then(addedNote => {
      CreateNotesListItem(addedNote);
      notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
    })
    .catch(error => notyf.error(error));
  event.currentTarget.reset();
  MicroModal.close("note-editor-modal");
};

// Remove note

export const removeListItem = ({ target }) => {
  if (target.parentNode.dataset.action !== NOTE_ACTIONS.DELETE) return;
  const listItem = target.closest("li");
  const id = listItem.dataset.id;
  notepad
    .deleteNote(id)
    .then(() => {
      listItem.remove();
      notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
    })
    .catch(error => notyf.error(error));
};

// Search notes

export const handleSearchFormInput = ({ target }) => {
  const value = target.value;
  const filteredNotes = notepad.filterNotesByQuery(value);
  refs.listRef.innerHTML = "";
  renderNotesArray(filteredNotes);
};
