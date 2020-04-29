const assert = require('assert');
const Message = require('../message.js');

describe("Message Class", function(){
//test 4
it('throws error if a name is NOT passed in the the constructor as the first parameter', 
  function(){
    assert.throws( function(){new Message()},{ message:'Message name required'})
  })
//test 5
  it('constructor sets name', function(){
    assert.strictEqual(new Message("Test message for name").name, "Test message for name");
  })
//test 6
  it('contains a commands array passed into the constructor as 2nd argument', function(){
    assert.deepStrictEqual(new Message("null", ['test1', "test2", 'command_1']).commands, ['test1', "test2", 'command_1'] )
  })
}); 