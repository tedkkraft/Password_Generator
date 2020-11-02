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
  else {
    console.log("passwordLength: " + passwordLength)
    return passwordLength;
  }
}

// Get character types from user...
function getTypes() {
  var lowerCheck = $("#lowercaseBox").is(":checked");
  var upperCheck = $("#uppercaseBox").is(":checked");
  var numericCheck = $("#numericBox").is(":checked");
  var specialCheck = $("#specialBox").is(":checked");

  if (
    lowerCheck === false &&
    upperCheck === false &&
    numericCheck === false &&
    specialCheck === false
  ) {
    alert('Must select at least one character type');
    return;
  }

  var passwordTypes = {
    lowerCheck: lowerCheck,
    upperCheck: upperCheck,
    numericCheck: numericCheck,
    specialCheck: specialCheck
  };

  return passwordTypes;

}

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Generate password
function generatePassword() {
  var length = getLength();
  var types = getTypes();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (types.lowerCheck) {
    possibleCharacters = possibleCharacters.concat(lowercase);
    guaranteedCharacters.push(getRandom(lowercase));
  }

  if (types.upperCheck) {
    possibleCharacters = possibleCharacters.concat(uppercase);
    guaranteedCharacters.push(getRandom(uppercase));
  }

  if (types.numericCheck) {
    possibleCharacters = possibleCharacters.concat(numeric);
    guaranteedCharacters.push(getRandom(numeric));
  }

  if (types.specialCheck) {
    possibleCharacters = possibleCharacters.concat(specialChar);
    guaranteedCharacters.push(getRandom(specialChar));
  }

  for (var i = 0; i < length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }
  console.log(result);

  //Turn password array into a string
  return result.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
