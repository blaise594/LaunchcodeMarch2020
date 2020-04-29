const assert = require('assert');
const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

describe("Rover class", function() {

  it("constructor sets position and default values for mode and generatorWatts", function() {
    let testRover = new Rover("1.2.3");
    assert.strictEqual(testRover.position, "1.2.3");
    assert.strictEqual(testRover.mode, "NORMAL");
    assert.strictEqual(testRover.generatorWatts, 110);
  });

  it("response returned by receiveMessage contains name of message", function() {
    let testRover = new Rover("1.2.3");
    let command1 = new Command("test1", "value1");
    let testMessage = new Message("messageName", command1);
    let testOutput = testRover.receiveMessage(testMessage)
    assert.strictEqual(testOutput.message, "messageName");
  });

  it("response returned by receiveMessage includes two results, if two commands are sent in message", function() {
    let testRover = new Rover("1.2.3");
    let command1 = new Command("test1", "value1");
    let command2 = new Command("test2", "value2");
    let commands = [command1, command2];
    let testMessage = new Message("messageName", commands);
    let testResults = testRover.receiveMessage(testMessage);
    assert.strictEqual(testResults.results.length, commands.length);
  });

  it("responds correctly to status check", function() {
    let testRover = new Rover("1.2.3");
    let command1 = new Command("STATUS_CHECK");
    let testMessage = new Message("STATUS_CHECK", command1);
    let messageRecieved = testRover.receiveMessage(testMessage);
    assert.strictEqual(messageRecieved.results[0].completed, true);
    assert.strictEqual(messageRecieved.results[0].position, testRover.position);
    assert.strictEqual(messageRecieved.results[0].mode, testRover.mode);
    assert.strictEqual(messageRecieved.results[0].generatorWatts, testRover.generatorWatts);
  });

  it("responds with correct status after MODE_CHANGE", function() {
    let testRover = new Rover("1.2.3");
    let command1 = new Command("MODE_CHANGE", "LOW_POWER");
    let testMessage = new Message("MODE_CHANGE", command1);
    let messageRecieved = testRover.receiveMessage(testMessage);
    assert.strictEqual(messageRecieved.results[0].completed, true);
    assert.strictEqual(testRover.mode, command1.value);
  });

  it("responds with false completed value, if attempt to move while in LOW_POWER mode", function() {
    let testRover = new Rover("1.2.3");
    let command1 = new Command("MODE_CHANGE", "LOW_POWER");
    let command2 = new Command("MOVE", "1.2.3.4");
    let commands = [command1, command2];
    let testMessage = new Message("MODE_CHANGE and MOVE", commands);
    let messageRecieved = testRover.receiveMessage(testMessage);
    assert.strictEqual(messageRecieved.results[1].completed, false);
    assert.strictEqual(testRover.position, "1.2.3");
  });

  it("responds with position for move command", function() {
    let testRover = new Rover("1.2.3");
    let command1 = new Command("MOVE", "1.2.3.4");
    let testMessage = new Message("MOVE", command1);
    let messageRecieved = testRover.receiveMessage(testMessage);
    assert.strictEqual(messageRecieved.results[0].completed, true);
    assert.strictEqual(testRover.position, command1.value);
  });

  it("responds with completed false and message 'unknown command'", function() {
    let testRover = new Rover("1.2.3");
    let command1 = new Command("FLY_HOME", "Take off Initiated!");
    let testMessage = new Message("FLY_HOME", command1);
    let messageRecieved = testRover.receiveMessage(testMessage);
    assert.strictEqual(messageRecieved.results[0].completed, false);
    assert.strictEqual(messageRecieved.results[0].message, "unknown command");
  });

});