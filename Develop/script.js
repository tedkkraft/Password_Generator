// Assignment Code
var generateBtn = document.querySelector("#generate");

// Get password length from user...
function getLength() {
  var userLength = prompt("Please enter the # of characters you'd like your password to be", "Enter a number between 8-128");
  var passwordLength = parseInt(userLength);

  //...then verify it is in range (8-128). If not in range, clear answer and prompt again.
  if (passwordLength < 8 || passwordLength > 128) { 
    userLength = null;
    alert("Invalid entry")
    getLength();
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  getLength();
} 



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
