const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})

const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats');

const ES = new EventSource(url, header);

const cats = document.querySelector('.cats');
const dogs = document.querySelector('.dogs');
const parrots = document.querySelector('.parrots');

ES.onmessage = message => {
    votesObj = JSON.parse(message.data);
    console.log(votesObj);
    all = votesObj.cats + votesObj.parrots + votesObj.dogs;
    cats_per = Math.round(votesObj.cats / all * 100) / 100;
    dogs_per = Math.round(votesObj.dogs / all * 100) / 100;
    parrot_per = Math.round(votesObj.parrots / all * 100) / 100;

    cats.style.cssText = `width: ${cats_per*100}%`;
    cats.textContent = `${votesObj.cats} (${cats_per*100}%)`;

    dogs.style.cssText = `width: ${dogs_per*100}%`;
    dogs.textContent = `${votesObj.dogs} (${dogs_per*100}%)`;

    parrots.style.cssText = `width: ${parrot_per*100}%`;
    parrots.textContent = `${votesObj.parrots} (${parrot_per*100}%)`;

}