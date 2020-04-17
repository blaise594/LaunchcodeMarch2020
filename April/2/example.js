// let candidateA = {
//     'name':'Gordon Shumway',
//     'species':'alf',
//     'mass':90,
//     'astronautID':414
//   };
//   let candidateB = {
//     'name':'Lassie',
//     'species':'dog',
//     'mass':19.1,
//     'astronautID':503
//   };
//   let candidateC = {
//     'name':'Jonsey',
//     'species':'cat',
//     'mass':3.6,
//     'astronautID':796
//   };
//   let candidateD = {
//     'name':'Paddington',
//     'species':'bear',
//     'mass':31.8,
//     'astronautID':291
//   };
//   let candidateE = {
//     'name':'Pete',
//     'species':'tortoise',
//     'mass':417,
//     'astronautID':599
//   };
//   let candidateF = {
//     'name':'Hugs',
//     'species':'ball python',
//     'mass':2.3,
//     'astronautID':890
//   };

//   let candidates=[candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];
  
//   //find candidate with id 599
//   //iterate through each candidate object
//   for (let index = 0; index < candidates.length; index++) {
//     //candidate were at within has an id of 599  
//     if(candidates[index].astronautID==599){
//         //then print your 
//         console.log(candidates[index].name);
//       }
      
//   }
const oldScoreKey = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
 };

  function transformObject(oldObject) {
    let newObject = {};
    let alphabet = ' abcdefghijklmnopqrstuvwxyz ';
    for (i = 0; i < alphabet.length; i++) {
      newObject[alphabet[i]] = 0;
    }
    for (i in oldObject) {
    //left out to keep clean
    }
    return newObject;
  }
  newObject = transformObject(oldScoreKey);
  console.log(newObject);