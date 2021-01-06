// Assignment Code
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers ='0123456789';
var symbols='@#$%&*+=?!<|>~/';

// Add a series of prompts for password criteria
// Make sure choose at leaset one type of characters
function generatePassword(){
  var confirmLength = prompt("How long is your password?(8~128)");
  console.log(confirmLength);
  // create if statement to check confirmLength is a num!!
  if(isNaN(confirmLength)){
    alert("You need to put a number!!!!!");
    return;
  } 
  else if(confirmLength<8 || confirmLength>128){
    alert("It has to be between 8 to 128 !!!");
    return;
  }
  else{
  var confirmLowercase = confirm("Do you want lowercase?");
  var confirmUppercase = confirm("Do you want uppercase?");
  var confirmNumeric = confirm("Do you want numeric?");
  var confirmSpecial = confirm("Do you want special characters?");
  }
  if(confirmLowercase==false && confirmUppercase==false && confirmNumeric==false && confirmSpecial==false){
  console.log("You haven't choose any one!!!!");
  alert("You have to choose at least one!!!!!");
  
 }
 else{
  console.log("You already choose.Here is your password:");
 }
 
// need to create function generatePassword
 //add the user choices to the options

  var options = '';
  if(confirmLowercase){
    options += lowercase;
    console.log("You chosed lowercase~");
  }
  if(confirmUppercase){
    options += uppercase;
    console.log("You chosed uppercase~");
  }
  if(confirmNumeric){
    options += numbers;
    console.log("You chosed numbers~");
  }
  if(confirmSpecial){
    options += symbols;
    console.log("You chosed symbols~");
  }

  var password ='';
  for (var i = 0; i < confirmLength; i++) {
      var random = Math.floor(Math.random()*options.length);
      password += options[random];
  }
  return password;
}

// Write password to the #password input
var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);