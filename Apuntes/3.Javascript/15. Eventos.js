/* EVENTOS */
// Hasta ahora, todo lo que vimos, no le permite al usuario demasiada interacción.
// Aquí es donde entran los "eventos". Es decir, una vez detectados, lanzan las funciones que indiquemos.
// Veamos algunos ejemplos y eventos útiles:

/* EVENTOS DEL RATÓN (MOUSE) */

    click // Botón izquierdo del ratón
    mouseover // Pasar el ratón sobre el elemento
    mouseout // Sacar el ratón de un elemento

/* EVENTOS DEL TECLADO */

    keypress // Pulsar una tecla
    keyup // Soltar una tecla
    input // Similar a los anteriores adecuado a los inputs, leyendo el valor en tiempo real

/* SOBRE ELEMENTOS */

    focus // Poner el foco sobre un elemento, por ejemplo, un input
    blur // Quitar el foco de un elemento
    change // Al cambiar el contenido de un input (hay que quitar el foco para que se considere un cambio) o de un select

/* FORMULARIOS */

    submit // Pulsar el botón submit de un formulario
    reset // Pulsar el botón reset de un formulario

/* DE LA VENTANA */

    resize // Se ha cambiado el tamaño de la ventana
    scroll // Se ha hecho scroll en la ventana o un elemento


/* EJEMPLO DE USO ONCLICK (NO RECOMENDADO) */
// Se ejecuta cuando el usuario hace clic en un elemento HTML (independiente de si es un botón o no)

    // 1. Agregarlo en el elemento dentro del archivo HTML:
    // <button onclick="funcionalidadDeMiBoton()">Púlsame</button>

    // 2. Agregar la función en nuestro archivo JS
    function funcionalidadDeMiBoton() {
        alert("Acabas de hacer click en el botón.");
    }

/* EJEMPLO ESCUCHADORES DE EVENTOS */
// Otra manera de hacerlo es utilizando eventListener:

    // 1. Agregar un id en el elemento dentro del HTML
    // <button id="btn">Púlsame</button>

    // 2. Agregar la función en nuestro archivo JS
    var handleClick = function(event) {
        console.log(event);
    }

    document.getElementById("btn").addEventListener("click", handleClick);

    // 3. Si es un evento que solo utilizamos una vez, lo ideal es removerlo una vez terminad
    document.getElementById("btn").removeEventListener("click", handleClick);