function generatePassword() {
    var numericCharacters = "0123456789";
    var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    var specialCharacters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    var possibleCharacters = "";
    var length = 12; // default length
  
    // ask the user if they want to use the default settings
    var useDefault = confirm(
      "Do you want to use the default settings?\n12 characters, all character types"
    );
    
    // if the user does not want to use the default settings, prompt for length
    if (!useDefault) {
      length = prompt("How many characters do you want in your password?\n(Minimum: 8, Maximum: 128)");
  
      // validate the length
      if (length === null) {
        // user clicked cancel
        return "";
      } else if (length < 8 || length > 128 || isNaN(length)) {
        // length is not valid
        alert("Invalid length! Password length must be between 8 and 128.");
        return "";
      }
    }
     // concatenate all possible characters based on user choices
     if (useDefault || confirm("Do you want to include numeric characters?")) {
        possibleCharacters += numericCharacters;
      }
      if (useDefault || confirm("Do you want to include uppercase characters?")) {
        possibleCharacters += uppercaseCharacters;
      }
      if (useDefault || confirm("Do you want to include lowercase characters?")) {
        possibleCharacters += lowercaseCharacters;
      }
      if (useDefault || confirm("Do you want to include special characters?")) {
        possibleCharacters += specialCharacters;
      }
    
      // generate the password
      var password = "";
      for (var i = 0; i < length; i++) {
        password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
      }
    
      return password;
    }
    // get references to DOM elements
  var generateButton = document.getElementById("generate");
  var passwordTextarea = document.getElementById("password");
  
  // add event listener to button
  generateButton.addEventListener("click", function() {
    var password = generatePassword();
    passwordTextarea.value = password;
  });