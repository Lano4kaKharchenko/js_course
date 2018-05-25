/*Задача 1*/
function itsMe(a) {
	if(a) {
		let a = 'LanochkaKharchenko';
		let name = "it's Me, " + a;
		console.log(name);
		return name;
}
}
// itsMe('a');

/*Задача 2*/
function compare(s, b) {
 	if(s > b) {
 		console.log("“{первый} > {второй}”");
 	} else if(s < b) {
 		console.log("“{первый} < {второй}”");
 	} else if(s == b) {
 		console.log("“{первый} == {второй}”");
 	} else if(typeof s != "number" || typeof b != "number") {
 		console.log("“НЕ ЧИСЛО”");
 	}
 }
 
/*Задача 3*/
 function row(num1,num2,num3,z) {
 let arr = [];
for( let i = 0; i < 3; i++) {
 arr[i] = arguments[i];

}

arr.sort();

if(z == "<"){
 console.log(arr.join(" < "))
} else if (z == ">"){
arr.reverse();
console.log(arr.join(" > "))
}
}

/*Задача 4*/

function fact(d) {
	let num = 1;
 	for(let i = 1; i < d; i++){
 	num *= (i + 1);
 	}
 	return num;
}

