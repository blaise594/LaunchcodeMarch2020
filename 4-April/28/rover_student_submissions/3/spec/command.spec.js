const assert = require('assert');
const Command = require('../command.js');

describe("Command class", function() {

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
  it("constructor sets command type", function() {
    let constructorCheck = new Command("yes"); //creates a new object via the Command class and sets a commandtype
    assert.strictEqual(constructorCheck.commandType,"yes"); //verifies that the set commandtype was passed via the constructor
  });
  it("constructor sets a value passed in as the 2nd argument", function() {
    let constructorCheck = new Command("yes", 5);
    assert.strictEqual(constructorCheck.value, 5);
  });
});