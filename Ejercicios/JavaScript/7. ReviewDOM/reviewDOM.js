/* EJERCICIOS DE DOM - REVIEW */

// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
// Agregamos este evento para que cargue todo el contenido antes
document.addEventListener("DOMContentLoaded", function() {

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let listCountries = document.createElement("ul");

for (let country of countries) {
    let listElement = document.createElement("li");
    listElement.textContent = country;

    listCountries.appendChild(listElement);
}

document.body.appendChild(listCountries);

});

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
document.addEventListener("DOMContentLoaded", function() {

    let removeElement = document.querySelector(".fn-remove-me");

    removeElement.remove();

});

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
document.addEventListener("DOMContentLoaded", function() {

    const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

    let elementWithAtt = document.querySelector('[data-function="printHere"]');
    let carsList = document.createElement("ul");

    for (let car of cars) {
        let carsElement = document.createElement("li");
        carsElement.textContent = car;

        carsList.appendChild(carsElement);
    }

    elementWithAtt.appendChild(carsList);

});

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
document.addEventListener("DOMContentLoaded", function() {

    const paises = [
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
    ];

    for (let pais of paises) {
        let createDiv = document.createElement("div");
        let createH4 = document.createElement("h4");
        createH4.textContent = pais.title;
        createDiv.appendChild(createH4);

        let createImg = document.createElement("img");
        createImg.src = pais.imgUrl;
        createImg.style.width = "300px";
        createImg.style.height = "200px";
        createDiv.appendChild(createImg);

        document.body.appendChild(createDiv);
    }

});

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.
document.addEventListener("DOMContentLoaded", function() {

    let removeLastElement = document.querySelector(".remove-last");

    removeLastElement.addEventListener("click", function() {
        let divs = document.querySelectorAll("div");
        divs[divs.length - 1].remove();
    })

});

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.
document.addEventListener("DOMContentLoaded", function() {

    const masPaises = [
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
    ];

    for (let masPais of masPaises) {
        let createMoreDivs = document.createElement("div");
        let createMoreH4 = document.createElement("h4");
        createMoreH4.textContent = masPais.title;
        createMoreDivs.appendChild(createMoreH4);

        let createMoreImg = document.createElement("img");
        createMoreImg.src = masPais.imgUrl;
        createMoreImg.style.width = "300px";
        createMoreImg.style.height = "200px";
        createMoreDivs.appendChild(createMoreImg);

        let createMoreButtons = document.createElement("button");
        createMoreButtons.textContent = "Remove element";
        createMoreDivs.appendChild(createMoreButtons);

        createMoreButtons.addEventListener("click", function() {
            createMoreDivs.remove();
        });

        document.body.appendChild(createMoreDivs);
    }

});