>Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

```js
const filename = "example.txt"; 

const extension = filename.split(".").pop();
console.log(`The extension of ${filename} is ${extension}`);

``