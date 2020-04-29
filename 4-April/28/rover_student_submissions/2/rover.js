class Rover {
  constructor(position, mode = `NORMAL`, generatorWatts = 110) {
    this.position = position;
    this.mode = mode;
    this.generatorWatts = generatorWatts;
  }
  getMode(){
    return this.mode;
  }
  getWatts(){
    return this.generatorWatts;
  }
  receiveMessage(messageObject) {
    const responseObject = {
      message: messageObject.name,
      results: []
    };
    for (let i = 0; i < messageObject.commands.length; i++) {
      if(messageObject.commands[i].commandType === `STATUS_CHECK`) {
        responseObject.results.push({
          completed: true,
          roverStatus: {
            mode: this.mode,
            generatorWatts: this.generatorWatts,
            position: this.position
          }
        })
      }else if(messageObject.commands[i].commandType === `MODE_CHANGE`) {
        this.mode = messageObject.commands[i].value;
        responseObject.results.push({
          completed: true
        })
      }else if(messageObject.commands[i].commandType === `MOVE`) {
        if(this.mode === `LOW_POWER`) {
          responseObject.results.push({
            completed: false
          })
        }else{
          this.position = messageObject.commands[i].value;
          responseObject.results.push({
            completed: true
          })
        }
      }else{
        responseObject.results.push({
          completed: false
        })
      }
    };
    return responseObject;
  }
}

module.exports = Rover;
