// Домашнее задание:
// В репозитории создать папку lesson_15, В ней файлы index.html с подключенным
//  файлом index.js, В нем нужно написать:
// В index.html внутри body, создать кнопку с тегом button и текстом “Удалить”.
// Функцию “init“ которая принимает два аргумента - массив объектов такой структуры:
// { className: 'class', attributes: { 'data-name': 'Anatoliy' }, content: 
// 'Some Text' },
// и число n.
// Функция должна создать элемент ul внутри body, и для каждого элемента входного
//  массива, необходимо создать n элементов li внутри ul, задав им класс из 
//  obj.className, атрибуты из obj.attributes где ключи - названия атрибутов,
//   значения ключей - значения атрибутов, и внутренний контент элементов li взять
//    из obj.content.
// Функцию “listen“ которая начнет слушать событие нажатия на кнопку “Удалить”, и
//  по этому событию удалять созданный список ul, и возвращать true в случае успеха,
//   и false, если списка ul нет.


function init (arrObj, n) {
	let ul = document.createElement('ul');
	document.body.appendChild(ul);
	
	for (let i = 0; i < arrObj.length; i++) {
		for (let j = 0; j < n; j++) {
			let li = document.createElement('li');
			ul.appendChild(li);
			li.className = arrObj[i].className;

		for (key in arrObj[i].attributes) {
			li.setAttribute(key, arrObj[i].attributes[key])
		}
			li.appendChild(document.createTextNode(arrObj[i].content));

	ul.appendChild(li);
		}
	}
}
//init ([{ className: 'class', attributes: { 'data-name': 'Anatoliy' }, content: 'Some Text' },{ className: 'class', attributes: { 'data-name': 'Petya' }, content: 'My temp' }],2)

function listen() {
	let button = document.getElementById("button");

	  	button.addEventListener("click", function () {
	  		let ul = document.querySelector('ul');

	  		if (ul) {
		  		document.body.removeChild(ul);
		  		
		    return true;
	  		} else 
	  		return false;	
	});	 
}	
  
//listen();