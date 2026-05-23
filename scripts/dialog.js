const saveButton = document.querySelector(".save-button");
const memoryDialog = document.querySelector(".memory-dialog");
const dialogCloseButton = document.querySelector(".memory-dialog__button");

saveButton.addEventListener("click", () => {
  memoryDialog.showModal();
});

dialogCloseButton.addEventListener("click", () => {
  memoryDialog.close();
});
