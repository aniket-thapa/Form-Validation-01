function validateForm() {
  var username = document.getElementById("username").value;
  var usernameError = document.getElementById("usernameError").innerText;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  var onlyAlphabets = /^[A-Za-z]+$/;
  
  // Username validation
  if (username == "") {
    document.getElementById("usernameError").innerText =
      "** Username cannot be empty. **";
    return false;
  } else {
    document.getElementById("usernameError").innerText = "";
  }
  if (!isNaN(username)) {
    document.getElementById("usernameError").innerText =
      "** Username should contain Characters **";
    return false;
  } else {
    document.getElementById("usernameError").innerText = "";
  }

  if (!username.match(onlyAlphabets)) {
    document.getElementById("usernameError").innerText =
      "** Username should contain only Albhabets **";
    return false;
  } else {
    document.getElementById("usernameError").innerText = "";
  }

  if (username.length < 3) {
    document.getElementById("usernameError").innerText =
      "** Username cannot be less than three characters. **";
    return false;
  } else {
    document.getElementById("usernameError").innerText = "";
  }

  // Password validation
  if (password.length == "") {
    document.getElementById("passwordError").innerText =
      "** Password cannot be empty. **";
    return false;
  } else {
    document.getElementById("passwordError").innerText = "";
  }
  if (password.length < 8) {
    document.getElementById("passwordError").innerText =
      "**Password should be at least 8 characters long.**";
    return false;
  } else {
    document.getElementById("passwordError").innerText = "";
  }

  // Confirm Password validation
  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").innerText =
      "Passwords do not match.";
    return false;
  } else {
    document.getElementById("confirmPasswordError").innerText = "";
  }
  return true;
}
