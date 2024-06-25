/* TEORIA */

/* DOM = Document Object Modeling */
// Es una serie de herramientas que nos permite agarrar elementos que estén en la pagina web (HTML), convertirlo a objetos JavaScript,
// editarlos todo lo que sea necesario y devolverlos a la página web como deberían estar.


/* ¿CÓMO LINKAR JS A NUESTRO HTML? */
    // En nuestro archivo HTML debemos agregar, al final del body, el siguiente script:
    // El defer hace que lea el archivo antes de todo!!
    <script src="ruta-del-javascript" defer></script>


/* BUSCANDO EN EL DOM */

    /* Los dos buscadores más importantes: */
    // 1. Devuelve un único elemento con determinado selector (tag, id o class)
    document.querySelector("selectorUnico");

    // 2. Devuelve todos los elementos con determinado selector (tag, id o class)
    document.querySelectorAll("selectorTodos");

    /* Otros buscadores: */
    // 3. Devuelve el elemento con determinado "Id"
    document.getElementById("id");

    // 4. Devuelve los elementos con determinado "name"
    document.getElementsByName("name");

    // 5. Devuelve los elementos con determinado "nameTag"
    document.getElementsByTagName("nameTag");

    // 6. Devuelve los elementos con determinado "nameClass"
    document.getElementsByClassName("nameClass");

    // 7. Devuelve el valor del atributo con nombre "nameAttribute"
    document.getAttribute("nameAttribute");


/* EJEMPLOS */

    // 1.
    let sidebar = document.querySelectorAll('.sidebar');

    // 2.
    let tituloPrincipal = document.querySelector('#titulo-principal');

    // 3.
    let articulo = document.querySelectorAll('.articulo');


/* MANIPULANDO EL DOM */

    // 1. Crear un nuevo elemento
    document.createElement("name");

    // 2. Crear un nodo de texto que lo podemos añadir a un elemento
    document.createTextNode("Text");

    // 3. Crear un atributo que podemos añador a un elemento
    document.createTextAttribute("attribute");

    // 4. Hacer hijo un elemento a otro
    document.appendChild("node");

    // 5. Agregar un nuevo elemento o nodo antes de otro
    // param1 = nuevo elemento o nodo
    // param2 = antes del elemento o nodo que debe ir el nuevo
    document.insertBefore(param1, param2);

    // 6. Remover el atributo del nodo desde el que se llama
    document.removeAttribute("attribute");

    // 7. Eliminar el nodo hijo que se indica con child
    document.removeChild("child");

    // 8. Replazar el nodo viejo por el nuevo
    // param1 = nuevo
    // param2 = viejo
    document.replaceChild(param1, param2);

    // 9. Eliminar un nodo
    document.remove();

    // 10.
    document.setAttribute();


