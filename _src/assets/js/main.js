'use strict'

const elementWrapper = document.querySelector('#wrapper');
const elementInput = document.querySelector('#input-Search');
const elementButton = document.querySelector('#button-Search');
const urlBase = 'http://api.tvmaze.com/search/shows?q=';

function init() {
    const inputValue = elementInput.value.toLowerCase();
    fetch(urlBase + inputValue)
        .then(response => response.json())
        .then(dataResponse =>
            displaySeries(dataResponse))
}

const displaySeries = (dataResponse) => {
    for (let i = 0; i < dataResponse.length; i++) {
        const elementUl = document.createElement('ul');
        const elementList = document.createElement('li');
        const elementText = document.createElement('h2');
        const elementImage = document.createElement('img');
        let imagen = `${dataResponse[i].show.image}`;

        elementText.innerHTML = `${dataResponse[i].show.name}`;
        elementList.appendChild(elementText);
        elementList.appendChild(elementImage);
        elementUl.appendChild(elementList);
        elementWrapper.appendChild(elementUl);

        if (imagen === 'null') {
            elementImage.src = 'https://via.placeholder.com/210x295/fabada/666666/?text=TV';
        } else {
            elementImage.src = `${dataResponse[i].show.image.medium}`;
        }
    }
}

elementButton.addEventListener('click', init);
