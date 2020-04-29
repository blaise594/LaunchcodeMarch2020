 class Rover {
  constructor(position) {
    this.mode = "NORMAL";
    this.generatorWatts = 110;
    this.position = position;
  }
  receiveMessage(message){
    let completed;
    let newObj;
    let newArray = [];
    let array = message.commands;
    let count = array.length;
    let resultObj;
    let results = [];


    for (let i = 0; i<count; i++)
  {
    let obj = array[i];

    if (obj.name === "STATUS_CHECK"){
    let mode = this.mode;
    let generatorWatts = this.generatorWatts;
    let roverStatus = {mode:mode, generatorWatts: generatorWatts, position: this.position };
    completed = true;
    newObj = {completed:completed, roverStatus: roverStatus};
    results.push(newObj);
    
   }
   else if (obj.name === "MODE_CHANGE"){
    let value = obj.value;
    completed = true;
    this.mode = value;
     newObj = {completed:completed };
     results.push(newObj);
    }
   else if (obj.name === "MOVE")
    {
     let value = message.value;
     this.position = value;
    if (this.mode === "LOW_POWER")
      { completed = false; }
      else {completed = true;} 
    newObj = {completed:completed };
    results.push(newObj);
    }
      
     resultObj = { name: message.name, results:results};

     
   
    }
   
    
     return resultObj;
  }
}  
module.exports = Rover;