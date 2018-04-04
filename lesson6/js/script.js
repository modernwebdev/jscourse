// Получить кнопку "Открыть магазин" через id
openBtn = document.getElementById('open-btn');
// Получить все поля в левом меню через классы
nameValue = document.getElementsByClassName('name-value')[0];
budgetValue = document.getElementsByClassName('budget-value')[0];
goodsValue = document.getElementsByClassName('goods-value')[0];
itemsValue = document.getElementsByClassName('items-value')[0];
employersValue = document.getElementsByClassName('employers-value')[0];
console.log(document.getElementsByClassName('discount-value')[0]);
isOpenValue = document.getElementsByClassName('isopen-value')[0];
// Получить поля категории товаров через класс
goodsItem = document.getElementsByClassName('goods-item');
// Получить все 3 кнопки через Tag
goodsBtn = document.getElementsByTagName('button')[1];
budgetBtn = document.getElementsByTagName('button')[2];
employersBtn = document.getElementsByTagName('button')[3];
// Получить поля ввода товаров, времени и расчета бюджета через querySelector
chooseItem = document.querySelector('.choose-item');
timeValue = document.querySelector('.time-value');
countBudgetValue = document.querySelector('.count-budget-value');
// Получить поля имен сотрудников через querySelectorAll
hireEmployersItem = document.querySelectorAll('.hire-employers-item');



let money,
		price;


openBtn.addEventListener('click', () => {
	money = prompt('Ваш бюджет?', '30000');

	while (isNaN(money) || money == '' || money == null) {
		money = prompt('Ваш бюджет?', '30000');
	} 
  budgetValue.textContent = money;

	nameValue.textContent = prompt('Название вашего магазина?', '').toUpperCase();

});

goodsBtn.addEventListener('click', () => {
	for (let i = 0; i < goodsItem.length; i++) {
		let a = goodsItem[i].value;

			if ((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50 ) {
				console.log('Все верно');
				mainList.shopGoods[i] = a;
				goodsValue.textContent = mainList.shopGoods;
			} else {
				i = i - 1;
			}
		}
});

chooseItem.addEventListener('change', () => {
	var items = chooseItem.value;
		if (isNaN(items) && items != '') {
			mainList.shopItems = items.split(',');
			mainList.shopItems.sort();
			itemsValue.textContent = mainList.shopItems;
		}
});

timeValue.addEventListener('change', () => {
	let time = timeValue.value;

	if (time < 0) {
		console.log('Taкого не может быть!');
		mainList.open = false;
	} else if (time > 8 && time < 20) {
		console.log('Время работать!');
		mainList.open = true;
		} else if (time < 24) {
			console.log('Уже слишком поздно!');
			mainList.open = false;
			} else {
				console.log('В сутках 24 часа!');
				mainList.open = false;
				}

	if(mainList.open == true) {
		isOpenValue.style.backgroundColor = 'green';
	} else {
		isOpenValue.style.backgroundColor = 'red';
	}
});

budgetBtn.addEventListener('click', () => {
	countBudgetValue.value = money / 30;
});

employersBtn.addEventListener('click', () => {
	for (i = 0; i < hireEmployersItem.length; i++) {
		let  name = hireEmployersItem[i].value;
		mainList.employers[i] = name;

		employersValue.textContent += mainList.employers[i] + ', ';
	}
});






let mainList = {
	budget: money,
	shopName: name, 
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	priceDicsount: function priceDicsount(p) {
			a = confirm('Discount?');
			if (a) {
				price = +prompt('Введите цену', '100');
				price *= 0.8;
			}
		},
}


