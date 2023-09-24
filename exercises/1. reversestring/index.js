// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) 
{
    // Method 1: using built in methods
   return str.split("").reverse().join("")

    //Method 2: using for-loop
    // let reversedString = "";
    // for (let i = str.length - 1; i >= 0; i--){
    //     reversedString += str[i];
    // }
    // return reversedString;


}

module.exports = reverse;
// console.log(reverse("apple"));
