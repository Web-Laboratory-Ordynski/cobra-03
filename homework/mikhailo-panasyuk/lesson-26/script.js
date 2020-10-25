let searchInput = document.querySelector('.search__input');
    searchButton = document.querySelector('.search__button');
    historyList = document.querySelector('.history__list');  
    historyClear = document.querySelector('.history__clear');
    newList = [];
function addTolist() {
    for (i = 0; i < localStorage.length; i++) {
        let newListItem = document.createElement('li');
        newListItem.innerHTML = localStorage.getItem(`searchHistory${i+1}`);
        historyList.appendChild(newListItem);
        newListItem.addEventListener('click', function () {
            searchInput.value = this.innerHTML
            searchButton.click()
        })
    }
}
function createListOfDog(breedsArray) {
    breedsArray.forEach(element => {
        newList.push(element.name)
    });
    return newList;
}
function createCardFromBreed(breed) {
    let newP = document.createElement('p')
    newP.innerHTML = `
    Name: ${breed.breed.name} <br>
    Bred for : ${breed.breed.bred_for} <br>
    Life span : ${breed.breed.life_span}
    <img src='${breed.img.url}' /img>`
    return newP
}
$(document).ready(() => {
    const dogChoose = document.querySelector('.dog__choose');
    autocomplete(searchInput, newList);
    getAllBreedsPromise()
        .then(breedsArray => createListOfDog(breedsArray))
    searchButton.addEventListener('click', () => {
        function refreshSlider() {
            $('.dog__choose').slick("refresh")
        }
    getBreedByStringPromise(searchInput.value)
        .then(breedInfo => dogChoose.appendChild(createCardFromBreed(breedInfo))
            .then(refreshSlider()))
    });
    addTolist();
});

searchButton.addEventListener('click', function () {
    if (searchInput.value == null || searchInput.value == undefined || searchInput.value == '') {
        return
    } else {
        localStorage.setItem(`searchHistory${localStorage.length+1}`, searchInput.value)
    }
})
historyClear.addEventListener('click', function(){
    localStorage.clear()
    historyList.remove()
})
