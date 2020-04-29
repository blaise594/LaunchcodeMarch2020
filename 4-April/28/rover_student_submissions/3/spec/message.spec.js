const assert = require('assert');
const Message = require('../message.js');
const Command = require('../command.js');

describe("Message class", function() {
  it ("throws error if a name is NOT passed into the constructor as the first parameter", function(){
    assert.throws(
      function() {
        new Message();
      },
      {
        message: "Name is required."
      }
    );
  });
  it("constructor sets name", function() {
    let constructorCheck = new Message('tom');
    assert.strictEqual(constructorCheck.name, 'tom');
  });
  it("contains a commands array passed into the constructor as 2nd argument", function() {
    // let commandsArray = ["MOVE","STATUS_CHECK", "MODE_CHANGE" ];
    let commandsArray = [new Command("STATUS_CHECK", 42)];
    let constructorCheck = new Message('tom', commandsArray);
    assert.strictEqual(constructorCheck.commands, commandsArray);
  });
})