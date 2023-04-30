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
