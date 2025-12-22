const form = document.getElementById("form");
const progress = document.getElementById("progress");

form.addEventListener("submit", event => {
  event.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.open("POST", form.action);

  xhr.upload.onprogress = event => {
    if (event.lengthComputable) {
      progress.value = event.loaded / event.total;
    }
  };

  xhr.onload = () => progress.value = 1;
  ;

  const formData = new FormData(form);
  xhr.send(formData);
  
});