let myString = 6786870;
// Define the function as reverseCharacters. Give it one parameter, which will be the string to reverse.
function reverseCharacters(stringToReverse){
  
  //Add an if statement to reverseCharacters to check the typeof the parameter.
  if(typeof(stringToReverse)=="string"){
    //split the string into an array
    let arrayOfLetters = stringToReverse.split('');
    //then reverse the array
    let reversedArrayOfLetters = arrayOfLetters.reverse();
    // Use join to create the reversed string
    let reversedString = reversedArrayOfLetters.join('');
    //return that string from the function.
    return reversedString;
  }
  //If typeof is ‘number’
  else{
      //convert the parameter to a string
      //reverse the characters
      //then convert it back into a number.
      //let convertedNumber = Number(stringToReverse.toString().split('').reverse().join(''));
	  // Optional: Use method chaining to reduce the lines of code within the function.
      return Number(stringToReverse.toString().split('').reverse().join(''));
  }
  
}

console.log(reverseCharacters(myString));
