// export function sum(a, b) {
//     return a + b;
//   }

 function capitalize(string){
  let newString = string[0].toUpperCase() + string.slice(1);
  return newString;
}

 function reverse(string) {
   let array = string.split('')
   array.reverse()
   let result = array.join('')
  return result
}

let calc = {
   add : (x, y)=> x + y ,
  subtract: (x, y) => x - y,
  divide: (x, y) => x / y,
  multiply: (x, y) => x * y,
}
export { capitalize,reverse,calc };