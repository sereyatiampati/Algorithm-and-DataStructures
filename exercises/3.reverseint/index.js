// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Method one using slice method
// function reverseInt(n) {
//     let numberStr = n.toString();
//     let isNegative = n < 0;
//     if (isNegative) {
//         numberStr = numberStr.slice(1); //remove the negative sign
        
//     }
//     // Reverse the characters in the string
//   let reversedStr = numberStr.split('').reverse().join('');

//   // Convert the reversed string back to an integer
//   let reversedInt = parseInt(reversedStr);

//   if (isNegative) {
//     reversedInt = -reversedInt
//   }
//         return reversedInt;
// }

//method 2 using MAth.sign


function reverseInt(n) {

    // Reverse the number string in the string
  let reversedStr = n.toString().split('').reverse().join('');

  // Convert the reversed string back to an integer

      return parseInt(reversedStr) * Math.sign(n);
}

console.log(reverseInt(-91));
module.exports = reverseInt;
