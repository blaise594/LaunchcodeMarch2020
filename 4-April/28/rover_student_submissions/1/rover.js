class Rover {
  constructor(position) {
    this.position = position;
    this.mode = "NORMAL";
    this.generatorWatts = 110;
  }

  receiveMessage(message) {
    let emptyObj = {results:[]};
    emptyObj.message = message.name;
    let messageContainer = message.commands;
    if (typeof(messageContainer.length) === "undefined"){
      messageContainer = [message.commands];
    }
    for (let index = 0; index < messageContainer.length; index++){
      let messsageName = messageContainer[index].commandType
      let resultsObj = {
        message: messsageName,
        completed: true,
        mode: this.mode,
        generatorWatts: this.generatorWatts,
        position: this.position
      }

      if (messageContainer[index].commandType === "STATUS_CHECK"){

      } else if (messageContainer[index].commandType === "MODE_CHANGE"){
        this.mode = messageContainer[index].value;
        resultsObj.mode = this.mode;
      } else if (messageContainer[index].commandType === "MOVE" && this.mode === "LOW_POWER"){
        resultsObj.completed = false;
      } else if (messageContainer[index].commandType === "MOVE" && this.mode === "NORMAL"){
        this.position = messageContainer[index].value;
        resultsObj.position = this.position;
      } else {
        resultsObj.message = "unknown command";
        resultsObj.completed = false;
      }
      emptyObj.results.push(resultsObj);
    }
    return emptyObj;

  }
}

module.exports = Rover;