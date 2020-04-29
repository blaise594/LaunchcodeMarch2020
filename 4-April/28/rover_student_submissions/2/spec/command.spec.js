const assert = require(`assert`);
const Command = require(`../command.js`);

describe(`Command class`, function(){

  it(`throws error if command type is NOT passed into constructor as the first parameter`, function(){
    assert.throws(
      function(){
        new Command();
      },
      {
        message: `Command type required.`
      }
    );
  });

  it(`constructor sets command type`, function(){
    const output = new Command(`MOVE`);
    assert.strictEqual(output.commandType,output.getCommandType());
  });

  it(`constructor sets a value passed in as the 2nd argument`, function(){
    const output = new Command(`MOVE`,5000);
    assert.strictEqual(output.value,output.getValue());
  })

});
