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
    return this._notes.find(note => note.id === id);
  }

  saveNote(note) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this._notes.push(note);

        resolve(note);
      }, 300);
    });
  }

  deleteNote(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this._notes = this.notes.filter(note => note.id !== id);

        resolve(this._notes);
      }, 300);
    });
  }

  updateNoteContent(id, updatedContent) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Object.assign(this.findNoteById(id), updatedContent);

        resolve(this._notes);
      }, 300);
    });
  }

  updateNotePriority(id, priority) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.findNoteById(id).priority = priority;

        resolve(this._notes);
      }, 100);
    });
  }

  filterNotesByQuery(query) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const filteredNotes = this._notes.filter(
          note =>
            note.title.toLowerCase().includes(query.toLowerCase()) ||
            note.body.toLowerCase().includes(query.toLowerCase())
        );

        resolve(filteredNotes);
      }, 100);
    });
  }

  filterNotesByPriority(priority) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const filteredNotes = this._notes.filter(
          note => note.priority === priority
        );

        resolve(filteredNotes);
      }, 100);
    });
  }
}
