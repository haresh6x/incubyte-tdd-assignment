import { expect } from "chai";
import add from "../src/add.js";

describe("add function", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).to.equal(0);
  });

  it("should return the sum of single numbers", () => {
    const result = add("5");
    expect(result).to.equal(5);
  });

  it("should return the sum of comma separated numbers", () => {
    const result = add("1,5");
    expect(result).to.equal(6);
  });

  it("should return the sum of newline separated numbers", () => {
    const result = add("1\n2\n3");
    expect(result).to.equal(6);
  });

  it("should return the sum of comma and newline separated numbers", () => {
    const result = add("1\n2,3");
    expect(result).to.equal(6);
  });

  it("should support a custom delimiter", () => {
    const result = add("//;\n1;2;3");
    expect(result).to.equal(6);
  });
});
