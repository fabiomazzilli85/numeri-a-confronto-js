// Chiedi all'utente di inserire primo numero
let primoNumero = prompt("Inserisci il primo numero");


// Chiedi all'utente di inserire secondo numero
let secondoNumero = prompt("Ora inserisci il secondo");


primoNumero = parseInt(primoNumero); // Mi assicuro che il primo sia realmente un numero
secondoNumero = parseInt(secondoNumero); //Mi assicuro che anche questo sia un numero

// Con "if", "else if" ed "else" faccio un raffronto tra i numeri che l'utente ha inserito
if (primoNumero < secondoNumero) {
    console.log("Il primo numero che hai inserito è minore del secondo.");
} else if (secondoNumero === primoNumero) {
    console.log("I valori immessi coincidono");
} else {
    console.log("Il primo numero che hai inserito è maggiore del secondo.");
}