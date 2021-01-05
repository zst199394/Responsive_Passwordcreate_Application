// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add a series of prompts for password criteria
var confirmLength = prompt("How long is your password?(8~128)");
var confirmLowercase = confirm("Do you want lowercase?");
var confirmUppercase = confirm("Do you want uppercase?");
var confirmNumeric = confirm("Do you want numeric?");
var confirmSpecial = confirm("Do you want special characters?");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
