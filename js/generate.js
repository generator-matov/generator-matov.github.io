// для пацанов
let boyfirst = ["Тупой", "Конченный", "Ебанутый", "Лихоеблимудый", "Пизданутый", "Высохший", "Уебищный", "Умерший",
 "Толстомудый", "Опиздолюбый", "Мелкотроемудрый", "Хуйлолюбивый", "Хуячий", "Жирномногоканальный", "Аналочленный"]; //15


let boysec = ["даун", "еблан", "пидорас", "хуйлан", "говноед", "конч", "шизик", "страходуроног", "аналомокроблядник", 
"попечитель мочалок", "лизатель червей", "духопер", "блядохероблядник", "и плюшевый муфлон", "долбоблядскожопый"]; // 15

// для баб
let girlfirst = ["Тупая", "Конченная", "Ебанутая", "Блядскоеблиёбая", "Гнусная",
 "Жирная", "Токсичная", "Обтраханная", "Ебаная", "Задротская", "Горбатая", "Малость многострахоблядская", "Хуйлодуроблядская", "Соплежопая", "Мудоскотоебая"]; // 15

let girlsec = ["хуйня", "залупа", "манда", "шлюха", "лихохуярка", "блядь", 
"залупоеблогнойница", "выхухоль", "пидораска", "ебланка", "нервостенничка", "мозгоебка", "дермоблядунья","низтроехериница","приятельница червей"]; // 15

var randomone
var randomtwo

var who = "boy"


randomone = Math.floor(Math.random() * (14 - 0) + 0);
randomtwo = Math.floor(Math.random() * (14 - 0) + 0);
document.getElementById("creator").innerHTML = "Сайт создал " + boyfirst[randomone] + " " + boysec[randomtwo];
 
function generate()
{
	randomone = Math.floor(Math.random() * (14 - 0) + 0);
	randomtwo = Math.floor(Math.random() * (14 - 0) + 0);

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
