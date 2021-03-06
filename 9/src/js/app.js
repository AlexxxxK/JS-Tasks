'use strict';

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};

const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

class Notepad {
  constructor(notes = [{ id, title, body, priority }]) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  set notes(newNotes) {
    this._notes = newNotes;
  }

  static generateUniqueId() {
    return (
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15)
    );
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

  getPriority(priority) {
    switch (priority) {
      case 1:
        return 'Normal';

      case 2:
        return 'High';

      default:
        return 'Low';
    }
  }
}

const initialNotes = [
  {
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body:
      'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-4',
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  },
];

const notepad = new Notepad(initialNotes);
const refs = {
  listRef: document.querySelector('.note-list'),
  noteEditorForm: document.querySelector('.note-editor'),
  searchForm: document.querySelector('.search-form'),
};
/* const listRef = document.querySelector('.note-list');
const noteEditorForm = document.querySelector('.note-editor');
const search = document.querySelector('.search-form'); */

const createNoteContent = (title, body) => {
  const noteContent = document.createElement('div');
  noteContent.classList.add('note__content');

  const noteTitle = document.createElement('h2');
  noteTitle.classList.add('note__title');
  noteTitle.textContent = title;

  const noteBody = document.createElement('p');
  noteBody.classList.add('note__body');
  noteBody.textContent = body;

  noteContent.append(noteTitle, noteBody);

  return noteContent;
};

const createButton = (dataAction, btnTextContent) => {
  const btn = document.createElement('button');
  btn.classList.add('action');
  btn.dataset.action = dataAction;

  const buttonText = document.createElement('i');
  buttonText.classList.add('material-icons', 'action__icon');
  buttonText.textContent = btnTextContent;

  btn.appendChild(buttonText);

  return btn;
};

const createNoteFooter = priority => {
  const noteFooter = document.createElement('footer');
  noteFooter.classList.add('note__footer');

  const prioritySection = document.createElement('section');
  prioritySection.classList.add('note__section');

  const decrPriorityBtn = createButton(
    NOTE_ACTIONS.DECREASE_PRIORITY,
    ICON_TYPES.ARROW_DOWN
  );

  const incrPriorityBtn = createButton(
    NOTE_ACTIONS.INCREASE_PRIORITY,
    ICON_TYPES.ARROW_UP
  );

  const notePriority = document.createElement('span');
  notePriority.classList.add('note__priority');
  notePriority.textContent = `Priority: ${notepad.getPriority(priority)}`;

  prioritySection.append(decrPriorityBtn, incrPriorityBtn, notePriority);

  const editNoteSection = prioritySection.cloneNode(false);
  const editNoteBtn = createButton(NOTE_ACTIONS.EDIT, ICON_TYPES.EDIT);
  const delNoteBtn = createButton(NOTE_ACTIONS.DELETE, ICON_TYPES.DELETE);

  editNoteSection.append(editNoteBtn, delNoteBtn);
  noteFooter.append(prioritySection, editNoteSection);

  return noteFooter;
};

const createListItem = ({ id, title, body, priority }) => {
  const noteListItem = document.createElement('li');
  noteListItem.classList.add('note-list__item');
  noteListItem.dataset.id = id;

  const note = document.createElement('div');
  note.classList.add('note');

  note.append(createNoteContent(title, body), createNoteFooter(priority));
  noteListItem.appendChild(note);

  return noteListItem;
};

const renderNoteList = (listRef, notes) =>
  listRef.append(...notes.map(note => createListItem(note)));

renderNoteList(refs.listRef, notepad.notes);

// Add new note

const isFormEmpty = (input, textarea) =>
  !input.value.trim().length || !textarea.value.trim().length;

const addListItem = (listRef, note) =>
  listRef.appendChild(createListItem(note));

const createNewNote = event => {
  event.preventDefault();
  const [input, textarea] = [...event.target.elements];

  if (isFormEmpty(input, textarea)) {
    alert('Необходимо заполнить все поля!');
    //event.currentTarget.reset();
    return;
  }

  const note = {
    id: Notepad.generateUniqueId(),
    title: input.value,
    body: textarea.value,
    priority: PRIORITY_TYPES.LOW,
  };

  notepad.saveNote(note);
  addListItem(refs.listRef, note);
  event.currentTarget.reset();
};

refs.noteEditorForm.addEventListener('submit', createNewNote);

// Delete note

const removeListItem = ({ target }) => {
  if (target.parentNode.dataset.action !== 'delete-note') return;
  const listItem = target.closest('li');
  const id = listItem.dataset.id;
  notepad.deleteNote(id);
  listItem.remove();
};

refs.listRef.addEventListener('click', removeListItem);

// Filter notes

const filterNotes = ({ target }) => {
  const value = target.value;
  const filteredNotes = notepad.filterNotesByQuery(value);
  refs.listRef.innerHTML = '';
  renderNoteList(refs.listRef, filteredNotes);
};

refs.searchForm.addEventListener('input', filterNotes);
