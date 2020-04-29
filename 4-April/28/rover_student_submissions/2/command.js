class Command {
  constructor(commandType, value) {
    this.commandType = commandType;
    if (!commandType) {
      throw Error(`Command type required.`);
    }
    this.value = value;
  }
  getCommandType(){
    return this.commandType;
  }
  getValue(){
    return this.value;
  }
}

module.exports = Command;
