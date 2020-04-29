const assert = require('assert');
const Message = require('../message.js');

describe("Message class", function() {

  it("throws error if a name is NOT passed into the constructor as the first parameter", function() {
    assert.throws(
      function() {
        new Message();
      },
      {
        message: 'Name is required.'
      }
    );
  });

  it("constructor sets name", function(){
    let checkName = new Message ('abc', 123);
    assert.strictEqual(checkName.name, 'abc')
  });

  it("contains a commands array passed into the constructor as 2nd argument", function(){
    let arr = ['MOVE', 'STATUS_CHECK', 'MODE_CHANGE'];
    let checkCommands = new Message ('abc', arr[0]);
    assert.strictEqual(checkCommands.commands, 'MOVE')
  });

});
