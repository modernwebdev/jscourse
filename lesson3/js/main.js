/*За основу для этого домашки взяла твой код из урока, чтобы тебе было легче ориентироваться
*/

let money,
		name, 
		time,
		price;

function start() {
	money = prompt('Ваш бюджет?', '30000');

	while (isNaN(money) || money == '' || money == null) {
		money = prompt('Ваш бюджет?', '30000');
	} 

	name = prompt('Название вашего магазина?').toUpperCase();
	time = 21;
}

start();

let mainList = {
	budget: money,
	shopName: name, 
	shopGoods: [],
	employers: {},
	open: false,
	discount: false
}

function chooseGoods() {
	for (let i = 0; i < 3; i++) {
		let a = prompt('Какой тип товаров будем продавать?');

		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
			console.log('Все верно');
			mainList.shopGoods[i] = a;
		} else {
			i = i - 1;
		}
	}
}

chooseGoods();

function workTime(time) {
	if (time < 0) {
		console.log('Taкого не может быть!');
	} else if (time > 8 && time < 20) {
		console.log('Время работать!');
		} else if (time < 24) {
			console.log('Уже слишком поздно!');
			} else {
				console.log('В сутках 24 часа!');
				}
}

function oneDayBudget(a) {
	alert('Ежедневный бюджет ' + a / 30);
}
oneDayBudget(mainList.budget);

function priceDicsount(p) {
	a = confirm('Discount?');
	if (a) {
		price = +prompt('Введите цену', '100');
		price *= 0.8;
	}
}
priceDicsount();

alert(price);

function hiringEmployees() {
	for (i = 1; i < 5; i++) {
		mainList.employers['сотрудник №' + i] = prompt('Как зовут сотрудника?? Как??? Отвечай!!', 'Вася');
	}
}

hiringEmployees(); 

console.log(mainList);
console.log(mainList.employers);