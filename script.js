// Assignment Code
var lowercase = ["a","b","c","d","e","f","g","h","i",];
var uppercase =["A","B"];
var numbers =["0","1","2"];
var special =["!","@","#","$",]


// Add a series of prompts for password criteria
// Make sure choose at leaset one type of characters
function typeCharacter(){
  var confirmLength = prompt("How long is your password?(8~128)");
  if(confirmLength<8 && confirmLength>128){
    alert("It has to be between 8 to 128 !!!")
    return;
  }
  // create if statement to check confirmLength is a num!!!!!!activity
  var confirmLowercase = confirm("Do you want lowercase?");
  var confirmUppercase = confirm("Do you want uppercase?");
  var confirmNumeric = confirm("Do you want numeric?");
  var confirmSpecial = confirm("Do you want special characters?");

 if(confirmLowercase==false && confirmUppercase==false && confirmNumeric==false && confirmSpecial==false){
  console.log("You haven't choose any one!!!!")
  alert("You have to choose at least one!!!!!")
  return;
  //var confirmLowercase = confirm("Do you want lowercase?");
  //var confirmUppercase = confirm("Do you want uppercase?");
  //var confirmNumeric = confirm("Do you want numeric?");
  //var confirmSpecial = confirm("Do you want special characters?");
}

 else{
  console.log("You already choose.")
}
var passwordHolder =[];
for (var i=8;i <confirmLength;i++){
   if (confirmLowercase){
     passwordHolder.push(lowercase[i]);
     console.log(passwordHolder);

   }
}
}
//create for loop 


// need to create function generatePassword!!!!!


// Write password to the #password input
var generateBtn = document.querySelector("#generate");
function writePassword() {
  typeCharacter();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
