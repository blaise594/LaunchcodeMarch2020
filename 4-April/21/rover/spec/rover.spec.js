const assert = require('assert');
const Message = require('../message.js');
const Command = require('../command.js');
const Rover = require('../rover.js');

describe("Rover class", function() {

// Test 7

  it("constructor sets position and default values for mode and generatorWatts", function() {
    let newRover = new Rover (98382);
    assert.strictEqual(newRover.position, 98382);
    assert.strictEqual(newRover.mode, "NORMAL");
    assert.strictEqual(newRover.generatorWatts, 110);
    });

//test 8

  it ("response returned by receiveMessage contains name of message", function() {
    let commands = [new Command('MODE_CHANGE'), new Command('STATUS_CHECK')];
    let message = new Message('Status Test', commands);
    let newRover = new Rover(98382);
    let response = newRover.receiveMessage(message).message;
      assert.strictEqual(response, message.name);
  });

// Test 9

  it ("response returned by receiveMessage includes two results if two commands are sent in the message", function (){
  let commands = [new Command('MODE_CHANGE'), new Command('STATUS_CHECK')];
    let message = new Message('Status Test', commands);
    let newRover = new Rover(98382);
    let response = newRover.receiveMessage(message).results.length;
      assert.strictEqual(response, 2);
  });


// Test 10 - For the STATUS_CHECK command, receiveMessage(message).results includes a roverStatus object describing the current state of the rover object --- mode, generatorWatts, and position. The test should check each of these for accuracy.
//     See the Rover Command Types table for more details.

  it ("responds correctly to status check command", function (){
    let commands = [new Command('STATUS_CHECK')];
    let message = new Message('Status Test', commands);
    let newRover = new Rover(98382);
    let response = newRover.receiveMessage(message).results[0];
    let correctOutput = {
        completed: true, 
        roverStatus: {
        mode: 'NORMAL', 
        generatorWatts: 110, 
        position: 98382
        }
    }
    assert.deepEqual(response, correctOutput);
  });


// Test 11

// "responds correctly to mode change command".

//     The test should check the completed property and rover mode for accuracy.
//     The rover has two modes that can be passed a values to a mode change command, 'LOW_POWER' and 'NORMAL'.

// Test 12

// "responds with false completed value when attempting to move in LOW_POWER mode".

//     The test should check the completed property for accuracy and confirm that the rover position did not change.
//     Use the Rover Modes table for guidance on how to handle move commands in different modes.

// Test 13

// "responds with position for move command".

//     A MOVE command will update the rover's position with the position value in the command.

  });