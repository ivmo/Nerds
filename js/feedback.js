var link = document.querySelector(".feedback-btn");
var popup = document.querySelector(".form-container");
var close = document.querySelector(".close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=mail]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("form-container-show");
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("form-container-show");
  popup.classList.remove("form-error");
});
form.addEventListener("submit", function(event) {
  if (!login.value || !email.value) {
    event.preventDefault();
    popup.classList.remove("form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("form-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("form-container-show")) {
      popup.classList.remove("form-container-show");
      popup.classList.remove("form-error");
    }
  }
});
