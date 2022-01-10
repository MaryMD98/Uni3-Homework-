// Assignment Code

// Array of letters, numbers and special char to use to create password
// letters 0-25 , numbers 0-9 , special 0 - 21  total 0-57 
var randomString = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
                    "n","o","p","q","r","s","t","u","v","w","x","y","z",
                    "0","1","2","3","4","5","6","7","8","9",
                    "~","!","@","#","$","%","^","&","*","(",")","-","=",
                    "+","<",">","?","/","[","]","{","}"];

var generateBtn = document.querySelector("#generate");
var randomIndex = 0;
var stringSize = 0;

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

  //check if everything is selected
  //first random will choose between 0 - 0 if everything is selected
  // (0)specialChar , (1)numChar ,  (2)lowercaseChar , (3)uppercaseChar
  if(specialChar && numChar && lowercaseChar && uppercaseChar){

  }

  //check if lower or uppercase, if false on both only display nonaalphabet num
  // if true and true
  if(lowercaseChar && uppercaseChar){ // true on upper and lowercase letters
   
      if(specialChar && numChar){  // true and true include everthing

      } else if(specialChar && !numChar){ // true and false only include especial char

      } else if(!specialChar && numChar){ // false and true only include numbers
      
      } else { // false and false only include letters

      }

  } if(lowercaseChar && uppercaseChar){ // true on upper and lowercase letters
   
    if(specialChar && numChar){  // true and true include everthing

    } else if(specialChar && !numChar){ // true and false only include especial char

    } else if(!specialChar && numChar){ // false and true only include numbers
    
    } else { // false and false only include letters

    }

} if(lowercaseChar && uppercaseChar){ // true on upper and lowercase letters
   
  if(specialChar && numChar){  // true and true include everthing

  } else if(specialChar && !numChar){ // true and false only include especial char

  } else if(!specialChar && numChar){ // false and true only include numbers
  
  } else { // false and false only include letters

  }

}

  

  // create random numbers and between 0 - 57
  // letters 0-25 , numbers 0-9 , special 0 - 21  total 0-57 
  // specialChar , numChar ,  lowercaseChar , uppercaseChar
  randomIndex = Math.floor(Math.random() * 57);

    // specialChar , numChar ,  lowercaseChar , uppercaseChar
    randomIndex = Math.floor(Math.random() * 57);

      // specialChar , numChar ,  lowercaseChar , uppercaseChar
  randomIndex = Math.floor(Math.random() * 57);


  
    return 
  }


generateBtn.addEventListener("click", writePassword);
