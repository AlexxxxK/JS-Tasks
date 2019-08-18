export default class Notepad {
  constructor(notes = [{ id, title, body, priority }]) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  set notes(newNotes) {
    return (this._notes = newNotes);
  }

  findNoteById(id) {
    return this._notes[this._notes.findIndex(note => note.id === id)];
  }

  saveNote(note) {
    this._notes.push(note);
    return note;
  }

  deleteNote(id) {
    this._notes = this._notes.filter(note => note.id !== id);
  }

  updateNoteContent(id, updatedContent) {
    return Object.assign(this.findNoteById(id), updatedContent);
  }

  updateNotePriority(id, priority) {
    return (this.findNoteById(id).priority = priority);
  }

  filterNotesByQuery(query) {
    return this._notes.filter(
      note =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.body.toLowerCase().includes(query.toLowerCase())
    );
  }

  filterNotesByPriority(priority) {
    return this._notes.filter(note => note.priority === priority);
  }

  static get Priority() {
    return { LOW: 0, NORMAL: 1, HIGH: 2 };
  }
}

const initialNotes = [
  {
    id: "id-1",
    title: "JavaScript essentials",
    body:
      "Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc",
    priority: Notepad.Priority.HIGH,
  },
  {
    id: "id-2",
    title: "Refresh HTML and CSS",
    body:
      "Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",
    priority: Notepad.Priority.NORMAL,
  },
];
