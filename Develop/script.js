// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Password selection choice arrays

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specChar = ["!", "@", "#", "$", "%", "*", "+", "&"];
//var randomPass = "";
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var randomPass = "";
  var passLong = "";
  var long = "a"; //prompt("How long do you want your password to be");
//prompt for password length between 8-128, use if/else statment to get valid numbers

while (isNaN(long) || (long >= 128 || long <= 8)) {
 passLong = prompt("How long do you want your password to be");
console.log(passLong);
 long = parseInt(passLong);
console.log(long);

if (isNaN(long)) {
  alert("value is not a number");
}

if (long <= 128 && long >= 8) {
   console.log("password is valid");
} 
else {
 console.log("password is not valid");
 alert("password is not valid");
 }
}

var wantNumber = confirm("Do you want numbers in your password");
var wantLower = confirm("Do you want lowercase letters");
var wantUpper = confirm("Do you want uppercase letter");
var wantSpecial = confirm("Do you want special characters");

console.log(wantNumber);
console.log(wantLower);
console.log(wantUpper);
console.log(wantSpecial);

var passCharac = [number, lowCase, upCase, specChar]





if (!wantLower && !wantNumber && !wantUpper && !wantSpecial) {
  passCharac = alert("You must choose a criteria");
  writePassword();
}
// All 4 OPtions
else if (wantLower && wantSpecial && wantUpper && wantNumber) {
  passCharac = lowCase.concat(number, upCase, specChar);
}
// Only 3 Options
  else if (wantLower && wantSpecial && wantUpper) {
    passCharac = lowCase.concat(specChar, upCase);
}


else if (wantLower && wantSpecial && wantNumber) {
  passCharac = lowCase.concat(specChar, number);
}

else if (wantLower && wantUpper && wantUpper) {
  passCharac = lowCase.concat(upCase, number);
}

else if (wantSpecial && wantNumber && wantUpper) {
  passCharac = specChar.concat(number, Upcase);
}

// 2 Options
else if (wantLower && wantUpper) {
  passCharac = lowCase.concat(upCase);
}
else if (wantLower && wantSpecial) {
  passCharac = lowCase.concat(specChar);
}
else if (wantLower && wantNumber) {
  passCharac = lowCase.concat(number);
}
else if (wantUpper && wantSpecial) {
  passCharac = upCase.concat(specChar);
}
else if (wantUpper && wantNumber) {
  passCharac = upCase.concat(number);
}
else if (wantNumber && wantSpecial) {
  passCharac = number.concat(specChar);
}
// Only 1 option
else if (wantLower) {
  passCharac = lowCase;
}
else if (wantUpper) {
  passCharac = upCase;
}
else if (wantNumber) {
  passCharac = number;
}
else if (wantSpecial) {
  passCharac = specChar;
}

for (var i = 0; i < passLong; i++) {
  randomPass = randomPass + passCharac[Math.floor(Math.random() * passCharac.length)];

console.log(passCharac[Math.floor(Math.random()) * passCharac.length]);
}



console.log(passCharac);
return randomPass
}






 




















