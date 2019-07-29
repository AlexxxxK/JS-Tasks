import { notepad } from "../../index";
import { rendernotesArray } from "../view";
import { notyf } from "./createNewNote";
import getRefs from "../utils/refs";
const refs = getRefs();

const handleSearchFormInput = ({ target }) => {
  const value = target.value;
  notepad
    .filterNotesByQuery(value)
    .then(filteredNotes => rendernotesArray(filteredNotes))
    .catch(error => notyf.error(error));
};

export default handleSearchFormInput;
