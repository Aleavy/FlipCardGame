const listOfItems = document.querySelector('div.cardscontainer');
const listOfImgSrcs = [
    'img/bird.webp',
    'img/clock.webp', 
    'img/dog.webp', 
    'img/folder.webp', 
    'img/medkit.webp',
    'img/pencil.webp',
    'img/person.webp',
    'img/something_of_iron.webp',
    'img/star_badge.webp',
    'img/sun.webp'
];
let card_flipped = 0;
let selectedCard = null;


const createCard = (father) => {
    console.log(listOfImgSrcs)
    for (let i = 0; i < 2; i++){
        let card = document.createElement('div');
        let card_front = document.createElement('div');
        let card_back = document.createElement('div');
        let img = document.createElement('img');

        card_front.textContent = '?';
        img.src = listOfImgSrcs[listOfImgSrcs.length - 1]

        card.classList.add('card');
        card_back.classList.add('card_back')
        card_front.classList.add('card_front')

        card_back.appendChild(img);
        card.appendChild(card_front)
        card.appendChild(card_back)        

        father.appendChild(card);
    };
    listOfImgSrcs.pop()
    return;
}

const cardGenerator = (father, num) =>{
    for (let i = 0; i < num; i++){
        createCard(father);
    }
}

function checkFlipped(card_flipped){
    if (card_flipped === 2){
        return false;
    }else{
        return true;
    }
}

function flipCard(){
    if (checkFlipped(card_flipped)){
    if (this.querySelector('img').src == selectedCard){
        card_flipped = -1
    }
    this.classList.add('flip')
    selectedCard = this.querySelector('img').src
    card_flipped++
    }else {
        return;
    }
}



cardGenerator(listOfItems, 10)

const cards = document.querySelectorAll('.card')
cards.forEach((card) => card.addEventListener('click', flipCard))