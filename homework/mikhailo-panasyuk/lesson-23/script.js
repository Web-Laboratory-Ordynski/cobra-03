var playList = [

    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];
var listOfMusik = document.querySelector('.playlist');
let list  = document.createElement('ol');
listOfMusik.append(list);


playList.forEach(element => {
    let itemList = document.createElement('li');
    itemList.innerHTML = `${element.author} : ${element.song}`;
    list.append(itemList)
});

// for(i=0;i<playList.length;i++){
//     let itemList = document.createElement('li');
//     itemList.innerHTML = `${playList[i].author} : ${playList[i].song}`;
//     list.append(itemList)
// }

let modalWrapper = document.querySelector('.modal__wrapper');
let modalAction = document.querySelectorAll('.modal__action')
function openCloseModal(){
    modalWrapper.classList.toggle('d-none')
}
modalAction.forEach(element => {
    element.addEventListener('click',openCloseModal);
});


let lightsButton = document.querySelector('.lights__button');
let lightsCircles = document.querySelectorAll('.lights__circle');

function switchColor(){
   
    if(lightsCircles[1].classList.contains('lights__deactive') && lightsCircles[2].classList.contains('lights__deactive')){
        lightsCircles[1].classList.remove('lights__deactive')
        lightsCircles[0].classList.add('lights__deactive')
        return 
    }
    if(lightsCircles[0].classList.contains('lights__deactive') && lightsCircles[2].classList.contains('lights__deactive')){
        lightsCircles[2].classList.remove('lights__deactive')
        lightsCircles[1].classList.add('lights__deactive') 
        return
    }else{
        lightsCircles[0].classList.remove('lights__deactive')
        lightsCircles[2].classList.add('lights__deactive') 
    }
}

lightsButton.addEventListener('click',switchColor)





