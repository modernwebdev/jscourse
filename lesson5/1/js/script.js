// Восстановить порядок в меню, добавить пятый пункт
document.getElementsByClassName('menu-item')[1].style.order = '3';
document.getElementsByClassName('menu-item')[3].style.order = '4';

var newLi = document.createElement('li');
newLi.classList.add('menu-item')
newLi.innerHTML = 'Пятый пункт';

var menu = document.getElementsByClassName('menu')[0];
menu.appendChild(newLi);

document.getElementsByClassName('menu-item')[4].style.order = '5';

// Заменить картинку заднего фона на другую из папки img
document.getElementsByTagName('body')[0].style.background = 'url(img/apple_true.jpg)';

// Поменять заголовок, добавить слово "подлинную"
document.getElementById('title').innerHTML = 'Мы продаем только подлинную технику Apple'
// Удалить рекламу со страницы
document.getElementsByClassName('adv')[0].remove();
// Спросить у пользователя отношение к технике apple и записать ответ в поле "prompt"
var answer = prompt('Как ты относишься к технике с откусанным яблоком в качестве логотипа? Ты серьезно ей доверяешь? Скажи, что ты еще за партию яблоко на выборах голосуешь.');
document.getElementsByClassName('prompt')[0].innerHTML = answer;