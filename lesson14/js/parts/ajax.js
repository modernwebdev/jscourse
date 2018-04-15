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