function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}


function sayHiToGrandma(string) {

  var uppercase = "HELLO!";
  if (uppercase.toUpperCase() === uppercase) {
  return "YES INDEED!";
}
  var lowercase = "hello!";
  else if (lowercase.toLowerCase() === lowercase) {
    return "I can't hear you!";
  }

  else if (mixedCase.toLowerCase() === mixedCase) {
    return "I love you, too."
}  else if (mixedCase.toUpperCase() === mixedCase) {
     return "I love you, too.";
}
}

var uppercase = "HELLO!";
var lowercase = "hello";
var mixedCase = "I love you, Grandma.";
