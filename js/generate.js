// для пацанов
let boyfirst = ["Тупой", "Конченный", "Ебанутый", "Хуевый", "Пизданутый", "Шизанутый", "Уебищный", "Умерший", "Ауфный", "Жопный"]; //10
let boysec = ["Даун", "Еблан", "Пидорас", "Хуйлан", "Говноед", "Конч", "Шизик", "Гопник", "Ауешник", "Хуй"]; // 10

// для баб
let girlfirst = ["Тупая", "Конченная", "Ебанутая", "Некрасивая", "Выебаная", "Жирная", "Токсичная", "Обтраханная", "Ебаная", "Задротская", "Горбатая"]; // тут 11 
let girlsec = ["Хуйня", "Залупа", "Манда", "Шлюха", "Прошманда", "Блядь", "Хуила", "Сосалка", "Пидораска", "Ебланка"]; // 10

var randomone
var randomtwo

var who = "boy"


randomone = Math.floor(Math.random() * (9 - 0) + 0);
randomtwo = Math.floor(Math.random() * (9 - 0) + 0);
document.getElementById("creator").innerHTML = "Сайт создал " + boyfirst[randomone] + " " + boysec[randomtwo];
 
function generate()
{
	randomone = Math.floor(Math.random() * (9 - 0) + 0);
	randomtwo = Math.floor(Math.random() * (9 - 0) + 0);

	if(who == "boy"){
    document.getElementById("mat").innerHTML = boyfirst[randomone] + " " + boysec[randomtwo];
    }

    if(who == "girl"){
    	document.getElementById("mat").innerHTML = girlfirst[randomone] + " " + girlsec[randomtwo];
    }
}

function boyselected()
{
	who = "boy";
	generate();
	document.getElementById("whois").innerHTML = "Будем обзывать Парня";
}

function girlselected()
{
	who = "girl";
	generate();
	document.getElementById("whois").innerHTML = "Будем обзывать Девушку";
}
