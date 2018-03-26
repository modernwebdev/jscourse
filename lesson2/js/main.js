var budget = +prompt('Ваш бюджет?', '30000')
var scoreName = prompt('Название вашего магазина?', 'Пушистые носочки');

goods = [];
employers = {
	director: 'Vasya',
	developer: 'Katya'
}

mainList = {
	budget: budget,
	scoreName: scoreName,
	isOpen: true,
	goods: goods,
	employers: employers
}

/*for (i = 0; i < 3; i++) {
	let a = prompt('Какой тип товаров будем продавать?');

	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
		console.log('Все верно');
		mainList.shopGoods[i] = a;
	} else {
		i = i - 1;
	}
}*/

/*var i = 0;
while (i < 3) {
	let a = prompt('Какой тип товаров будем продавать?');

	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
		console.log('Все верно');
		mainList.goods[i] = a;
		i++;
	} else {
		i = i - 1;
	}
}*/

var i = 0;
do {
	let a = prompt('Какой тип товаров будем продавать?');

	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
		console.log('Все верно');
		mainList.goods[i] = a;
		i++;
	} else {
		i = i - 1;
	}

} while (i < 3);

console.log(mainList);
console.log(goods);

alert(budget/30);