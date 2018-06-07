

class Human {
	constructor(opts) {
		this.name = opts.name;
		this.age = opts.age;
		};

	sayHello() {
		console.log("Hello, my name is ${this.name} , i am ${this.age} years old");
		};
}

class AlevelStudent extends Human {
	constructor(opts) {
		super(opts);
		 
		this.marks = opts.marks;
	};

	averageMark() {

		console.log((add(this.marks)) / (this.marks.length));

	};
}

// let student = new AlevelStudent({
// 	name: "Ivan",
// 	age: 19,
// 	marks: [1, 2, 3, 4, 5],
// });
// console.log(student);



// Создать класс  Human, который в качестве аргумента принимает объект
//  с ключами name(содержит ваше имя строкой), age(содержит ваш возраст числом). 
// Human({ name: 'ivan', age: 19 })

// У класса Human должен быть метод sayHello, который будет выводить в консоль
//  строку “Hello, my name is  ${name}, i am ${age} years old”

// Создать класс AlevelStudent, наследуемый от Human, который принимает в себя
//  параметры name, age и новый ключ marks, которой будет содержать массив ваших
//   оценок за домашние задание числами ([5, 3, 5, 1, 4])
// AlevelStudent({ name: 'Ivan', age: 19, marks: [1, 2, 3, 4, 5] });

// У класса AlevelStudent должен быть метод averageMark, который выводит в
//  консоль среднее значение из вашего массива оценок


