>The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method

```js
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// sort the array 
ages.sort();
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// find median age
const middle = Math.floor(ages.length / 2);
const medianAge = ages.length % 2 === 0 ? (ages[middle] + ages[middle - 1]) / 2 : ages[middle];

// find average age
const total = ages.reduce((acc, age) => acc + age, 0);
const averageAge = total / ages.length;

// find range of ages
const ageRange = maxAge - minAge;

// compare min-avg and max-avg
const diffMin = Math.abs(minAge - averageAge);
const diffMax = Math.abs(maxAge - averageAge);

console.log(`Min age: ${minAge}`);
console.log(`Max age: ${maxAge}`);
console.log(`Median age: ${medianAge}`);
console.log(`Average age: ${averageAge}`);
console.log(`Age range: ${ageRange}`);
console.log(`Difference between min and average age: ${diffMin}`);
console.log(`Difference between max and average age: ${diffMax}`);

```