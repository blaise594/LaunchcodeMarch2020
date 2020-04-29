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

  it("constructor sets command type", function(){
    let checkCommandType = new Command('abc', 123);
    assert.strictEqual(checkCommandType.commandType, 'abc');
  });

  it("constructor sets a value passed in as the 2nd argument", function(){
    let checkValue = new Command('abc', 123);
    assert.strictEqual(checkValue.value, 123);
  });

});
