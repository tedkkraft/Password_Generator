// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("Please enter the # of characters you'd like your password to be", "Enter a number between 8-128");
    if (passwordLength !== null) {
      function validateForm() {
        var userLength = passwordLength.value;
        if ( userLength < 8 || userLength > 128) {
          alert("Please select a number between 8-128");
          return false;
    }}}
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
