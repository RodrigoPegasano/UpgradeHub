/* DOM */

document.addEventListener("DOMContentLoaded", function () {

    // EJEMPLO CON IMAGEN RANDOM
    /* let container = document.querySelector("#card-container");

    let numeroDeCards = 10;

    for (let i = 0; i < numeroDeCards; i++) {
        let card = document.createElement("div");
        let image = document.createElement("img");
        let title = document.createElement("p");

        container.appendChild(card);
        card.appendChild(image);
        card.appendChild(title);

        card.className = "card";
        image.setAttribute("src", "https://picsum.photos/200");
        title.textContent = "El titulo";
    } */

    // EJEMPLO CON MOCKAROO GENERATOR
    const cards = [
        {
            "url": "https://picsum.photos/200?random=1",
            "name": "邓"
        }, {
            "url": "https://picsum.photos/200?random=2",
            "name": "苗"
        }, {
            "url": "https://picsum.photos/200?random=3",
            "name": "惠"
        }, {
            "url": "https://picsum.photos/200?random=4",
            "name": "沈"
        }, {
            "url": "https://picsum.photos/200?random=5",
            "name": "莘"
        }, {
            "url": "https://picsum.photos/200?random=6",
            "name": "巢"
        }, {
            "url": "https://picsum.photos/200?random=7",
            "name": "栾"
        }, {
            "url": "https://picsum.photos/200?random=8",
            "name": "晁"
        }, {
            "url": "https://picsum.photos/200?random=9",
            "name": "滕"
        }, {
            "url": "https://picsum.photos/200?random=10",
            "name": "汪"
        }
    ];

    let container = document.querySelector("#card-container");

    for (let card of cards) {
        let oneCard = document.createElement("div");
        oneCard.className = "card";

        let image = document.createElement("img");
        image.src = card.url;

        let title = document.createElement("p");
        title.textContent = card.name;

        container.appendChild(oneCard);
        oneCard.appendChild(image);
        oneCard.appendChild(title);
    }

});