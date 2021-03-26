var specChar = ["!", "@", "#", "$", "%", "^", "&", "*"];
var numb = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//My final array



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Add new code below

function generatePassword() {
  var finalpass = [];
  // if/else statements will probably go here

  //Ask user how long they want the password to be
  var passlength = prompt("Enter your password length here.")
  if (passlength > 8 && passlength < 128) {

    //if it meets the requirements, then continue (how do I make it stop?)

    //Do they want special characters?
    var spec = confirm("Click OK to confirm including special characters.")
    var numeric = confirm("Click OK to confirm including numeric characters.")
    var lower = confirm("Click OK to confirm including lowercase characters.")
    var upper = confirm("Click OK to confirm including uppercase characters.")
    //if user wants special characters, add spec char array to final array
    
    if (spec) {
      finalpass = finalpass.concat(specChar);
    }

    console.log(finalpass);

    if (numeric) {
      finalpass = finalpass.concat(numb);
    }

    console.log(finalpass);

    if (lower) {
      finalpass = finalpass.concat(lowerc)
    }

    console.log(finalpass);

    if (upper) {
      finalpass = finalpass.concat(upperc)
    }

    console.log(finalpass);

    
    var finalpassword = "";

    for (i = 0; i < passlength; i++) {
      var index = Math.floor(Math.random() * finalpass.length);
        finalpassword = finalpassword + finalpass[index]
    }
    
    console.log(finalpassword)
    //Go over final array and get out password length amount of letters

    return finalpassword
  }

  else {
    alert("Password must be at least 8 characters and no more than 128 characters.")
  }
}//End of function generatePassword





//Concat characters that they want to use into new array (newchar)
//Select random characters from the newchar array and put them into finalpass array as a STRING
//Loop the above function until the length of the password reaches the length the user puts in