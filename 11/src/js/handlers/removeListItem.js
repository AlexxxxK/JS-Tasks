import { notepad } from "../../index";
import { notyf } from "../handlers/createNewNote";
import { NOTIFICATION_MESSAGES, NOTE_ACTIONS } from "../utils/constants";

const removeListItem = ({ target }) => {
  if (target.parentNode.dataset.action !== NOTE_ACTIONS.DELETE) return;
  const listItem = target.closest("li");
  const id = listItem.dataset.id;
  notepad.deleteNote(id);
  listItem.remove();
  notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
};

export default removeListItem;
