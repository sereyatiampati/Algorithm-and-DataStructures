// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



    // Method 1: using built in methods
// function reverse(str) 
// {
//    return str.split("").reverse().join("")
// }

 //Method 3: using the latest for-loop syntax
// function reverse(str) {
    
//      let reversedString= "";
//      for (let character of str) {
//        reversedString = character + reversedString;             
//      }
//      return reversedString;
// }

    //Method 2: using for-loop
// function reverse(str) 
// {
//     let reversedString = "";
//     for (let i = str.length - 1; i >= 0; i--){
//         reversedString += str[i];
//     }
//     return reversedString;
// }

//Method 4: using reduce method
function reverse(str) {
    debugger;
    return str.split('').reduce((rev, char) => char + rev, '');
} 

module.exports = reverse;
reverse("apple");
