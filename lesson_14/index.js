function add(string = '❤️🇺🇦') {
 let sum = 0;
 for (let i = 0; i < string.length; i += 2) {
   sum += string.charCodeAt(i) + string.charCodeAt(i + 1);
 }
 return sum / (string.length / 2);
}

function clearNumbers(arr) {
 for (let i = 0; i < arr.length; i += 1) {
     for (let k = 0; k < arr[i].length; k += 1) {
         if (typeof arr[i][k] !== "number") {
             arr[i].splice(k, 1);
             k -= 1;
         }
     }
 }
 return arr;
}


function reverse(...arg) {
 const input = arg.reverse();
 let output = [];
 for (let i = 0; i < input.length; i += 1) {
   const split = input[i].split('');
   const reversed = split.reverse();
   output.push(reversed.join(''));
 }
 return output;
}

function splitArray(arr, count) {
 const result = [];
 for (let i = 0; i < arr.length; i += count) {
   result.push(arr.slice(i, i + count));
 }
 return result;
}
