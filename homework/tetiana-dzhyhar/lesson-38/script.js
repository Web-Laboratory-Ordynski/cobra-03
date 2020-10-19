function breedsDataCallback(err, res) {
  if (err) {
    alert(err);
    return;
  }

  const dogsString = res.body.map((dog) => dog.name);
  let dog_list = document.querySelector(".dog_list");

  // function dogList() {
  const newOl = document.createElement("ol");
  newOl.setAttribute("id", "toHideList");
  for (let i = 0; i < dogsString.length; i++) {
    const newLi = document.createElement("li");
    newLi.innerText = dogsString[i];
    newOl.appendChild(newLi);
  }
  document.body.append(newOl);
  // }

  // openedList.addEventListener("click", dogList);

  function hider() {
    var elementDog = document.getElementById("toHideList");
    elementDog.classList.toggle("mystyle");
  }

  openedList.addEventListener("click", hider);

  const form = document.forms.tapeTheBreed;
  const elem = form.elements.breed;
  const chosenDog = elem.value;

  let breed_info = document.querySelector(".breed-info");

  function addedToDivFromTheForm() {
    let newDiv = document.createElement("div");
    newDiv.innerText = elem.value;
    breed_info.appendChild(newDiv);
  }

  typedInfo.addEventListener("click", addedToDivFromTheForm);

  function cleaner() {
    document.getElementById("cleaner").innerText = "";
  }

  typedInfo.addEventListener("click", cleaner);

  function dogCharacteristic() {
    for (let i = 0; i < res.body.length; i += 1) {
      if (res.body[i].name === elem.value) {
        let newDiv = document.createElement("p");
        newDiv.innerText =
          "name: " +
          res.body[i].name +
          "\n" +
          "bred_for: " +
          res.body[i].bred_for +
          "\n" +
          "breed_group: " +
          res.body[i].breed_group +
          "\n" +
          "heigh: " +
          res.body[i].height.metric +
          "\n" +
          "life_span: " +
          res.body[i].life_span +
          "\n" +
          "temperament: " +
          res.body[i].temperament +
          "\n" +
          "weight: " +
          res.body[i].weight.metric;
        breed_info.appendChild(newDiv);
      }
    }
  }

  typedInfo.addEventListener("click", dogCharacteristic);
}

superagent
  .get("https://api.thedogapi.com/v1/breeds")
  .end(breedsDataCallback);