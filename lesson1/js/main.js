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

for (i = 0; i < 3; i++) {
	goods[i] = prompt('Какой тип товаров будем продавать?', '');
}
console.log(mainList);
console.log(goods);

alert(budget/30);