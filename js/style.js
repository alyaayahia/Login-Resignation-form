var link = document.getElementById("link");
var link2 = document.getElementById("link2");
var userName = document.querySelector("#userName");
var Email = document.querySelector("#Email");
var password = document.querySelector("#password");
var btn2 = document.querySelector("#btn2");
var btn1 = document.querySelector("#btn1");
var btn = document.querySelector(".btn");
var btn3 = document.querySelector(".btn3");
var error = document.querySelector(".error");
var head = document.getElementById("head");
var alertError = document.querySelector(".alert");
var loginForm = document.querySelector(".form");
var home = document.querySelector("#home");
var head2 = document.querySelector(".head2");
var navbar = document.querySelector(".navbar");
var user = [];
if (localStorage.getItem("userDate")) {
  user = JSON.parse(localStorage.getItem("userDate"));
}
function displayRegistration() {
  link.addEventListener("click", function () {
    userName.classList.replace("d-none", "d-block");
    btn1.classList.replace("d-block", "d-none");
    btn2.classList.replace("d-none", "d-block");
    link.classList.add("d-none");
    link2.classList.remove("d-none");
  });
}
function displayLogin() {
  link2.addEventListener("click", function () {
    userName.classList.replace("d-block", "d-none");
    btn2.classList.replace("d-block", "d-none");
    btn1.classList.replace("d-none", "d-block");
    link.classList.remove("d-none");
    link2.classList.add("d-none");
  });
}
displayRegistration();
displayLogin();
btn2.onclick = function () {
  if (validateUserName()) {
    addRegistration();
    clear();
  } else {
    alert("Error");
  }
};
function addRegistration() {
  var userDateRegistration = {
    userName: userName.value,
    Email: Email.value,
    password: password.value,
  };
  user.push(userDateRegistration);
  localStorage.setItem("userDate", JSON.stringify(user));
  console.log(user);
}
btn1.onclick = function () {
  addLogin();
};
var Name;
function addLogin() {
  var userLogin = {
    Email: Email.value,
    password: password.value,
  };
  var date = JSON.parse(localStorage.getItem("userDate"));
  date.forEach((element, index) => {
    if (
      date[index].Email == userLogin.Email &&
      date[index].password == userLogin.password
    ) {
      Name = date[index].userName;
      Home();
    } else {
      error.classList.replace("d-none", "d-block");
    }
  });
}
function Home() {
  head.classList.replace("d-block", "d-none");
  loginForm.classList.replace("d-block", "d-none");
  navbar.classList.replace("d-none", "d-block");
  head2.innerHTML = `
  <h1>welcome ${Name}</h1>
  `;
}

function clear() {
  userName.value = "";
  Email.value = "";
  password.value = "";
}
btn.onclick = function () {
  logOut();
};
function logOut() {
  navbar.classList.replace("d-block", "d-none");
  head2.innerHTML = "";
  loginForm.classList.replace("d-none", "d-block");
  console.log(head.classList.replace("d-none", "d-block"));
}
btn3.onclick = function () {
  displayError();
};

function displayError() {
  error.classList.add("d-none");
}

function validateUserName() {
  var regex = /^[A-Z][a-z]{2,8}$/;
  return regex.test(userName.value);
}
/* function validateEmail() {
  var regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  return regex.test(Email.value);
} */
