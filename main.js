let cards_place = document.querySelector(".cards-inner")
axios.get("http://192.168.0.62:8000/card").then((response) => {
    let cards = response.data;
    console.log(cards)
    for(let card in cards){
        let cardTemplate = document.querySelector(".card-template")
        let cardContent = cardTemplate.content.cloneNode(true)
        cardContent.querySelector(".card-name").innerHTML = card
        cardContent.querySelector(".card-price").innerHTML = cards[card]["price"]
        console.log(cardContent)
        cards_place.appendChild(cardContent)
    }
})