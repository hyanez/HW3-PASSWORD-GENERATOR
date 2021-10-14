// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  //Generate a random password
  // get the length the user wants
  // If it's not at least 8 characters... start over
  //What kinds of characters
  // do you want uppercase?
  // do you want lowercase?
  // do you want special characters?
  // Generate a random number, think about using arrays
  // return a password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
