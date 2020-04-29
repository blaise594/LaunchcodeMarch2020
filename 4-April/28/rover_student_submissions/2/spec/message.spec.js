const assert = require(`assert`);
const Message = require(`../message.js`);

describe(`Message class`, function(){
  
  it(`throws error if a name is NOT passed into the constructor as the first parameter`, function(){
    assert.throws(
      function(){
        new Message();
      },
      {
        message: 'Message name required.'
      }
    );
  });

  it(`constructor sets name`, function(){
    const output = new Message(`message name`)
    assert.strictEqual(output.name,output.getName());
  });

  it(`contains a commands array passed into the constructor as 2nd argument`, function(){
    const arrayOfCommands = [`commandOne`,`commandTwo`];
    const output = new Message(`message name`, arrayOfCommands);
    assert.strictEqual(output.commands,output.getCommands());
  });

});
