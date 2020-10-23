let dogPromise = superagent.get("https://api.thedogapi.com/v1/breeds");
dogPromise.then(function(res) {

  const dogsString = res.body.map((dog) => dog.id);
  
  let divSlider = document.querySelector(".dog-slider");

  function startThePhotoBoom() {
    dogsString.forEach(elem => {
      superagent
              .get('https://api.thedogapi.com/v1/images/search?breed_id=' + elem)
              .then(function(res) {
                let img = document.createElement('img');
                    img.src = res.body[0].url;
                    img.classList.add("photoDog")
                    divSlider.appendChild(img);
                    $('#dog-slider').slick("refresh")
              });
    })  
  }

  typedInfo.addEventListener("click", startThePhotoBoom);
  // let starter = startThePhotoBoom()
  
})
.catch(err => console.log('ERROR'))

$(function () {
  console.log("ready!");
});



      
    