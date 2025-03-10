import { sum, capitalize, reverse, calc, caesarCipher,analyzeArray } from "./code.js";
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
  expect(reverse("car")).toBe("rac");
});
test("reverse the given string", () => {
  expect(reverse("cat")).toBe("tac");
});
test("reverse the given string", () => {
  expect(reverse("bat")).toBe("tab");
});

//calculate
test("Perform calculations", () => {
  const num1 = 10;
  const num2 = 2;
  expect(calc.add(num1, num2)).toBe(12);
  expect(calc.subtract(num1, num2)).toBe(8);
  expect(calc.divide(num1, num2)).toBe(5);
  expect(calc.multiply(num1, num2)).toBe(20);
});

//caesarCipher
test("Ceaser Cipher", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

//analyzeArray
test("Analyze Array", () => {
  let array = [1, 8, 3, 4, 2, 6];
  expect(analyzeArray(array)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
