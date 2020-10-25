function createListFromBreeds(breedsArray){
    let newList = document.createElement('p');
    breedsArray.forEach(element => {
        newList.innerHTML += `${element.name }<br>`
    });
    return newList;
}
function createCardFromBreed(breed) {
    let newP = document.createElement('p')
    newP.innerHTML = `
    Name: ${breed.breed.name} <br>
    Bred for : ${breed.breed.bred__for} <br>
    Life span : ${breed.breed.life_span}
    <img src='${breed.img.url}' /img>
    `
    return newP
}
$(document).ready(() => {
    const dogList = document.getElementById('dog__list');
    const cardContainer = document.getElementById('card-container');
    const searchBreedBtn = document.getElementById('js-btn-search');
    const userBreedInput = document.getElementById('js-input-search');
    getAllBreedsPromise()
        .then(breedsArray => dogList.appendChild(createListFromBreeds(breedsArray)));

    searchBreedBtn.addEventListener('click', (event) => {
        getBreedByStringPromise(userBreedInput.value)
            .then( cardContainer.innerHTML = '')  
            .then(breedInfo => cardContainer.appendChild(createCardFromBreed(breedInfo)))
            .then(console.log(cardContainer))
    });     
});








