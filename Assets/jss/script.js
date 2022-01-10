// Assignment Code 

// Array of letters, numbers and special char to use to create password
// letters 0-25 , numbers 0-9 , special 0 - 21  total 0-57 
var letterString = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
                    "n","o","p","q","r","s","t","u","v","w","x","y","z"];

var numberString = ["0","1","2","3","4","5","6","7","8","9"];

var specialCharacter = ["~","!","@","#","$","%","^","&","*","(",")","-","=",
                        "+","<",">","?","/","[","]","{","}"];

var generateBtn = document.querySelector("#generate");
var randomStringCreated = "";
var randomOptIndex = 0;
var stringRandomIndex = 0;

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
  // check if there is entry and if number is between 8 and 128
  if(!sizeOfPassword){
    window.alert("Invalid Entry - Please Choose a Number");
    return;
  } else if (sizeOfPassword < 8 || sizeOfPassword > 128){
    window.alert("Invalid Entry - Please Choose a Number between 8 and 128");
    return;
  } else {
    stringSize = sizeOfPassword;
  }

  return ;
}

  
  // first check what string Array to use then check random and a pull letter from string
  // (0)specialChar , (1)numChar ,  (2)lowercaseChar , (3)uppercaseChar
  // letterString   numberString   specialCharacter      arrays
  // letters 0-25 , numbers 0-9 , special 0 - 21  total 0-57 
function randomOption (){
  randomOptIndex = Math.floor(Math.random() * 3);
  
  // add special character to string
  if(randomOptIndex == 0){
    //check if user is true on adding specialchar else run function again
    if(specialChar == true){
      //get another random number to get a letter on the special char array
      stringRandomIndex = Math.floor(Math.random() * 21);
      randomStringCreated = randomStringCreated.concat(specialCharacter[stringRandomIndex]);
    } else {
      // if user did not selected this option run function again
      randomOption();
    }
    
  // add Number character to string
  } else if(randomOptIndex == 1){
    //check if user is true on adding numberChar else run function again
    if(numChar == true){
      //get another random number to get a letter on the number char array
      stringRandomIndex = Math.floor(Math.random() * 9);
      randomStringCreated = randomStringCreated.concat(numberString[stringRandomIndex]);
    } else {
      // if user did not selected this option run function again
      randomOption();
    }

  // add Letter with lowercase character to string
  } else if(randomOptIndex == 2){
     //check if user is true on adding lowercase letters else run function again
     if(lowercaseChar == true){
      //get another random number to get a letter on the letter char array
      var lowercase = "";
      stringRandomIndex = Math.floor(Math.random() * 25);
      lowercase = letterString[stringRandomIndex];
      lowercase = lowercase.toUpperCase();
      randomStringCreated = randomStringCreated.concat(lowercase);
    } else {
      // if user did not selected this option run function again
      randomOption();
    }

  }
  if(randomOptIndex == 3){

    //check if user is true on adding lowercase letters else run function again
    if(lowercaseChar == true){
      //get another random number to get a letter on the letter char array
      var lowercase = "";
      stringRandomIndex = Math.floor(Math.random() * 25);
      lowercase = letterString[stringRandomIndex];
      lowercase = lowercase.toUpperCase();
      randomStringCreated = randomStringCreated.concat(lowercase);
    } else {
      // if user did not selected this option run function again
      randomOption();
    }

  }
}
  
// button with event listener to generate passwrod when pressed
generateBtn.addEventListener("click", writePassword);
