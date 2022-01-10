// Assignment Code 

// Array of letters, numbers and special char to use to create password
// letters 0-25 , numbers 0-9 , special 0 - 21  total 0-57 
var letterString = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
                    "n","o","p","q","r","s","t","u","v","w","x","y","z"];

var numberString = ["0","1","2","3","4","5","6","7","8","9"];

var specialCharacter = ["~","!","@","#","$","%","^","&","*","(",")","-","=",
                        "+","<",">","?","/","[","]","{","}"];

var generateBtn = document.querySelector("#generate");

var sizeOfPassword;
var specialChar;
var numChar;
var lowercaseChar;
var uppercaseChar;

var randomStringCreated = "";
var randomOptIndex = 0;
var stringRandomIndex = 0;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// after all this is has been responded, then password shows in page
// function will generate password based on user criteria.
// will return password value
function generatePassword(){

// How many characters would you like your password to contain?
// window will ask for user input and bbutton choise to cancel and ok
// character of 8 to 128 size long
sizeOfPassword = window.prompt("How many characters would you like your password to contain?");

// Click OK to confirm including sprecial characters.
//promp includes cancel and ok buttons
specialChar = window.confirm("Click OK to confirm including sprecial characters.");

// click ok to confirm including numeric characters.
numChar = window.confirm("Click OK to confirm including numeric characters.");

// click OK to confirm including lowercase characters.
lowercaseChar = window.confirm("Click OK to confirm including lowercase characters.");

// click OK to confirm including uppercase characters.
uppercaseChar = window.confirm("Click OK to confirm including uppercase characters.");

    // check if there is entry from user
    if(!sizeOfPassword){
      window.alert("Invalid Entry - Please Choose a Number");
      return;

    // check if number is between 8 and 128
    } else if (sizeOfPassword < 8 || sizeOfPassword > 128){
      window.alert("Invalid Entry - Please Choose a Number between 8 and 128");
      return;

    // check if user wrote no on the 4 questions
    } else if (!specialChar && !numChar && !lowercaseChar && !uppercaseChar){
      window.alert("Invalid Entry - Please Choose an Option to create the password");
      return;

    // everything good, run program 
    } else {

      // run for loops to add one letter at a time to string up to size of pasword chosen by user
      for(var i = 0; i < sizeOfPassword; i++){
        randomOption();
      }
    }

    // return string created
    return randomStringCreated;
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
      return;
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
      return;
    } else {
      // if user did not selected this option run function again
      randomOption();
    }

  // add Letter with lowercase character to string
  } else if(randomOptIndex == 2){
     //check if user is true on adding lowercase letters else run function again
     if(lowercaseChar == true){
      //get another random number to get a letter on the letter char array
      stringRandomIndex = Math.floor(Math.random() * 25);
      randomStringCreated = randomStringCreated.concat(letterString[stringRandomIndex]);
      return;
    } else {
      // if user did not selected this option run function again
      randomOption();
    }

  //  randomOptIndex == 3  ->  add Letter with Uppercase character to string, 
  } else {
    //check if user is true on adding uppercase letters else run function again
    if(uppercaseChar == true){
      //get another random number to get a letter on the letter char array
      var lowercase = "";

      stringRandomIndex = Math.floor(Math.random() * 25);
      lowercase = letterString[stringRandomIndex];
      lowercase = lowercase.toUpperCase();
      randomStringCreated = randomStringCreated.concat(lowercase);
      return;
    } else {
      // if user did not selected this option run function again
      randomOption();
    }
  }
}
  
// button with event listener to generate passwrod when pressed
generateBtn.addEventListener("click", writePassword);
