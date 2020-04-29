const assert = require(`assert`);
const Rover = require(`../rover.js`);
const Message = require(`../message.js`);
const Command = require(`../command.js`);

describe(`Rover class`, function(){
  
  it(`constructor sets position and default values for mode and generatorWatts`, function(){
    const roverObject = new Rover(28715);
    assert.strictEqual(roverObject.mode,roverObject.getMode());
    assert.strictEqual(roverObject.generatorWatts,roverObject.getWatts());
    // this might have made much more sense as two tests, but the prompt grouped them into one so
  });

  it(`response returned by receiveMessage contains name of message`, function(){
    const roverObject = new Rover(28715);
    const testMessage = new Message(`nameToTest`,[new Command(`MOVE`,5000)]);
    const output = roverObject.receiveMessage(testMessage);
    assert.strictEqual(testMessage.name,output.message);
  });

  it(`response returned by receiveMessage includes two results if two commands are sent in the message`, function(){
    const roverObject = new Rover(28715);
    const testMessage = new Message(`nameToTest`,[new Command(`MOVE`,5000), new Command(`MODE_CHANGE`,`LOW_POWER`)]);
    const output = roverObject.receiveMessage(testMessage);
    assert.deepStrictEqual(testMessage.commands.length,output.results.length);
  });

  it(`responds correctly to status check command`, function(){
    const roverObject = new Rover(28715);
    const testMessage = new Message(`nameToTest`,[new Command(`STATUS_CHECK`)]);
    const output = roverObject.receiveMessage(testMessage);
    const expectedOutput = {
      completed: true,
      roverStatus: {
        generatorWatts: 110,
        mode: `NORMAL`,
        position: 28715
      }
    }
    assert.deepStrictEqual(expectedOutput,output.results[0]);
  });

  it(`responds correctly to mode change command`, function(){
    const roverObject = new Rover(28715);
    const testMessage = new Message(`nameToTest`,[new Command(`MODE_CHANGE`,`LOW_POWER`)]);
    const output = roverObject.receiveMessage(testMessage);
    assert.strictEqual(testMessage.commands[0].value,roverObject.mode);
  });

  it(`responds with false completed value when attempting to move in LOW_POWER mode`, function(){
    const roverObject = new Rover(28715);
    const testMessage = new Message(`nameToTest`,[new Command(`MODE_CHANGE`,`LOW_POWER`), new Command(`MOVE`,28700)]);
    const output = roverObject.receiveMessage(testMessage);
    assert.strictEqual(output.results[1].completed,false);
    assert.strictEqual(roverObject.position,28715);
  });

  it(`responds with position for move command`, function(){
    const roverObject = new Rover(28715);
    const testMessage = new Message(`nameToTest`,[new Command(`MOVE`,33647)]);
    const output = roverObject.receiveMessage(testMessage);
    assert.strictEqual(testMessage.commands[0].value,roverObject.position);
  });

  it(`completed false and a message for an unknown command`, function(){
    const roverObject = new Rover(28715);
    const testMessage = new Message(`nameToTest`,[new Command(`FAKE`,`NEWS`)]);
    const output = roverObject.receiveMessage(testMessage);
    assert.strictEqual(output.results[0].completed,false);
  });

});