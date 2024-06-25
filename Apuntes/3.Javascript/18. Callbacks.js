// Callback
// Es la forma más común de controlar la asincronía en JavaScript

function callbackExample(list, message) {
    console.log(`El listado final es: ${list.join(', ')} -`, message);
}

function addItemAndTriggerCallback (item, list, callback) {
    if (!list) {
        setTimeout(() => {
            console.log('No existe el array');
        }, 2000);
    } else {
        setTimeout(() => {
            list.push(item);
            callback(list, '[OK]');
        }, 2000);
    }
}

addItemAndTriggerCallback('Mario', ['Alberto', 'Jose'], callbackExample);
// addItemAndTriggerCallback('Mario', null, callbackExample);