// var firstNameInput = document.querySelector("#first-name");
var userNameInput = document.querySelector("#user-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  
    var userName = userNameInput.value.trim();
    var email = emailInput.value.trim();
    var password = passwordInput.value.trim();
  
  // Check if all fields are filled
  if (!userName || !email || !password) {
    alert("Please fill in all the fields.");
    return;
  }

  var user = {
    userName: userName,
    email: email,
    password: password
  };

  // set new submission to local storage 
  localStorage.setItem("user", JSON.stringify(user));

   // alert user that the sign up was successful
   alert("Sign-up successful for user: " + user.userName);

  //  Rederect to the Home page
   window.location.href = "./assets/pages/test/index.html";
});
