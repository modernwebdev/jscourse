window.addEventListener('DOMContentLoaded', function() {
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
 			    });