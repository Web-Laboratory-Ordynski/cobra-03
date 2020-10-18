let chooseSelect = document.querySelector('.choose__select');
let chooseButton = document.querySelector('.choose__button')
let resultFoto = document.querySelector('.result__foto')
let resultDescr = document.querySelector('.result__descr')
let selectValue;
let dogsString;
let dogId;
let dogFoto;

function breedsDataCallback(err, res) {
    if (err) {
        alert(err);
        return;
    }
    dogsString = res.body
        .map(function (dog) {
            return dog.name;
        })
    function addSelect(arr) {
        for (i = 0; i < arr.length; i++) {
            var newOption = document.createElement('option');
            newOption.setAttribute('value', arr[i]);
            newOption.innerHTML = arr[i];
            chooseSelect.appendChild(newOption);
        }
    }
    addSelect(dogsString)
}
function getAll(err, res) {
    if (err) {
        alert(err);
        return;
    }
    let dogList = res.body
    dogList.forEach(element => {
        if (element.name == selectValue) {
            dogId = element.id;
            let newDogDescr = document.createElement('p');
            newDogDescr.innerHTML = `
            name : ${element.name} <br>
            weight : ${Object.entries(element.weight)} <br>
            height : ${Object.entries(element.height)} <br>
            bred for : ${element.bred_for} <br>
            breed group : ${element.breed_group} <br>
            life span: ${element.life_span} <br>
            origin : ${element.origin} <br>
            temperament : ${element.temperament} <br>
            `
            resultDescr.appendChild(newDogDescr);
            superagent
                .get(`https://api.thedogapi.com/v1/images/search?include_breed=1&breed_id=${dogId}`)
                .end(getFoto);
        }
    });
}
function getFoto(err,res){
    if (err) {
        alert(err);
        return;
    }
    dogFoto = res.body
    .map(function (dog) {
        return dog.url;
    })
    let newFoto = document.createElement('img');
    newFoto.setAttribute('src',dogFoto)
    resultFoto.appendChild(newFoto) 
}
superagent
    .get("https://api.thedogapi.com/v1/breeds")
    .end(breedsDataCallback);
chooseSelect.addEventListener('change', function () {
    selectValue = this.value;
    return selectValue
})
chooseButton.addEventListener('click', function () {
    if (selectValue == undefined || selectValue == '') {
        alert('Choose dog')
    } else {
        resultDescr.innerHTML = '';
        resultFoto.innerHTML ='';
        superagent
            .get("https://api.thedogapi.com/v1/breeds")
            .end(getAll);      
    }
})