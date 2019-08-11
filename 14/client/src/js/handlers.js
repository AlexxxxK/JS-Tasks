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
    notyf.open({
      type: "warning",
      message: `${NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY}`,
    });
    //event.currentTarget.reset();
    return;
  }

  const addNewNote = async (title, text) => {
    try {
      const addedNote = await notepad.saveNote(createNewNote(title, text));
      CreateNotesListItem(addedNote);
      notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
    } catch (error) {
      notyf.error(`${error}`);
    }
  };

  addNewNote(input.value, textarea.value);
  event.currentTarget.reset();
  MicroModal.close("note-editor-modal");
};

// Remove note

export const removeListItem = async ({ target }) => {
  if (target.parentNode.dataset.action !== NOTE_ACTIONS.DELETE) return;
  const listItem = target.closest("li");
  const id = listItem.dataset.id;
  try {
    await notepad.deleteNote(id);
    listItem.remove();
    notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
  } catch (error) {
    notyf.error(`${error}`);
  }
};

// Search notes

export const handleSearchFormInput = ({ target }) => {
  const value = target.value;
  const filteredNotes = notepad.filterNotesByQuery(value);
  refs.listRef.innerHTML = "";
  renderNotesArray(filteredNotes);
};

// Edit note

// export const handleNoteEditBtnClick = ({ target }) => {
//   if (target.parentNode.dataset.action !== NOTE_ACTIONS.EDIT) return;
//   MicroModal.show("note-editor-modal");
//   const listItem = target.closest("li");
//   const id = listItem.dataset.id;
//   const noteToEdit = notepad.findNoteById(id);
//   refs.noteEditorTitle.value = noteToEdit.title;
//   refs.noteEditorBody.value = noteToEdit.body;
// };
