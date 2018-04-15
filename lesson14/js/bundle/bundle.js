(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

	let tab = require('../parts/tab.js');
	let ajax = require('../parts/ajax.js');
	let slider = require('../parts/slider.js');
	let calc = require('../parts/calc.js');
	let timer = require('../parts/timer.js');

	tab();
	ajax();
	slider();
	calc();
	timer();

});


},{"../parts/ajax.js":2,"../parts/calc.js":3,"../parts/slider.js":4,"../parts/tab.js":5,"../parts/timer.js":6}],2:[function(require,module,exports){
function ajax() {
	let descrBtn = document.querySelectorAll('.description-btn'),
			overlay = document.querySelector('.overlay'),
			close = document.querySelector('.popup-close');

			console.log(descrBtn);

			for (let i = 0; i < descrBtn.length; i++) {
				descrBtn[i].addEventListener('click', function() {

					overlay.style.display = 'block';
					document.body.style.overflow = 'hidden';
				});

				close.addEventListener('click', function() {
					overlay.style.display = 'none';
					document.body.style.overflow = '';
				});
			}

			let message = new Object();
			message.loading = "Загрузка...";
			message.success = "Спасибо, мы с Вами скоро свяжемся!";
			message.fail = "Что-то пошло не так";

			let form = document.getElementsByClassName('main-form')[0],
			    contactForm = document.getElementById('form');
			    input = form.getElementsByTagName('input'),
			    inputContactForm = contactForm.getElementsByTagName('input'),
			    statusMessage = document.createElement('div');

			    form.addEventListener('submit', function(event) {
			        event.preventDefault();
			        form.appendChild(statusMessage);

			        let request = new XMLHttpRequest();
			        request.open("POST", "server.php");

			        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			        let formData = new FormData(form);
			        request.send(formData);

			        request.onreadystatechange = function() {
			            if (request.readyState < 4) {
			                statusMessage.innerHTML = message.loading;
			            } else if (request.readyState === 4) {
			                if (request.status == 200 && request.status < 300) {
			                    statusMessage.innerHTML = message.success;
			                }
			                else {
			                    statusMessage.innerHTML = message.fail;
			                }
			            }
			        }
			        for (let i = 0; i < input.length; i++) {
			            input[i].value = '';
			            //Чистим инпуты
			        }    
			    });

			    contactForm.addEventListener('submit', function(event) {
			        event.preventDefault();
			        contactForm.appendChild(statusMessage);

			        let request = new XMLHttpRequest();
			        request.open("POST", "server.php");

			        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			        let formData = new FormData(contactForm);
			        request.send(formData);

			        request.onreadystatechange = function() {
			            if (request.readyState < 4) {
			                statusMessage.innerHTML = '<img src="icons/loading.gif" style="width: 55px; height: 30px; float: right;">';
			            } else if (request.readyState === 4) {
			                if (request.status == 200 && request.status < 300) {
			                    statusMessage.innerHTML = '<img src="icons/success.svg" style="width: 30px; height: 30px; float: right;">';
			                }
			                else {
			                    statusMessage.innerHTML = '<img src="icons/error.svg" style="width: 30px; height: 30px; float: right;">';
			                }
			            }
			        } 
			        for (let i = 0; i < inputContactForm.length; i++) {
			            inputContactForm[i].value = '';
			            //Чистим инпуты
			        }   
			    });
}

module.exports = ajax;
},{}],3:[function(require,module,exports){
function calc() {

	let persons = document.getElementsByClassName('counter-block-input')[0],
			restDays = document.getElementsByClassName('counter-block-input')[1],
			place = document.getElementById('select'),
			totalValue = document.getElementById('total'),
			personsSum = 0,
			daysSum = 0,
			total = 0;

			totalValue.innerHTML = 0;

			persons.addEventListener('change', function() {
				personsSum = +this.value;
				total = (daysSum + personsSum) * 4000;
				if (restDays.value == '' || persons.value == '') {
					totalValue.innerHTML = 0;
				} else {
					totalValue.innerHTML = total;
				}
			});

			restDays.addEventListener('change', function() {
				daysSum = +this.value;
				total = (daysSum + personsSum) * 4000;
				if (persons.value == '') {
					totalValue.innerHTML = 0;
				} else {
					totalValue.innerHTML = total;
				}
			});

			place.addEventListener('change', function() {
				if (restDays.value == '' || persons.value == '') {
					totalValue.innerHTML = 0;
				} else {
					let a = total;
					totalValue.innerHTML = a * this.options[this.selectedIndex].value;
				}
			});
}

module.exports = calc;
},{}],4:[function(require,module,exports){
function slider() {

	let slideIndex = 1,
			slides = document.getElementsByClassName('slider-item'),
			prev = document.querySelector('.prev'),
			next = document.querySelector('.next'),
			dotsWrap = document.querySelector('.slider-dots'),
			dots = document.getElementsByClassName('dot');


			showSlides(slideIndex);

			function showSlides(n) {

				if (n > slides.length) {
					slideIndex = 1;
				}
				if (n < 1) {
					slideIndex = slides.length;
				}

				for (let i = 0; i < slides.length; i++) {
					slides[i].style.display = 'none';
				}

				for (let i = 0; i < dots.length; i++) {
					dots[i].classList.remove('dot-active');
				}

				slides[slideIndex-1].style.display = 'block';
				dots[slideIndex - 1].classList.add('dot-active')
			}

			function plusSlides (n) {
				showSlides(slideIndex += n);
			}

			function currentSlide (n) {
				showSlides(slideIndex = n);
			}

			prev.addEventListener('click', function() {
				plusSlides(-1);
			});
			next.addEventListener('click', function() {
				plusSlides(1);
			});

			dotsWrap.addEventListener('click', function(event) {
				for (let i = 0; i < dots.length + 1; i++) {
					if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
						currentSlide(i);
					}
				}
			});
}

module.exports = slider;
},{}],5:[function(require,module,exports){
function tab() {
		let tab = document.getElementsByClassName('info-header-tab'),
			tabContent = document.getElementsByClassName('info-tabcontent'),
			info = document.getElementsByClassName('info-header')[0];

			function hideTabContent(a) {
				for (let i = a; i < tabContent.length; i++) {
					tabContent[i].classList.remove('show');
					tabContent[i].classList.add('hide');
				}
			}

			hideTabContent(1);

			function showTabContent(b) {
				if (tabContent[b].classList.contains('hide')) {
					hideTabContent(0);
					tabContent[b].classList.remove('hide');
					tabContent[b].classList.add('show');
				}
			}

			info.addEventListener('click', function(event) {
				let target = event.target;
				if (target.className == 'info-header-tab') {
					for (let i = 0; i < tab.length; i++) {
						if (target == tab[i]) {
							showTabContent(i);
							break;
						}
					}
				}
			});

}


module.exports = tab;
},{}],6:[function(require,module,exports){
function timer() {
	let deadline = '2018-04-20';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor((t / 1000) % 60),
		minutes = Math.floor((t / 1000 / 60) % 60),
		hours = Math.floor((t / (1000 * 60 * 60)));

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}
	 	
	 	function setClock(id, endtime) {

	 		let timer = document.getElementById(id),
	 				hours = timer.querySelector('.hours'),
	 				minutes = timer.querySelector('.minutes'),
	 				seconds = timer.querySelector('.seconds');

	 				function updateClock() {
	 					let t = getTimeRemaining(endtime);
	 					hours.innerHTML = t.hours;
	 					minutes.innerHTML = t.minutes;
	 					seconds.innerHTML = t.seconds;

	 					if (t.total < 0) {
	 						clearInterval(timeInterval);
	 					}
	 				}

	 				updateClock();
	 				let timeInterval = setInterval(updateClock, 1000);
	 	}

	 	setClock('timer', deadline);
}

module.exports = timer;
},{}]},{},[1]);
