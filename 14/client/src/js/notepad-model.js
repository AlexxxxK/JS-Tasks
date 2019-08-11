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

  async get() {
    try {
      const notes = await api.getNotes();
      this._notes = notes;

      return this._notes;
    } catch (error) {
      throw error;
    }
  }

  findNoteById(id) {
    return this._notes.find(note => note.id === id);
  }

  async saveNote(note) {
    try {
      const savedNote = await api.saveNote(note);
      this._notes.push(savedNote);

      return savedNote;
    } catch (error) {
      throw error;
    }
  }

  async deleteNote(id) {
    try {
      await api.deleteNote(id);
      this._notes = this._notes.filter(note => note.id !== id);

      return id;
    } catch (error) {
      throw error;
    }
  }

  async updateNoteContent(id, newContent) {
    try {
      const updatedNote = await api.updateNoteContent(id, newContent);
      this._notes = this._notes.map(note =>
        note.id === updatedNote.id ? updatedNote : note
      );

      return updatedNote;
    } catch (error) {
      throw error;
    }
  }

  async updateNotePriority(id, priority) {
    try {
      const updatedNote = await api.updateNotePriority(id, priority);
      this.findNoteById(id).priority = priority;

      return updatedNote;
    } catch (error) {
      throw error;
    }
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
