// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Variable to store new array
var newArray = [];
// Function to flatten newArray
function flatArray() {
  return newArray.flat();
}
// Function to prompt user for password options
function getPasswordOptions(a, arr) {
  if (confirm("Click OK to confirm including " + a + " characters.")) {
    newArray.push(arr); // When OK is clicked on prompt, it is equivilant to true thus character array/s will be stored in newArray variable.
  } else {
  }
  return newArray;
}

// Function for getting a random element from an array
function getRandom(b, a) {
  var newArray2 = [];
  for (let i = 0; i < a; i++) {
    newArray2 += b[Math.floor(Math.random() * b.length)];
    // Math.floor and Math.random are used to give a random index which is then added to newArray2 variable.
  }
  return newArray2;
}

// Function to generate password with user input
function generatePassword() {
  var userChoice = prompt(
    //First prompt
    "How many characters would like your password to contain?"
  );
  if (userChoice > 128) {
    //Filters large numbers out
    alert("Password length must be less than 129 characters");
    return null; //Added so that "defined" doesn't display on webpage
  } else if (userChoice < 8) {
    //Filters smaller
    alert("Password length must be at least 8 characters");
    return null;
  } else if (userChoice <= 128 && userChoice >= 8) {
    //Criteria prompts show when this is satisfied.
    getPasswordOptions("special", specialCharacters);
    getPasswordOptions("numeric", numericCharacters);
    getPasswordOptions("lowercase", lowerCasedCharacters);
    getPasswordOptions("uppercase", upperCasedCharacters);
    return getRandom(flatArray(), userChoice); // Function for returning random string that contains characters depending on userChoice
  }
}

// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
