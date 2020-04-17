//Part a
//Create a findMinValue function with an array of numbers as its parameter. 
function findMinValue(numArray){
  let smallestNum = numArray[0];
  //The function should iterate through the array and return the minimum value from the array. 
  for (let index=1; index<numArray.length; index++){
    if(numArray[index]<smallestNum){
      smallestNum=numArray[index];
    }
  }
  return smallestNum;
}

//Part B
//Create a sortArray function with an array of numbers as its parameter. Within this function:
function sortArray(unsortedNumArray){
  //Define a new, empty array to hold the final sorted numbers.
  let finalSortedNumbers=[]; 
  
  //Repeat parts 2 & 3 until the old array is empty.
  while(unsortedNumArray.length != 0){
    //Use findMinValue to find the minimum value in the old array.
    let minimumValue = findMinValue(unsortedNumArray);
    //Add the minimum value to the new array,
    finalSortedNumbers.push(minimumValue);
    //and remove the minimum value from the old array.
    unsortedNumArray.splice(unsortedNumArray.indexOf(minimumValue),1);
  }
  //Return the new sorted array.
  return finalSortedNumbers;
}

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

console.log(sortArray(nums3));