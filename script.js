// Assignment Code
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers =["0","1","2","3","4","5","6","7","8","9"];
var special =["!","@","#","$","%","&","*","+","=","?","<",">"];

// Add a series of prompts for password criteria
// Make sure choose at leaset one type of characters
function choosePassword(){
  var confirmLength = prompt("How long is your password?(8~128)");
  // create if statement to check confirmLength is a num!!!!!! ??????????
  if(isNaN(confirmLength)){
    alert("You need to put a number!!!!!")
  } 
  else if(isNaN(confirmLength)==false && confirmLength<8 && confirmLength>128){
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
  return;
 }
 else{
  console.log("You already choose.")
 }
 var passwordBox =[];

//add he user choices to the array passwordBox
 if(confirmLowercase) {
     passwordBox1=passwordBox.concat(lowercase);
     console.log(passwordBox1);
     return;
 }
 else{
   passwordBox1=passwordBox;
   console.log(passwordBox1);
 }
if(confirmUppercase){
   passwordBox2=passwordBox1.concat(uppercase);
   console.log(passwordBox2);
   return;
 }
 else{
  passwordBox2=passwordBox1;
  console.log(passwordBox2);
 }
if (confirmSpecial){
  passwordBox3=passwordBox2.concat(special);
  console.log(passwordBox);
  return;
 }
 else{
  passwordBox3=passwordBox2;
  console.log(passwordBox3);
 }

//create for loop 

for (var i = 0; i < confirmLength; i++) {
// need to create function generatePassword!!!!!?????????????
function generatePassword() {
  var password = passwordBox[Math.floor(Math.random() * confirmLength)];
  console.log(Password);
}
}

// Write password to the #password input ??????
var generateBtn = document.querySelector("#generate");
function writePassword() {
  choosePassword();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)