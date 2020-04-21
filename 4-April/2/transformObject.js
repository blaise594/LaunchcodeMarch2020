let candidateA = {
    'name':'Gordon Shumway',
    'species':'alf',
    'mass':90,
    'astronautID':414
  };
  let candidateB = {
    'name':'Lassie',
    'species':'dog',
    'mass':19.1,
    'astronautID':503
  };
  let candidateC = {
    'name':'Jonsey',
    'species':'cat',
    'mass':3.6,
    'astronautID':796
  };
  let candidateD = {
    'name':'Paddington',
    'species':'bear',
    'mass':31.8,
    'astronautID':291
  };
  let candidateE = {
    'name':'Pete',
    'species':'tortoise',
    'mass':417,
    'astronautID':599
  };
  let candidateF = {
    'name':'Hugs',
    'species':'ball python',
    'mass':2.3,
    'astronautID':890
  };

  let candidates=[candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];
  
  //find candidate with id 599
  //iterate through each candidate object
  for (let index = 0; index < candidates.length; index++) {
    //candidate were at within has an id of 599  
    if(candidates[index].astronautID==599){
        //then print your 
        console.log(candidates[index].name);
      }
      
  }
