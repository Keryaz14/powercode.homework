"use strict";

const openBtn = document.getElementById("myBtn");
openBtn.onclick = showBtn;
const backDrop = document.getElementById("back-drop");

const singBtnEl = document.getElementById("sing-out-btn");
const userInfoEl = document.getElementById("user-info");

function onSingIn() {
  singBtnEl.classList.add("hidden");
  userInfoEl.classList.remove("hidden");
}
function onSingOut() {
  singBtnEl.classList.remove("hidden");
  userInfoEl.classList.add("hidden");
}

function validatelUser(login, password) {
  switch (login) {
    case "Kirill@gmail.com":
      return password === "1234";
    default:
      return false;
  }
}

document.getElementById("sing-out-btn").onclick = onSingOut;

window.onscroll = function () {
  return false;
};

function showBtn() {
  backDrop.classList.add("open_form");
}

function noShowForm() {
  backDrop.classList.remove("open_form");
}
const closeForm = document.getElementById("close");
closeForm.onclick = noShowForm;

const generalClose = document.addEventListener("click", function (event) {
  if (event.target == backDrop) {
    noShowForm();
  }
});

document.getElementById("open_form").onsubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formValue = Object.fromEntries(formData);
  console.log(formValue);
  if (validatelUser(formValue.login, formValue.password)) {
    onSingOut();
    noShowForm();
  }
};

const openBtnReg = document.getElementById("btn-reg");
openBtnReg.onclick = BtnReg;
const backDropReg = document.getElementById("back-drop-reg");

window.onscroll = function () {
  return false;
};

function BtnReg() {
  noShowForm();
  backDropReg.classList.add("open_reg");
}

function noBtnReg() {
  backDropReg.classList.remove("open_reg");
}

const closeFormReg = document.getElementById("close-reg");

closeFormReg.onclick = noBtnReg;

const generalCloseReg = document.addEventListener("click", function (event) {
  if (event.target == backDropReg) {
    noBtnReg();
  }
});

const openBtnContact = document.getElementById("myBtn-contact");
openBtnContact.onclick = BtnContact;
const backDropContact = document.getElementById("back-drop-contact");

window.onscroll = function () {
  return false;
};

function BtnContact() {
  BtnContact();
  backDropContact.classList.add("open_form_contact");
}

function BtnContact() {
  backDropContact.classList.remove("open__contact");
}

const closeFormContact = document.getElementById("close-contact");

closeFormContact.onclick = BtnContact;

const generalCloseContact = document.addEventListener(
  "click",
  function (event) {
    if (event.target == backDropContact) {
      BtnContact();
    }
  }
);
