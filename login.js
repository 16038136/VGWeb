const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "1000" && password === "sutar@123") {
    alert("You have successfully logged in.");
    window.location.href = "DCCbank.html";
  } else {
    //alert("Please Your username and password!!");
    loginErrorMsg.style.opacity = 1;
  }
});
