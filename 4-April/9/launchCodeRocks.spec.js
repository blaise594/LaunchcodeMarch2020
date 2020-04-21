const launchOutput = require('../launchCodeRocks.js');
const assert = require('assert');

describe("launchOutput", function(){
  let tests = [
    {
    description: "When passed a number that is ONLY divisible by 2, returns 'Launch",
    result: "Launch!",
    testNumber:2
    },
    {
    description: "When passed a number that is ONLY divisible by 3, returns 'Code!",
    result: "Code!",
    testNumber:3
    },
    {
    description: "When passed a number that is ONLY divisible by 5, returns 'Rocks!",
    result: "Rocks!",
    testNumber:5
    },
    {
    description: "When passed a number that is divisible by 2 AND 3 returns 'LaunchCode!",
    result: "LaunchCode!",
    testNumber:12
    },
    {
    description: "When passed a number that is divisible by 3 AND 5 returns 'Code Rocks!",
    result: "Code Rocks!",
    testNumber:15
    },
    {
    description: "When passed a number that is divisible by 2 AND 5 returns 'Launch Rocks!",
    result: "Launch Rocks!",
    testNumber:10
    },
    {
    description: "When passed a number that is divisible by 2, 3 AND 5 returns 'LaunchCode Rocks!",
    result: "LaunchCode Rocks!",
    testNumber:30
    },
    {
    description: "When passed a number that is NOT divisible by 2, 3, or 5, returns 'Rutabagas! That doesn't work.",
    result: "Rutabagas! That doesn't work.",
    testNumber:1
    },

  ];
  


 for(let i=0; i<tests.length; i++){
   it(tests[i].description, () => {
    let output = launchOutput(tests[i].testNumber);
    assert.strictEqual(output, tests[i].result);
  });
 }
  
  
});