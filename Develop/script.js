// Assignment Code
var generateBtn = document.querySelector("#generate");

//Character arrays
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numeric = ["0","1","2","3","4","5","6","7","8","9","10"]
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

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

// Get character types from user...
function getTypes() {
  var lowerCheck = $("#lowercaseBox").is(":checked");
  var upperCheck = $("#uppercaseBox").is(":checked");
  var numericCheck = $("#numericBox").is(":checked");
  var specialCheck = $("#specialBox").is(":checked");

  if (lowerCheck = true) {

  }
}
// Generate password
function generatePassword() {
  var i;
  for (i = 0; i < passwordLength; i++) {

  }
}

// Write password to the #password input
function writePassword() {
  getLength();
  getTypes();
  generatePassword();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
