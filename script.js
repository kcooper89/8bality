

function generatePassword () {
  // Assignment Code
  var new_password="";

  var pwd_length = prompt("How long would you like your password?")

  if ((parseInt(pwd_length) < 8) || (parseInt (pwd_length) > 128)){
    return new_password;
  }

  // ask (using confirm) if the user wants special characters
  // ask (using confirm) if the user wants uppercase
  // ask (using confirm) if the user wants lowercase
  // ask (using confirm) if the user wants numeric

  // if the user did not say yes to one of those questions, terminate like above.

  // create an array of all possible characters based on user input
  // create an array of special characters
  // create an array of uppercase letters
  // create an array of lowercase letters
  // create an array of numbers.

  // create an empty array called all_characters
  // []
  // if the user said yes to special characters, concat special_characters array to all_characters
  // if the user said yes to uppercase letters, concast upper_case array to all_characters
  // if the user said yes to lowercase leters, concact lower_case array to all_characters
  // if the user said yes to numerics, concat numbers array to all_characters 
 
  // [0...........................................length-1]
  // [!,@,# ..., A,B,C,D,E...a,b,c,d,e...,1,2,3,4,5]

  // create a for loop that executes pwd_length times.
  // each iterate pick a random number between 0 and the length of all_characters
  // append that letter to the end of new_password


  new_password="yay"

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
