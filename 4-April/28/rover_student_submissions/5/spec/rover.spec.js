const assert = require('assert');
const Message = require('../message.js');
const Rover = require('../rover.js');
const Command = require('../command.js');

describe('Rover Class', function(){
  //test 7
  it('constructor sets position and default values for mode and generatorWatts', function(){
   let rover = new Rover(9832);
    assert.strictEqual(rover.position, 9832);
    assert.strictEqual(rover.mode, 'NORMAL');
    assert.strictEqual(rover.generatorWatts, 110);
});
  //test 8 
  it('response returned by receiveMessage contains name of message', function(){
    let testMessage = new Message('test message');
    let response = new Rover().receiveMessage(testMessage);
    assert.strictEqual(response.message, 'test message');
});
//  test 9
 it('response returned by recieveMessage includes two results if two commands are sent in the message', function(){
    let testMessage = new Message('test message',[ new Command ('MOVE', 123454), new Command ('STATUS_CHECK')]);
    let resultsArray= new Rover(9839).receiveMessage(testMessage).results
     assert.strictEqual(resultsArray.length, 2);
})
//test 10
it('responds correctly to status check command', function(){
    let testMessage = new Message('test message', [new Command('MOVE', 1243), new Command('STATUS_CHECK')]);
    let receiveMessage = new Rover(9832).receiveMessage(testMessage);
    assert.deepStrictEqual(receiveMessage.results[1], {completed: true, roverStatus: {generatorWatts: 110, mode: 'NORMAL', position: 1243}} );
})
//test 11
it('responds correctly to mode change command', function(){
    let testMessage = new Message('test message',[ new Command('MODE_CHANGE', 'NORMAL'), new Command('STATUS_CHECK')]);
    let receiveMessage =  new Rover(9832).receiveMessage(testMessage);
    assert.deepStrictEqual(receiveMessage.results[0], {completed: true});
})
//test 12
it('responds with false completed value when attempting to move in LOW_POWER mode', function(){
    let testMessage = new Message('test message',[ new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 12345)]);
    let receiveMessage = new Rover(9832).receiveMessage(testMessage);
    assert.deepStrictEqual(receiveMessage.results[1], {completed: false});
})
//test 13
it('responds with position for move command', function(){
    let testMessage = new Message('test message',[new Command('MOVE', 12345), new Command('STATUS_CHECK')]);
    let receiveMessage =new Rover(9832).receiveMessage(testMessage);
     assert.deepStrictEqual(receiveMessage.results, 
     [{'completed': true},
       {
       'completed': true,
       'roverStatus': {
       'mode': 'NORMAL',
       'generatorWatts': 110,
       'position': 12345
     }
     }]);
    }); 

});
