// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
var newArray = [];
function getPasswordOptions(a, arr) {
  if (confirm("Click OK to confirm including " + a + " characters.")) {
      newArray.push(arr);
  }
  return newArray;
}

// Function for getting a random element from an array
function getRandom(arr, a) {
  var newArray2 = [];
 for (let i = 0; i < a; i++) {
   newArray2 += arr[Math.floor(Math.random() * arr.length)]; 
 }
 console.log(newArray2);
 return newArray2;
}


// Function to generate password with user input
function generatePassword() {
 var userChoice = prompt("How many characters would like your password to contain?");
  if (userChoice > 128) {
     alert("Password length must be less than 129 characters");
  } else if (userChoice < 8) {
     alert("Password length must be at least 8 characters")
  } else if (userChoice < 128 && userChoice > 8) {
    getPasswordOptions("special", specialCharacters);
    getPasswordOptions("numeric", numericCharacters);
    getPasswordOptions("lowercase", lowerCasedCharacters);
    getPasswordOptions("uppercase", upperCasedCharacters); 
  
    getRandom(newArray.flat(), userChoice)
  }
  return getRandom(newArray.flat(), userChoice);
} 
generatePassword();
console.log(newArray)
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);