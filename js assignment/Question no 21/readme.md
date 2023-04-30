>In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

```js

const countries = ['India', 'USA', 'Japan', 'Russia', 'China', ];
if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
}
console.log(countries);

```