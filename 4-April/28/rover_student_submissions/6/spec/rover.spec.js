const assert = require('assert');
const Message = require('../message.js');
const Command = require('../command.js');
const Rover = require('../rover.js');

describe("Rover class", function() {

  // test 7
  it("constructor sets position and default values for mode and generatorWatts", function() {
    const rover = new Rover(0);

    assert.deepEqual(
      {
        "position": rover.position,
        "mode": rover.mode,
        "generatorWatts": rover.generatorWatts 
      },
      {
        "position": 0,
        "mode": "NORMAL",
        "generatorWatts": 110
      }
    );
  });

  // test 8
  it("response returned by receiveMessage contains name of message", function() {
    const rover = new Rover(0);
    const response = rover.receiveMessage(new Message("one", [new Command("MOVE", 5)]));

    assert.strictEqual(response.message, "one");
  });

  // test 9
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    const rover = new Rover(0);
    const commands = [new Command("MOVE", 5), new Command("MOVE", 5)];
    const message = new Message("one", commands);
    const response = rover.receiveMessage(message);

    assert.strictEqual(response.message, "one");
  });  

  // test 10
  it("responds correctly to status check command", function() {
    const rover = new Rover(0);
    const commands = [new Command("STATUS_CHECK")];
    const message = new Message("one", commands);
    const response = rover.receiveMessage(message);

    assert.deepEqual(response.results[0], {
      "completed": true,
      "roverStatus": {
        "position": 0,
        "mode": "NORMAL",
        "generatorWatts": 110
      }
    });
  });  

  // test 11
  it("responds correctly to mode change command", function() {
    const rover = new Rover(0);
    const commands = [new Command("MODE_CHANGE", "LOW_POWER")];
    const message = new Message("one", commands);
    const response = rover.receiveMessage(message);

    assert.deepEqual(rover.mode, "LOW_POWER");
  });  

  // test 12
  it("responds with false completed value when attempting to move in LOW_POWER mode", function() {
    const rover = new Rover(0);
    const commands = [new Command("MODE_CHANGE", "LOW_POWER"), new Command("MOVE", 5)];
    const message = new Message("one", commands);
    const response = rover.receiveMessage(message);

    assert.deepEqual(response.results[1], {"completed": false});
  });  

  // test 13
  it("responds with position for move command", function() {
    const rover = new Rover(0);
    const commands = [new Command("MOVE", 5)];
    const message = new Message("one", commands);
    const response = rover.receiveMessage(message);

    assert.deepEqual(rover.position, 5);
  }); 

  // test 14
  it("completed false and a message for an unknown command", function() {
    const rover = new Rover(0);
    const commands = [new Command("GO", 5)];
    const message = new Message("unknown command", commands);
    const response = rover.receiveMessage(message);
    assert.deepEqual(response.results[0], {"completed": false});
  }); 
});