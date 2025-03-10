import { sum, capitalize } from "./code.js";
//capitalize
test("capitalize the first letter of string", () => {
  expect(capitalize("string")).toBe("String");
});
test("capitalize the first letter of string", () => {
  expect(capitalize("him")).toBe("Him");
});
test("capitalize the first letter of string", () => {
  expect(capitalize("power")).toBe("Power");
});



// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
