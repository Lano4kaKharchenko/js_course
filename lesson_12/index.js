const arr1 = [1, 19, 6, -8, -5];
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
	sum += arr1[i];
}

console.log (sum);
console.log (sum / (arr1.length));
console.log (Math.min.apply (null, (arr1)));
console.log (Math.max.apply (null, (arr1)));


// const obj1 = { from: 1, to: 4, value: [4, 5, 12, 7, 5, 4], ignore: [2] };
// console.log (array);

