import { notepad } from "../../index";
import { rendernotesArray } from "../view";
import getRefs from "../utils/refs";
const refs = getRefs();

const handleSearchFormInput = ({ target }) => {
  const value = target.value;
  const filteredNotes = notepad.filterNotesByQuery(value);
  refs.listRef.innerHTML = "";
  rendernotesArray(filteredNotes);
};

export default handleSearchFormInput;
