// export function sum(a, b) {
//     return a + b;
//   }

export function capitalize(string){
  let newString = string[0].toUpperCase() + string.slice(1);
  return newString;
}

export function reverse(string) {
   let array = string.split('')
   array.reverse()
   let result = array.join('')
  return result
}
