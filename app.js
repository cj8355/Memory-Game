// careating cards array to hold the info for the cards that get selected by the user
const cardArray = [
    {
        name: "fries",
        img: './images/fries.png'
    },
    {
        name: "cheeseburger",
        img: './images/cheeseburger.png'
    },
    {
        name: "hotdog",
        img: './images/hotdog.png'
    },
    {
        name: "ice-cream",
        img: './images/ice-cream.png'
    },
    {
        name: "milkshake",
        img: './images/milkshake.png'
    },
    {
        name: "pizza",
        img: './images/pizza.png'
    },
    {
        name: "fries",
        img: './images/fries.png'
    },
    {
        name: "cheeseburger",
        img: './images/cheeseburger.png'
    },
    {
        name: "hotdog",
        img: './images/hotdog.png'
    },
    {
        name: "ice-cream",
        img: './images/ice-cream.png'
    },
    {
        name: "milkshake",
        img: './images/milkshake.png'
    },
    {
        name: "pizza",
        img: './images/pizza.png'
    },
]

// randomly sorting the cards array
cardArray.sort(() => 0.5 - Math.random())

// selecting the grid element in the index.html file
const gridDisplay = document.querySelector("#grid")

// selecting the seault element to render the result of the game to the page
const resultDisplay = document.querySelector('#result')

// array for the cards the user selects
let cardsChosen = []

// array for holding the IDs of the cards chosen by the user
let cardsChosenIds = []

const cardsWon = []

// dynamically creating the cards that the user will select
function createBoard () {
    for (let i = 0; i < cardArray.length;i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

// function to check if the 2 cards that the user has selected match
function checkMatch() {
    
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('you have clicked the same image')
    }


    if (cardsChosen[0] == cardsChosen[1]) {
        alert('you found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('sorry try again')
    }
    resultDisplay.innerHTML = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.innerHTML = 'Congrats, you found them all'
    }
}

// function to flip the card when clicked
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
    console.log('clicked' + cardId)
}