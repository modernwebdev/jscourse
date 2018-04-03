// Получить кнопку "Открыть магазин" через id
console.log(document.getElementById('open-btn'));
// Получить все поля в левом меню через классы
console.log(document.getElementsByClassName('name-value')[0]);
console.log(document.getElementsByClassName('budget-value')[0]);
console.log(document.getElementsByClassName('goods-value')[0]);
console.log(document.getElementsByClassName('items-value')[0]);
console.log(document.getElementsByClassName('employers-value')[0]);
console.log(document.getElementsByClassName('discount-value')[0]);
console.log(document.getElementsByClassName('isopen-value')[0]);
// Получить поля категории товаров через класс
console.log(document.getElementsByClassName('goods-item')[0]);
console.log(document.getElementsByClassName('goods-item')[1]);
console.log(document.getElementsByClassName('goods-item')[2]);
console.log(document.getElementsByClassName('goods-item')[3]);
// Получить все 3 кнопки через Tag
console.log(document.getElementsByTagName('button')[1]);
console.log(document.getElementsByTagName('button')[2]);
console.log(document.getElementsByTagName('button')[3]);
// Получить поля ввода товаров, времени и расчета бюджета через querySelector
console.log(document.querySelector('.choose-item'));
console.log(document.querySelector('.time-value'));
console.log(document.querySelector('.count-budget-value'));
// Получить поля имен сотрудников через querySelectorAll
console.log(document.querySelectorAll('.hire-employers-item')[0]);
console.log(document.querySelectorAll('.hire-employers-item')[1]);
console.log(document.querySelectorAll('.hire-employers-item')[2]);

