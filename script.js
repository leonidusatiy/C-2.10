const cat = document.querySelector('.btn-cat');
const dog = document.querySelector('.btn-dog');
const parrot = document.querySelector('.btn-parrot');
const vote_buttons = document.querySelector('.vote-buttons');
const vote_header = document.querySelector('.vote-header');

const base_url = 'https://sf-pyw.mosyag.in';

// Голосуем за котиков
cat.onclick = () => {
	fetch(base_url + '/sse/vote/cats', {
		method: 'POST'
	})
	.then(function(response) {
      if (response.status == 200) {
      	afterVote();
      } else {
      	console.error('Произошла ошибка: ', response.status, ' ',  response.statusText);
      }
    })
}

// Голосуем за песиков
dog.onclick = () => {
	fetch(base_url + '/sse/vote/dogs', {
		method: 'POST'
	})
	.then(function(response) {
      if (response.status == 200) {
      	afterVote();
      } else {
      	console.error('Произошла ошибка: ', response.status, ' ',  response.statusText);
      }
    })
}

// Голосуем за попуг
parrot.onclick = () => {
	fetch(base_url + '/sse/vote/parrots', {
		method: 'POST'
	})
	.then(function(response) {
      if (response.status == 200) {
      	afterVote();
      } else {
      	console.error('Произошла ошибка: ', response.status, ' ',  response.statusText);
      }
    })
}

// Действия после голосования
const afterVote = () => {
	// Скрываем заголовок и кнопки голосования
	vote_header.style.display = 'none';
	vote_buttons.style.display = 'none';

	// Добавляем новое сообщение и кнопку перехода к результатам
	let voteMsg = document.createElement('h2');
	voteMsg.innerHTML = 'Ура! Ваш голос принят!<br><a href="results.html">Посмотреть результаты</a>';
	vote_buttons.before(voteMsg);
}