// Randomly Select ID Numbers
// Each candidate was assigned an ID number, which is stored in the candidate’s data file and in the idNumbers array. 
// Write the selectRandomEntry function to select a random entry from the idNumbers array. Review the Combining Math Methods section if you need a reminder on how to do this.
// Use the function to select three ID numbers.  Store these selections in a new array, making sure to avoid repeated numbers. No animal can be selected more than once!
// Tip: arrayName.includes(item) can be used to check if the array already contains item. A while loop can keep the selection process going until the desired number of entries have been added to the array.
// Code your selectRandomEntry function here:
// Here are the candidates and the 'animals' array:
let candidateA = {
    'name':'Gordon Shumway',
    'species':'alf',
    'mass':90,
    'o2Used':function(hrs){return 0.035*hrs},
    'astronautID':414
  };
  let candidateB = {
    'name':'Lassie',
    'species':'dog',
    'mass':19.1,
    'o2Used':function(hrs){return 0.030*hrs},
    'astronautID':503
  };
  let candidateC = {
    'name':'Jonsey',
    'species':'cat',
    'mass':3.6,
    'o2Used':function(hrs){return 0.022*hrs},
    'astronautID':796
  };
  let candidateD = {
    'name':'Paddington',
    'species':'bear',
    'mass':31.8,
    'o2Used':function(hrs){return 0.047*hrs},
    'astronautID':291
  };
  let candidateE = {
    'name':'Pete',
    'species':'tortoise',
    'mass':417,
    'o2Used':function(hrs){return 0.010*hrs},
    'astronautID':599
  };
  let candidateF = {
    'name':'Hugs',
    'species':'ball python',
    'mass':2.3,
    'o2Used':function(hrs){return 0.018*hrs},
    'astronautID':890
  };
  
  
let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
  // Code your template literal and console.log statements:
function selectRandomEntry(arrayOfNumbers){
    let randomIndex=Math.floor(Math.random()*arrayOfNumbers.length);
    return arrayOfNumbers[randomIndex];
  }
  let idNumbers = [291, 414, 503, 599, 796, 890];

  //console.log(selectRandomEntry(idNumbers));
  function generate3RandomIds(){
    let randomlyChosenIds = [];
  
    while(randomlyChosenIds.length<3){
      idToStore=selectRandomEntry(idNumbers);
      if(!randomlyChosenIds.includes(idToStore)){
        randomlyChosenIds.push(idToStore);
      }
    }
    return randomlyChosenIds;
  }


//Build a Crew Array
//Design a buildCrewArray function that takes two arrays as parameters. 
//These hold the randomly selected ID numbers and the candidate objects.
function buildCrewArray(randIdNumbers, candidates){
    
    //Store these animals in a crew array,
    let spaceCrewAnimals = [];
    //Use one or more loops to check which animals hold the lucky ID numbers. They will be going on the space mission! 
    //console.log(candidates[0].astronautID);
    for (let index = 0; index < randIdNumbers.length; index++) {
        
        for (let j = 0; j < candidates.length; j++) {
            
            if(candidates[j].astronautID==randIdNumbers[index]){
                spaceCrewAnimals.push(candidates[j].name);
            }    
        }
            
    }
    

    //and then return that array.
    return spaceCrewAnimals;

}
luckyNumbers=generate3RandomIds();
console.log(luckyNumbers);
// console.log(buildCrewArray(luckyNumbers, animals));
let crewNames=buildCrewArray(luckyNumbers, animals);
//console.log(`${crewNames[0]} , ${crewNames[1]} , ${crewNames[2]} are going to space!`);
let sentence='';
for (let index = 0; index < crewNames.length; index++) {
    if(index==2){
        sentence+=`and `;
    }
    sentence+=`${crewNames[index]}`;
    if(index!=2){
        sentence+=`, `
    }
}
sentence+=`are going to space!`;
console.log(sentence);

  
  
  