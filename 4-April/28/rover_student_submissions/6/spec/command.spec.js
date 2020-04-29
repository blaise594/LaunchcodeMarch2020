const assert = require('assert');
const Command = require('../command.js');

describe("Command class", function() {

  // test 1
  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    assert.throws(
      function() {
        new Command();
      },
      {
        message: 'Command type required.'
      }
    );
  });

  // test 2
  it("constructor sets command type", function() {
    const command = new Command("MOVE", 5);

    assert.strictEqual(command.commandType, "MOVE");
  });

  // test 3
  it("constructor sets a value passed in as the 2nd argument", function() {
    const command = new Command("MOVE", 5);

    assert.strictEqual(command.value, 5);
  });  

});