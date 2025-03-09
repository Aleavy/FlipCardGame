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
let previus_card = null;
const cards = [];
function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

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

        cards.push(card);
    };
    listOfImgSrcs.pop()
    return;
}

const appendingElements = (array)=>{
    array.forEach(element =>{
        listOfItems.appendChild(element)
    })
}

const cardGenerator = (father, num) =>{
    for (let i = 0; i < num; i++){
        createCard(father);
    }
    shuffle(cards)
    appendingElements(cards)

}



function flipCard(){

    this.classList.add('flip')
    setTimeout(()=>{
        if (!previus_card){
            previus_card = this
           return true;
       }
       if (this.querySelector('img').src != previus_card.querySelector('img').src){
           
           this.classList.remove('flip')
           previus_card.classList.remove('flip')
           previus_card = null
       }else{
           previus_card = null
       }
    }, 800)
}

cardGenerator(listOfItems, 10)

cards.forEach((card) => card.addEventListener('click', flipCard))