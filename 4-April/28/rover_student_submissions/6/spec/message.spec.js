const assert = require('assert');
const Message = require('../message.js');
const Command = require('../command.js');

describe("Message class", function() {

  // test 4
  it("throws error if a name is NOT passed into the constructor as the first parameter", function() {
    assert.throws(
      function() {
        new Message();
      },
      {
        message: 'Message name required.'
      }
    );
  });

  // test 5
  it("constructor sets name", function() {
    const message = new Message("one");

    assert.strictEqual(message.name, "one");
  });

  // test 6
  it("contains a commands array passed into the constructor as 2nd argument", function() {
    const message = new Message("one", [new Command("MOVE", 5)]);

    assert.deepEqual(message.commands, [new Command("MOVE", 5)]);
  });  

});