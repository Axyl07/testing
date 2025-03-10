// export function sum(a, b) {
//     return a + b;
//   }

function capitalize(string) {
  let newString = string[0].toUpperCase() + string.slice(1);
  return newString;
}

function reverse(string) {
  let array = string.split("");
  array.reverse();
  let result = array.join("");
  return result;
}

let calc = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  divide: (x, y) => x / y,
  multiply: (x, y) => x * y,
};

function caesarCipher(string, key) {
  let stringArray = string.split("");
  console.log(stringArray);
  let newArray = [];
  for (let index = 0; index < stringArray.length; index++) {
    if (stringArray[index].toUpperCase() !== stringArray[index].toLowerCase()) {
      let ascii = string.charCodeAt(index);
      let keyedAscii = ascii + key;
      if (keyedAscii > 122) {
        let diff = keyedAscii - 122;
        ascii = 97 + diff-1;
      } else if (keyedAscii > 90 && keyedAscii < 97) {
        let diff = keyedAscii - 90;
        ascii = 65 + diff-1;
      } else ascii = keyedAscii;
      let ch = String.fromCharCode(ascii);
      newArray.push(ch);
    } else newArray.push(stringArray[index]);
  }
  let result = newArray.join("");
  return result;
}
console.log(caesarCipher("abc!", 3));
export { capitalize, reverse, calc, caesarCipher };
