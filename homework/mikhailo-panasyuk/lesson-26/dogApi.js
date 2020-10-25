function getAllBreedsPromise() {
    return superagent.get('https://api.thedogapi.com/v1/breeds')
        .then(response => response.body);;
}
function getBreedByStringPromise(breedQuery) {
    return superagent.get(`https://api.thedogapi.com/v1/breeds/search?q=${breedQuery}`)
        .then((response,err) => {
            const breed = response.body[0];
                return superagent.get(`https://api.thedogapi.com/v1/images/search?breed_id=${breed.id}`);    
        })
        .then((response) => {
            const fullBreedInfo = {
                breed: response.body[0].breeds[0],
                img: response.body[0]
            };
            delete fullBreedInfo.img.breeds;
            return Promise.resolve(fullBreedInfo);
        });
}
