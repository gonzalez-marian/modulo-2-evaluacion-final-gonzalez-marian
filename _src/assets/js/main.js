'use strict'

const elementWrapper = document.querySelector('#wrapper');
const elementForm = document.querySelector('#form');
const elementInput = document.querySelector('#input-Search');
const elementButton = document.querySelector('#button-Search');
const mySeries = document.querySelector('#mySeries');
const elementListFav = document.querySelector('#list-favorites');
const urlBase = 'http://api.tvmaze.com/search/shows?q=';
let showFavorite = [];

function init() {
    const inputValue = elementInput.value.toLowerCase();
    event.preventDefault();
    fetch(urlBase + inputValue)
        .then(response => response.json())
        .then(dataResponse => {
            displaySeries(dataResponse)
        })
}
function selectedFavorites(event) {
    event.currentTarget.classList.toggle('selected');
    const showNameFavorite = event.currentTarget.querySelector('h2');
    const showImageFavorite = event.currentTarget.querySelector('img');
    const showsObject = {
        name: showNameFavorite.innerHTML,
        image: showImageFavorite.src
    }
    showFavorite.push(showsObject);
    localStorage.setItem('selected', JSON.stringify(showFavorite));
    paintFavorite(showsObject);
}

const paintFavorite = (showsObject) => {
    elementListFav.innerHTML += `<li>${showsObject.name}</li><img src=${showsObject.image}>`;
    const liElement = document.createElement('li');
    elementListFav.addEventListener('click', deleteLocal)
    elementListFav.appendChild(liElement);
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
        elementUl.addEventListener('click', selectedFavorites);
        elementUl.appendChild(elementList);
        elementWrapper.appendChild(elementUl);

        if (imagen === 'null') {
            elementImage.src = 'https://via.placeholder.com/210x295/fabada/666666/?text=TV';
        } else {
            elementImage.src = `${dataResponse[i].show.image.medium}`;
        }
    }
}
const getLocalStorage = () => {
    const myLocal = localStorage.getItem('showFavorite');
    if (myLocal !== null) {
        showFavorite = JSON.parse(myLocal);
    }
}
const deleteLocal = () => {
    localStorage.removeItem('selected');
    elementListFav.innerHTML = '';
    // elementWrapper.classList.remove('selected');
}
elementButton.addEventListener('click', init);
