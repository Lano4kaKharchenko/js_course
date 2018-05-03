let myAge = 21;
let year;


if (myAge % 100 == 0 || ((myAge % 100 >=11 && myAge % 100 <= 19) || (myAge % 10 >= 5)))
{year = "лет";}
	else if (myAge % 10 == 1) {
	year = "год";
} else 
	year = "года";

 console.log (`Мой возраст ${myAge} ${year}`); 

