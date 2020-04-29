const assert = require('assert');
const Command = require('../command.js');


describe("Command class", function() {
//test 1 
  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    assert.throws(function(){ new Command();},
      {
        message: 'Command type required.'
      }
    );
  });
//test 2
  it('constructor sets command type', function(){
    assert.strictEqual(new Command("MOVE").commandType, 'MOVE')
    })
//test 3
  it('constructor sets a value passed in as the 2nd argument', function(){
   assert.strictEqual(new Command("MOVE",12345).value, 12345);
  })  

}); 