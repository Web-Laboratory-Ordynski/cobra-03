console.log('1');

$(document).ready(function () { 
  $(".cat-slider").slick({ 
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
  }); // 1

  $(".dog-slider").slick({ 
    // dots: true,
    infinite: true,
    speed: 300,
    slidesToScroll: 3,
    variableWidth: true,
    adaptiveHeight: true,
  }); // 2
  // --------
  let dogPromise = superagent.get("https://api.thedogapi.com/v1/breeds"); // 3
  dogPromise.then(function (res) { // 4
    const dogsId = res.body.map((dog) => dog.id);
    let divSlider = document.querySelector(".dog-slider");

    function startThePhotoBoom() {
      const promisesArray = dogsId.map(id => {
        return superagent
          .get('https://api.thedogapi.com/v1/images/search?breed_id=' + id)
      })
      Promise.all(promisesArray).then((resultsArray) => {
        resultsArray.forEach((res) => {
          let img = document.createElement('img');
          img.src = res.body[0].url;
          img.classList.add("photoDog")
          divSlider.appendChild(img);
        })

        $('#dog-slider').slick("refresh");
      })

    }

    $("#typedInfo").click(startThePhotoBoom);
  })
  .catch(err => console.log('ERROR'))
  // --------
});

console.log('2');


// $(function () {
//   console.log("ready!");
// });