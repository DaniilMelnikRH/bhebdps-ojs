const editor = document.getElementById("editor");

const savedText = localStorage.getItem("editorContent");
if (savedText) editor.value = savedText;

editor.addEventListener("input", () => {
  localStorage.setItem("editorContent", editor.value);
});

const clearButton = document.createElement("button");
clearButton.textContent = "Очистить содержимое";
clearButton.style.marginTop = "10px";
editor.parentNode.appendChild(clearButton);

clearButton.addEventListener("click", () => {
  editor.value = "";
  localStorage.removeItem("editorContent");
});