const getRefs = () => ({
  listRef: document.querySelector(".note-list"),
  noteEditorForm: document.querySelector(".note-editor"),
  searchForm: document.querySelector(".search-form"),
  openEditorBtn: document.querySelector(".page-header__button")
});

export default getRefs;
