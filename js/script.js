// alert("Ciao Babbano! Per raggiungere Hogwarts devi prendere il nostro treno speciale. Prima devi recarti alla stazione di King's Kross e poi devi trovare il binario 9 e 3/4... Buona fortuna!")

// alert("Per sapere il prezzo del biglietto ti chiediamo di inserire i KM che devi percorrere e la tua età. Grazie Babbano!")

// const kmNeeded = prompt("Inserisci i KM che devi percorrere")

// const userAge = prompt("Inserisci la tua età")

// test
const kmNeeded = 100;

const userAge = 70;

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana
// (con massimo due decimali, per indicare centesimi sul prezzo).

let trainPrice = `${kmNeeded} * 0.21 + €`;

console.log("Prezzo treno in euro", trainPrice);

if ( userAge < 18 ) {

}
