// Assignment Code

// Array of letters, numbers and special char to use to create password
var randomString = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
                    "n","o","p","q","r","s","t","u","v","w","x","y","z",
                    "0","1","2","3","4","5","6","7","8","9",
                    "~","!","@","#","$","%","^","&","*","(",")","-","=",
                    "+","<",">","?","/","[","]","{","}"];

var generateBtn = document.querySelector("#generate");
var index = 0;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// How many characters would you like your password to contain?
// window will ask for user input and bbutton choise to cancel and ok
// character of 8 to 128 size long
var sizeOfPassword = window.prompt("How many characters would you like your password to contain?");

// Click OK to confirm including sprecial characters.
//promp includes cancel and ok buttons
var specialChar = window.confirm("Click OK to confirm including sprecial characters.");

// click ok to confirm including numeric characters.
var numChar = window.confirm("Click OK to confirm including numeric characters.");

// click OK to confirm including lowercase characters.
var lowercaseChar = window.confirm("Click OK to confirm including lowercase characters.");

// click OK to confirm including uppercase characters.
var uppercaseChar = window.confirm("Click OK to confirm including uppercase characters.");

// after all this is has been responded, then password shows in page
// function will generate password based on user criteria.
// will return password value
function generatePassword(){
  // create random numbers and match it to the randomString
    index = Math.floor(Math.random() * randomString.length);
  
    return 
  }


generateBtn.addEventListener("click", writePassword);