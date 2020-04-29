const assert = require('assert');
const Message = require('../message.js');

describe("Message class", function() 
{

  it("throws error if a name is NOT passed into the constructor as the first parameter",      function() 
  { assert.throws(
      function() {
        new Message();
      },
      {
        message: 'Name required.'
      }
    );
    
  });
 it("constructor sets name",  function() 
  { let message = new Message("Test Message with two commands",["MOVE"]);
    let answer = "Test Message with two commands";
  assert.strict(message.name,answer)
    
  });

it("contains a commands array passed into the constructor as 2nd argument",  function() 
  { let message = new Message("Test Message with two commands",["MOVE"]);
    let answer = ["MOVE"];
  assert.strict(message.commands,answer)
    
  });




});
