const assert = require("assert");
const Message = require("../message.js");
const Command = require("../command.js");

describe("Message class", function () {
  it("throws error if a name is NOT passed into the constructor as the first parameter", function () {
    assert.throws(
      function () {
        new Message();
      },
      {
        message: "Name required.",
      }
    );
  });
 it("constructor sets name", function() {
    let test = new Message("randomName");
    assert.strictEqual(test.name, "randomName");
  });

  it("contains commands passed into constructor as 2nd argument", function() {
    let comm1 = new Command("test1", "val1");
    let comm2 = new Command("test2", "val2");
    let array = [comm1, comm2];
    let test = new Message("randomName", array);
    assert.strictEqual(test.commands, array);
  });
});
