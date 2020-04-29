const assert = require('assert');
const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js')
describe('Rover class', function() {
  it('constructor sets position and default values for mode and generatorWatts', function() {
    let constructorCheck = new Rover('98382');
    assert.strictEqual(constructorCheck.position,'98382');
    assert.strictEqual(constructorCheck.mode, 'NORMAL');
    assert.strictEqual(constructorCheck.generatorWatts, 110);
  });
  it('response returned by receiveMessage contains name of message', function() {
    let rover = new Rover('0');
    let response = rover.receiveMessage(new Message("Yes", [new Command ("MOVE", 42) ] ))
    assert.strictEqual(response.message,"Yes");
  });
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    let rover = new Rover(0);
    let commands = [new Command("MOVE", 10), new Command("MOVE", 15)];
    let message = new Message("Important", commands);
    let response = rover.receiveMessage(message);
    let resultsTest = {
      "message": 'Important',
      "results": [
        {"completed": true},
        {"completed": true}
      ]  
    }
    assert.deepEqual(response,resultsTest);

  })
  it("responds correctly to status check command", function() {
  let rover = new Rover(0);
  let commands = [new Command("STATUS_CHECK")];
  let message = new Message ("CHECK", commands);
  let response = rover.receiveMessage(message);
  let resultsTest = {
    "message": 'CHECK',
    "results": [{
      "completed": true,
      "roverStatus":{
        "generatorWatts": 110,
        "mode": 'NORMAL',
        "position": 0
      }
    }]
  }
  assert.deepEqual(response, resultsTest);
  })
  it("responds correctly to mode change command", function() {
    let rover = new Rover(0);
    let commands = [new Command("MODE_CHANGE", "LOW_POWER")];
    let message = new Message("MODE", commands);
    let response = rover.receiveMessage(message);
    assert.strictEqual(rover.mode,"LOW_POWER");

  })
  it ('responds with false completed value when attempting to move in LOW_POWER mode', function() {
    let rover = new Rover('0')
    let commands = [new Command("MODE_CHANGE","LOW_POWER"), new Command("MOVE", 10)];
    let message = new Message ("Try", commands)
    let response = rover.receiveMessage(message)
    let resultsTest = {
      "message": 'Try',
      "results": [
        {"completed": true},
        {"completed": false}
      ]
    }
    assert.deepEqual(response, resultsTest);
  })
  it("responds with position for move command", function() {
    let rover = new Rover(0);
    let commands = [new Command("MOVE", 10)];
    let message = new Message("Try", commands);
    let response = rover.receiveMessage(message);
    assert.strictEqual(rover.position, 10);
    })
    it ("completed false and a message for an unknown command", function (){
      let rover = new Rover(0);
      let commands = [new Command("STOP")];
      let message = new Message("Hurry", commands);
      let response = rover.receiveMessage(message);
      let resultsTest = {
        "message": "Hurry",
        "results": [
        {"completed": false,
        "message": "Unknown command"}
        ]
      }
      assert.deepEqual(response, resultsTest);
    });
});

