

function favWord(){
var greeting = prompt("enter any word here");
var numChars = greeting.match(/[a-zA-Z]/g).length;
var index = greeting.charAt(4);
var lower = greeting.toLowerCase();
var upper = greeting.toUpperCase();
    alert(greeting);
    alert("There are " + numChars + " characters in the word");
    alert("The third character is '" + index + "' ");
    alert("Lowercase: " + lower);
    alert("Uppercase: " + upper);
    alert(greeting + " has been my favorate word since before I can remember!");
    alert(greeting.substring(2, 5));
}
favWord();