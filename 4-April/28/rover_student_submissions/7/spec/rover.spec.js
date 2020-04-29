const assert = require('assert');
const Rover = require('../rover.js');


describe("Rover class", function() 
{
it("constructor sets position and default values for mode and generatorWatts",  function() 
  { let rover = new Rover(2277);
   let ans = new Rover(2277);
   ans.mode = "NORMAL";
   ans.generatorWatts = 110;
   ans.position = 2277;
  assert.deepStrictEqual(rover,ans)

  });
it("response returned by receiveMessage contains name of message",  function() 
  { 
let rover = new Rover();
let commands = [{name:"MOVE",value:22711}];
let message = {"name":"test", commands:commands};
let ans = "test";
let response = rover.receiveMessage(message);
 assert.strict(response.name,ans)
  });
 
 it("response returned by receiveMessage includes two results if two commands are sent in the message",  function() 
  { 
let commands = [{name:"MOVE",value:22711},   {name:"MODE_CHANGE", value:"NORMAL"}];
let ans = [{completed: true},{completed: true}];
let rover = new Rover();
let message = {name:"TEST",commands: commands};
let results = rover.receiveMessage(message);
    
  assert.deepStrictEqual(results.results,ans)

  });
it("responds correctly to status check command",  function() 
  { 
 let rover = new Rover(1112);
    let commands = [{name:"STATUS_CHECK"}];
    let STATUS_CHECK = {mode:"NORMAL",generatorWatts: 110 ,position:1112 };
    let message = {name:"test",commands:commands};
    let response = rover.receiveMessage(message);
    let obj = response.results[0].roverStatus;
  assert.deepStrictEqual(obj,STATUS_CHECK)

  });
it("responds correctly to mode change command",  function() 
  {
let rover = new Rover(mode = "LOW_POWER");
let commands = [{name:"MODE_CHANGE",value:"NORMAL"}];
let message = {"name":"test", commands:commands};
let ans = true;
let response = rover.receiveMessage(message);
let obj = response.results[0];

assert.deepStrictEqual(obj.completed,ans)
  });
it("responds with false completed value when attempting to move in LOW_POWER mode",  function() 
  { 
let rover = new Rover();
let commands = [{name:"MODE_CHANGE",value:"LOW_POWER"},{name:"MOVE",value:22711}];
let message = {"name":"test", commands:commands};
let ans = [{completed: true}, {completed: false}];
let response = rover.receiveMessage(message);
let obj = response.results;
  assert.strict(obj,ans)
  });
it("responds with position for move command",  function() 
  { let rover = new Rover(2345);
let commands = [{name:"MOVE",value:22711}];
let obj = commands[0];
let message = {"name":"test", commands:commands};
let ans = 22711;
let response = rover.receiveMessage(message);
  assert.strict(obj.value,ans)
  });
});


