var Example = require("../src/Example");

describe("Example", function () {
    it("greets the world", function () {
        var example = new Example();
        expect(example.greet("world")).toEqual("hello world");
    });
});