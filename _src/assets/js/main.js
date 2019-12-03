'use strict'

const elementWrapper = document.querySelector('#wrapper');
const elementForm = document.querySelector('#form');
const elementInput = document.querySelector('#input-Search');
const elementButton = document.querySelector('#button-Search');
const mySeries = document.querySelector('#mySeries');
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
    // console.log(showsObject.image)
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
// const getLocalStorage = () => {
//     const userData = JSON.parse(localStorage.getItem('userData'));
//     if (userData !== null) {
//         elementInput.value = userData.name;
//         elementImage.src = userData.image;
//     }
// };

// const handleInput = () => {

//     const seriesObject = {
//         name: elementUl.classList.contains('selected'),
//     }
//     console.log('seriesObject')
//     localStorage.setItem('userData', JSON.stringify(seriesObject));
// };

// form.addEventListener('keyup', handleInput);
elementButton.addEventListener('click', init);
// getLocalStorage();




// const seriesResults = (dataFromSearch) => {
//     elementUl.innerHTML = '';
//     myFavoritesSeries.innerHTML = '';
//     const inputValue = elementInput.value.toLowerCase();
//     // const elementUl = document.createElement('ul');
//     // const elementList = document.createElement('li');
//     const elementText = document.createElement('h2');
//     const elementImage = document.createElement('img');
//     const spanContent = document.createTextNode(dataFromSearch.name);

//     elementImage.src = `${dataResponse[i].show.image.medium}`;
//     elementText.appendChild(spanContent);
//     myFavoritesSeries.appendChild(elementImage);
//     myFavoritesSeries.appendChild(elementText);

//     // lleno mi localstorage
//     //creo un objeto json con nombre y foto
//     const seriesObject = {
//         "name": dataFromSearch.name.toLowerCase(),
//         "img": imgElement.src
//     }

//     //pusheo el objeto a mi array vacío
//     lastVisitedSeries.push(seriesObject);

//     //pinto el pokemon como mi función que pinta pokemons 
//     addNewVisited(seriesObject);

//     //vuelvo a setear mi localstorage pasandolo por stringify
//     localStorage.setItem('lastVisited', JSON.stringify(lastVisitedSeries));
// }

// function favoriteSeries() {
//     const mylocalStorage = localStorage.getItem("lastVisited");
//     if (mylocalStorage !== null) {
//         lastVisitedList = JSON.parse(mylocalStorage);
//     }
//     paintList(lastVisitedList);
//     init(urlBase, displaySeries);
// }
// const paintList = (array) => {
//     for (let item of array) {
//         addNewVisited(item)
//     }
// }
// const addNewVisited = (obj) => {
//     myFavoritesSeries.innerHTML += `<span>${obj.name}</span><img src=${obj.img}>`
// }



///*********************** */

// elementText.innerHTML = `${dataResponse[i].show.name}`;
// elementList.appendChild(elementText);
// elementList.appendChild(elementImage);
// elementList.addEventListener('click', addFav);
// elementUl.appendChild(elementList);
// elementWrapper.appendChild(elementUl);

// if (imagen === 'null') {
//     elementImage.src = 'https://via.placeholder.com/210x295/fabada/666666/?text=TV';
// } else {
//     elementImage.src = `${dataResponse[i].show.image.medium}`;
// }
// }
// }

// const addFav = (event) => {
// event.currentTarget.style = 'background-color:blue; color:#fff';
// setLocalStorage(event);
// }

// const setLocalStorage = (event) => {

// //recogo en varibles los elementos seleccionados
// let nameFavorites = event.currentTarget.innerText;
// let imageFavorites = event.target.src;

// //creo un objeto con las series seleccionadas
// const seriesObject = {
// "name": nameFavorites,
// "img": imageFavorites
// }

// //relleno el array con el objeto
// favoritesList.push(seriesObject);

// //seteo mi localstorage pasandolo por stringify
// localStorage.setItem('favoritesList', JSON.stringify(favoritesList));

// displayNews(seriesObject);
// }



// const displayNews = (seriesObject) => {
// elementUlFav.innerHTML += `<h3>${seriesObject.name}</h3><img src=${seriesObject.img}>`
// }


// const getLocalStorage = () => {
// const myFavorites = localStorage.getItem("favoritesList");
// if (myFavorites !== null) {
// favListShows = JSON.parse(myFavorites);
// displayFavoritesSeries(favoritesList);
// }
// }

// const displayFavoritesSeries = (favShows) => {
// for (let favShow of favShows) {
// paintNewFavShow(favShow)
// }
// }



// elementButton.addEventListener('click', init);
// window.addEventListener('load', getLocalStorage);


// const setLocalStorage = () => {
//     for (const item of elementsList) {
//         const liItem = new DOMParser().parseFromString(item, "text/xml");
//         console.log(liItem);
//         if (liItem.classList.contains('selected')) {
//             const name = liItem.firstChild.innerHTML;
//             const img = liItem.lastChild.src;
//             const seriesObject = {
//                 "name": name,
//                 "image": img,
//             }console.log(seriesObject);
//         }
//     }
// }