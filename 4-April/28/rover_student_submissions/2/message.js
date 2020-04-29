class Message {
  constructor(name, commands) {
    this.name = name;
    if (!name) {
      throw Error(`Message name required.`);
    }
    this.commands = commands;
  }
  getName(){
    return this.name;
  }
  getCommands(){
    return this.commands;
  }
}

module.exports = Message;
