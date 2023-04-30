> Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

```js
const array = ['JavaScript', 'React', 'Node.js', 'pw Skills', 'Express.js', 'MongoDB','pw Skills', 'C++', 'C#'];

const firstIndex = array.indexOf('pw Skills');
const lastIndex = array.lastIndexOf('pw Skills');

console.log(`The first occurrence of 'pw Skills' is at index ${firstIndex}.`);
console.log(`The last occurrence of 'pw Skills' is at index ${lastIndex}.`);

```