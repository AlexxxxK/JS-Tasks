import * as api from "./services/api";

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

  constructor(notes = []) {
    this._notes = notes;
  }

  get() {
    return api.getNotes().then(notes => {
      this._notes = notes;

      return this._notes;
    });
  }

  // set notes(newNotes) {
  //   this._notes = newNotes;
  // }

  findNoteById(id) {
    return this._notes.find(note => note.id === id);
  }

  saveNote(note) {
    return api.saveNote(note).then(savedNote => {
      this._notes.push(savedNote);

      return savedNote;
    });
  }

  deleteNote(id) {
    return api.deleteNote(id).then(() => {
      this._notes = this._notes.filter(note => note.id !== id);

      return id;
    });
  }

  updateNoteContent(id, newContent) {
    return api.updateNoteContent(id, newContent).then(updatedNote => {
      this._notes = this._notes.map(note =>
        note.id === updatedNote.id ? updatedNote : note
      );
      return updatedNote;
    });
  }

  updateNotePriority(id, priority) {
    return api.updateNotePriority(id, priority).then(updatedNote => {
      this.findNoteById(id).priority = priority;

      return updatedNote;
    });
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
}
