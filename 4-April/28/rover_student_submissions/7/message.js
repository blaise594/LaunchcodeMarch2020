class Message {
  constructor(name,commands) {
    this.name = name;
        if (!name) {
      throw Error("Name required.");
    }
    this.commands = commands;
    if (Array.isArray(commands) !== true){
    throw Error("Not an array");
    }
  }

}

module.exports = Message;