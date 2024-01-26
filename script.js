// Mengubah warna Background Navbar ketika scroll down
const home = document.getElementById("home");
const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const homeHeight = home.clientHeight;
  if (scrollPosition > homeHeight) {
    navbar.classList.add("scrolling");
  } else {
    navbar.classList.remove("scrolling");
  }
});

//Memvalidasi Form Feedback
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkingForm();
});

//Funciton untuk mengecek email valid (regex)
function isEmail(email) {
  const valid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return valid.test(email);
}

function checkingForm() {
  //check nama
  if (username.value === "") {
    showError(username, "Please input your name");
  } else {
    showSuccess(username);
  }

  //check email
  if (email.value === "") {
    showError(email, "Please input an email");
  } else if (!isEmail(email.value)) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email);
  }

  //check message
  if (message.value === "") {
    showError(message, "Please input a message");
  } else {
    showSuccess(message);
  }

  //Membersihkan form setelah submit
  if (username.value && isEmail(email.value) && message.value) {
    username.value = "";
    email.value = "";
    message.value = "";
  }
}

//Function untuk menampilkan input error
function showError(input, message) {
  const subForm = input.parentElement;
  subForm.className = "sub-form error";
  const small = subForm.querySelector("small");
  small.innerText = message;
}

//Function untuk menampilkan input sukses
function showSuccess(input) {
  const subForm = input.parentElement;
  subForm.className = "sub-form success";
}
