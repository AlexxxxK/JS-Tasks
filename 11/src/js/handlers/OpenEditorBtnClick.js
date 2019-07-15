import MicroModal from "micromodal";

const handleOpenEditorBtnClick = ({ target }) => {
  if (target.parentNode.dataset.action === "open-editor") {
    MicroModal.show("note-editor-modal");
  }
};

export default handleOpenEditorBtnClick;