/* EJEMPLOS: */

    // 1. Agregar un elemento

    // OPCIÓN 1:
    // Paso 1 - Crear elemento
    let subtitulo = document.createElement("h2");
    // Paso 2 - Agregar una clase si necesario
    subtitulo.classList = "subtitulos";
    // Paso 3 - Agregar el texto del elemento creado
    subtitulo.innerHTML = "<em>Las últimas noticias</em>";

    // Paso 4 - Llamar el elemento padre
    let cabecera = document.querySelector("#cabecera");
    // Paso 5 - Asignar el nuevo elemento al elemento padre
    cabecera.appendChild(subtitulo);

    // OPCIÓN 2:
    // Paso 1 - Crear elemento
    let newDiv = document.createElement('div');
    // Paso 2 - Agregar el texto del elemento creado
    let textoNewDiv = document.createTextNode("Div utilizando insertBefore");
    // Paso 3 - Agregar una clase si necesario
    newDiv.classList = 'insertBefore';
    // Paso 4 - Asignar el nuevo elemento al elemento padre
    newDiv.appendChild(textoNewDiv);

    // Paso 5 - Llamar el elemento marcador (para saber donde va el nuevo elemento)
    let marcadorNewDiv = document.querySelector("#marcador-new-div");

    // Paso 6 - Decir donde debe ir el elemento nuevo en relación al elemento marcador
    document.body.insertBefore(newDiv, marcadorNewDiv);

    // 2.
    function addContent () {
        // crea un nuevo div y añade contenido
        var newDiv = document.createElement("div");
        var newContent = document.createTextNode("Hola! ¿Qué tal?");
        // añade texto al div creado.
        newDiv.appendChild(newContent);
        // añade el elemento creado y su contenido al DOM
        var currentDiv = document.getElementById("div1");
        document.body.insertBefore(newDiv, currentDiv);
    }

    // 3. Modificando texto de los parrafos
    let articulos = document.querySelectorAll(".articulo");

    articulos.forEach(articulo => {
        articulo.childNodes[3].style.fontSize = "20px";
        articulo.childNodes[3].style.color = "pink";
    });

    // 4. Modificando color del texto cuando pasamos el ratón
    articulos.forEach(articulo => {
        articulo.addEventListener("mouseover", function () {
            articulo.childNodes[3].style.color = "pink";
        })
        articulo.addEventListener("mouseout", function () {
            articulo.childNodes[3].style.color = "pink";
        })
    });

    // 5. Resolución del ejemplo 4 pero con for...of
    for (let articulo of articulos) {
        articulo.addEventListener("mouseover", function () {
            articulo.childNodes[3].style.color = "pink";
        })
        articulo.addEventListener("mouseout", function () {
            articulo.childNodes[3].style.color = "pink";
        })
    };

/* PROPIEDADES DE LOS NODOS */

    // 1. Devuelve un objeto con todos los atributos que posee el nodo
    attributes;

    // 2. Permite setear o devolver el nombre de la clase (para CSS) que tenga el nodo si la tiene
    className;

    // 3. Listado de clases del nodo
    classList;

    // 4. Listado de id del nodo
    id;

    // 5. Devuelve o permite insertar codigo HTML dentro de un nodo
    innerHTML;

    // 6. Devuelve el nombre del nodo (si es un <div> devuelve DIV)
    nodeName;

    // 7. Devuelve el valor del nodo. Si es de tipo "element", devuelve null
    nodeValue;

    // 8. Permite insertar código CSS para editar el estilo
    style;

    // 9. Devuelve el nombre de la etiqueta HTML correspondiente al nodo. Similar a nodeName, pero solo en nodos de tipo tag HTML
    tagName;

    // 10. Devuelve o permite modificar el valor del atributo title de un nodo
    title;

    // 11. Inserta texto en nuestro elemento
    textContent;

    // 12. Devuelve un array con los nodos hijos del nodo desde el que se llama
    childNodes;

    // 13. Devuelve el primer hijo
    firstElementChild;

    // 14. Devuelve el último hijo
    lastElementChild;

    // 15. Devuelve el anterior "hermano" o nodo al mismo nivel
    previousSibiling;

    // 16. Devuelve el siguiente "hermano" o nodo al mismo nivel
    nextSibiling;

    // 17. Devuelve el nodo raíz donde se encuentra el nodo desde el que se llama
    ownerDocument;

    // 18. Devuelve el nodo padre del nodo que se llama
    parentNode;


/* EJEMPLOS */

    // 1.
    function sayHello() {
        console.log('Hello!');
    }

    function addListeners() {
        document.getElementById("btn").addEventListener("click", sayHello);
    }

    window.onload = function() {
        // init listeners
        addListeners();

        // init content
        addElement();
    }

    function addElement() {
        var newElem = document.createElement('div');
        newElem.id = 'nuevoElemento';
        newElem.className = 'bloque';
        newElem.style = 'background:red; width:200px; height:200px';
        var body = document.querySelector('body');
        body.appendChild(newElem);
    }

    // 2. Si queremos acceder al texto dentro del html:
    console.log(tituloPrincipal.innerHTML);

    // 3. Para cambiar el texto en la página:
    tituloPrincipal.innerHTML = "Noticias de la mañana";

    // 4. Cambiar el color:
    tituloPrincipal.style.color = "green";