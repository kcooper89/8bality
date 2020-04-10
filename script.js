

function generatePassword () {

  var randomNumber=0;

  // Assignment Code
  var new_password="";

  // create an empty array called all_characters
  var all_characters = [];

  // create an array of numbers.
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  // create an array of special characters
  var specialCharacter = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~",",",".","|","{","}","[","]",];

  // create an array of lowercase letters
  var lowerCases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  // create an array of uppercase letters
  var upperCases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


  var pwd_length = prompt("How long would you like your password?")

   if ((parseInt(pwd_length) < 8) || (parseInt (pwd_length) > 128)){
    alert ("Password length must be between 8 and 128 characters!");
    return
  }

  // ask (using confirm) if the user wants special characters
  var splCharacters = confirm ("Do you want $pecial Characters?");

  // ask (using confirm) if the user wants uppercase
  var upperCase = confirm ("Do you want UPPERCASE Characters?");

  // ask (using confirm) if the user wants lowercase
  var lowerCase = confirm ("Do you want lowercase Characters?");

  // ask (using confirm) if the user wants numeric
  var numeric = confirm ("Do you want numeric Characters?"); 

  // if the user did not say yes to one of those questions, terminate like above.
  if (splCharacters === false && upperCase === false && lowerCase === false && numeric === false) {
    alert ("Must contain at least one Character Type!");
    new_password = "TRY AGAIN";
    return new_password
    
  }
  // if the user said yes to special characters, concat special_characters array to all_characters
  if (splCharacters === true) {
    all_characters = all_characters.concat (specialCharacter)
  }

  // if the user said yes to uppercase letters, concat upper_case array to all_characters
  if (upperCase === true) {
    all_characters = all_characters.concat (upperCases)
  }

   // if the user said yes to lowercase leters, concat lower_case array to all_characters
  if (lowerCase === true) {
    all_characters = all_characters.concat (lowerCases)
  }

  // if the user said yes to numerics, concat numbers array to all_characters 
  if (numeric === true) {
    all_characters = all_characters.concat (number)
  }

  // create a for loop that executes pwd_length times.
  for (var i=0; i < pwd_length; i++) {

  // generate a random number between 0 and all_characters.length
  randomNumber = Math.floor(Math.random() * all_characters.length);
  
  // random number will represent position in the array
  // get the letter at that index and appendto the end of new_password
  new_password = new_password + all_characters [randomNumber];
  }

  return new_password;
  }

  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
