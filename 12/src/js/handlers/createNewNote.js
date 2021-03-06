import MicroModal from "micromodal";
import { Notyf } from "notyf";
import { notepad } from "../../index";
import { createNewNote, addNewNote, saveToLocalStorage } from "../view";
import { NOTIFICATION_MESSAGES } from "../utils/constants";

export const notyf = new Notyf();
const isFormEmpty = (input, textarea) =>
  !input.value.trim().length || !textarea.value.trim().length;

const handleEditorSubmit = event => {
  event.preventDefault();
  const [input, textarea] = [...event.target.elements];

  if (isFormEmpty(input, textarea)) {
    notyf.error(NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY);
    // event.currentTarget.reset();
    return;
  }

  const note = createNewNote(input.value, textarea.value);
  notepad
    .saveNote(note)
    .then(savedNote => addNewNote(savedNote))
    .catch(error => notyf.error(error));
  saveToLocalStorage(notepad.notes);
  notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
  event.currentTarget.reset();
  MicroModal.close("note-editor-modal");
};

export default handleEditorSubmit;
