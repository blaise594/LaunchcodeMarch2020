
//rover class holds position, mode, and generator watts.  Only parameter is position.  Position is the current position.  Position is updated with number that is coordinate of new position to move to.  
class Rover {
  constructor(position){
    this.position=position;
    this.mode='NORMAL';
    this.generatorWatts = 110;
  }

//receiveMessage takes in message and returns response to command center.  
receiveMessage(message){
   let messageName = message.name;
   let commands = message.commands;
   let commandResults =[ ];
  
  //STATUS_CHECK command requires deliver of object of Rover class with current property values
  for(const command in commands){
    if(commands[command].commandType === 'STATUS_CHECK'){
    commandResults.push({
      'completed': true, roverStatus: {
        'mode': this.mode,
        'generatorWatts': this.generatorWatts,
        'position' : this.position
      }
    });
  //MODE_CHANGE command changes mode to either "LOw_POWER" or "NORMAL requires a boolean response"
     } else if (commands[command].commandType === 'MODE_CHANGE') {
          commandResults.push({'completed': true})
          this.mode = commands[command].value;
     }
//"MOVE command is coupled with a number value that updates the position property of Rover class if in NORMAL MODE returns boolean completed.  If LOw_POWER, position is not updated and return completed is false.   
      else if (commands[command].commandType === 'MOVE'){
        if(this.mode === 'LOW_POWER'){
           commandResults.push({'completed': false});
         } else if(this.mode ==='NORMAL') {
           commandResults.push({'completed': true});
           this.position = commands[command].value;
         }
     }
  }
   return {
     "message": message.name,  
     "results": commandResults
   }
   }
};


module.exports = Rover;