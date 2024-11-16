import { expect } from "chai";
import add from "../src/add.js";

describe("add function", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).to.equal(0);
  });
});
