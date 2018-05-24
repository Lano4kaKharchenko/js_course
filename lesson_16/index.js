const n = 10;

const numbers = document.getElementById('numbers');
const startN = document.getElementById('start');
const pauseN = document.getElementById('pause');
const stopN = document.getElementById('stop');
const second = document.getElementById('second');
const letS = document.getElementById('letS');

for (let i = 1; i <= n; i += 1) {
	let span = document.createElement ('span');
	span.setAttribute ('id', `nic${i}`);
	// span.innerHTML = `${i}`;
	// span.appendChild(document.createTextNode(i));
	let num = document.createTextNode(i);
	span.appendChild(num);
	numbers.insertBefore(span, numbers.children[i]);
	if (i > 1) {
	numbers.insertBefore(document.createTextNode(', '), numbers.children[i]);
	}
}


let num = 0;
let interval;
let speed = 1000;
let counter = 0;
let checkPause = false;

second.appendChild(document.createTextNode(num));
// letS.appendChild(document.createTextNode('s'));
letS.innerHTML = 's';

function count () {
	let interval = setInterval(function() {
		if (num === 0) {
			letS.innerHTML = '';
		} else {
			letS.innerHTML = 's';
		}

		if (counter < n) {
			counter += 1;
			document.getElementById(`nic${counter}`).style.backgroundColor = 'violet';
		} else if (counter === n) {
			counter += n + 1;
			document.getElementById(`nic${counter - n - 1}`).style.backgroundColor = 'yellow';
			counter -= 1;
		} else if (counter > n + 1) {
			counter -= 1;
			document.getElementById(`nic${counter - n}`).style.backgroundColor = 'yellow';
		} else if (counter === n + 1) {
			counter = 0;
			document.getElementById(`nic${counter + 1}`).style.backgroundColor = 'violet';
			counter += 1;
		}
		num += 1;
		second.innerHTML = num;
		startN.setAttribute('disabled', 'true');
		checkPause = false;
	}, speed);
	

	stopN.addEventListener('click', function(){
		clearInterval(interval); /*на стоп добавить клик на который вызываем функцию
		и вызывает интервал, и отключаем атрибут - дисейбл и сбрасываем счетчик*/
		startN.removeAttribute('disabled');
		second.innerHTML = 0;
		num = 0;
	})

	pauseN.addEventListener('click', function() {
		clearInterval(interval);
		startN.removeAttribute('disabled');
	})

}

startN.addEventListener('click', count); /*слушай клик и запускай ф-цию count,
 которая запускает интервал который 
увеличивает на 1 и помещает в second и тут же происходит speed*/

// letS.innerHTML = 's';

		
		
	