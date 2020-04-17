let myString = 'apple';
// Define the function as reverseCharacters. Give it one parameter, which will be the string to reverse.
function reverseCharacters(stringToReverse){
  //split the string into an array
  let arrayOfLetters = stringToReverse.split('');
  //then reverse the array
  let reversedArrayOfLetters = arrayOfLetters.reverse();
  // Use join to create the reversed string
  let reversedString = reversedArrayOfLetters.join('');
  //return that string from the function.
  return reversedString;
}

console.log(reverseCharacters(myString));
