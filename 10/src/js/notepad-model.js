export default class Notepad {
  static getPriority(priority) {
    switch (priority) {
      case 1:
        return "Normal";

      case 2:
        return "High";

      default:
        return "Low";
    }
  }

  constructor(notes = [{ id, title, body, priority }]) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  set notes(newNotes) {
    this._notes = newNotes;
  }

  findNoteById(id) {
    return this.notes.find(note => note.id === id);
  }

  saveNote(note) {
    this.notes.push(note);
    return note;
  }

  deleteNote(id) {
    this.notes = this.notes.filter(note => note.id !== id);
  }

  updateNoteContent(id, updatedContent) {
    return Object.assign(this.findNoteById(id), updatedContent);
  }

  updateNotePriority(id, priority) {
    return (this.findNoteById(id).priority = priority);
  }

  filterNotesByQuery(query) {
    return this.notes.filter(
      note =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.body.toLowerCase().includes(query.toLowerCase())
    );
  }

  filterNotesByPriority(priority) {
    return this.notes.filter(note => note.priority === priority);
  }
}
