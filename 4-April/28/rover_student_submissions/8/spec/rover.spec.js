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


// Test 10

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
    assert.deepEqual(response,correctOutput);
  });


// Test 11

  it ("responds correctly to mode change command", function (){
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
    let message = new Message('Mode Change', commands);
    let newRover = new Rover(98382);
    let response = newRover.receiveMessage(message);
    assert.strictEqual(newRover.mode,'LOW_POWER');
    assert.strictEqual(response.results[0].completed, true);
  });


// Test 12

  it ("responds with false completed value when attempting to move in LOW_POWER mode", function (){
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 12345)];
    let message = new Message('Mode Change', commands);
    let newRover = new Rover(98382);
    let response = newRover.receiveMessage(message);
    assert.strictEqual(response.results[1].completed, false);
  });


// Test 13

  it ("responds with position for move command", function(){
    let commands = [new Command('MOVE', 12345)];
    let message = new Message('Mode Change', commands);
    let newRover = new Rover(98382);
    let response = newRover.receiveMessage(message);
    assert.strictEqual(newRover.position, 12345);
    assert.strictEqual(response.results[0].completed, true);    
  });
});