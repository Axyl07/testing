
import {sum,capitalize} from './code.js'

test('capitalize the first letter of string',()=>{
  expect(capitalize('string')).toBe('String');
  expect(capitalize('him')).toBe('Him');
  expect(capitalize('power')).toBe('Power');
});


// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
