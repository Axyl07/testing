import { sum, capitalize,reverse,calc } from "./code.js";
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


//reverseString

test("reverse the given string", () => {
  expect(reverse('car')).toBe('rac');
});
test("reverse the given string", () => {
  expect(reverse('cat')).toBe('tac');
});
test("reverse the given string", () => {
  expect(reverse('bat')).toBe('tab');
});

//calculate
test('Perform calculations', () => {
  const num1 = 10;
  const num2 = 2;
  expect(calc.add(num1,num2)).toBe(12)
  expect(calc.subtract(num1,num2)).toBe(8)
  expect(calc.divide(num1,num2)).toBe(5)
  expect(calc.multiply(num1,num2)).toBe(20)
})
// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
