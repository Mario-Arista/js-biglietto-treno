alert("Ciao Babbano! Per raggiungere Hogwarts devi prendere il nostro treno speciale. Prima devi recarti alla stazione di King's Kross e poi devi trovare il binario 9 e 3/4... Buona fortuna!")

alert("Per sapere il prezzo del biglietto ti chiediamo di inserire i KM che devi percorrere e la tua età. Grazie Babbano!")

// KM chiesti:

let kmNeeded = Number(prompt("Inserisci i KM che devi percorrere"));

console.log("età inserita dall'utente", kmNeeded);

// Età chiesta:

const userAge = Number(prompt("Inserisci la tua età"));

console.log("età inserita dall'utente", userAge);

// Prezzo biglietto senza sconto

let trainPrice = Number(kmNeeded * 0.21);
let roundedString = trainPrice.toFixed(2);
let rounded = Number(roundedString);

console.log("Prezzo treno in euro senza sconto", trainPrice);

if ( userAge < 18 ) {
    document.getElementById("outputTicket").innerHTML = rounded * 0.80 + "€";
    document.getElementById("message").innerHTML = "Dato che hai meno di 18 anni, hai uno sconto del 20%";

} else if ( userAge > 65 ) {
    document.getElementById("outputTicket").innerHTML = rounded * 0.60 + "€";
    document.getElementById("message").innerHTML = "Dato che hai più di 65 anni, hai uno sconto del 20%";
} else {
    document.getElementById("outputTicket").innerHTML = rounded + "€";
}


