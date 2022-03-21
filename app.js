import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');
const filterEl = document.getElementById('filterDogsClient');


// on load
// fetch all dogs
// render and append all dog cards to the container

window.addEventListener('load', async() => {
    const dogs = await getDogs();

    for (let dog of dogs) {
        const dogEl = renderDogCard(dog);

        dogListContainer.append(dogEl);
    }
});

filterEl.addEventListener('keyup', async() => {
    const dogArray = await getDogs();

    const input = filterEl.value.toUpperCase();

    const filteredDogs = dogArray.filter(dog => dog.name.toUpperCase().indexOf(input) !== -1);

    dogListContainer.innerHTML = '';

    for (let dog of filteredDogs) {
        const dogEl = renderDogCard(dog);

        dogListContainer.append(dogEl);
    }
});



