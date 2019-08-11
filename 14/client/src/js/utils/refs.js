const getRefs = () => ({
  listRef: document.querySelector(".note-list"),
  noteEditorForm: document.querySelector(".note-editor"),
  noteEditorTitle: document.querySelector("input[name='note_title']"),
  noteEditorBody: document.querySelector("textarea[name='note_body']"),
  searchForm: document.querySelector(".search-form"),
  openEditorBtn: document.querySelector(".page-header__button"),
});

export default getRefs;
