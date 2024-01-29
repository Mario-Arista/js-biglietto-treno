alert("Scrivi tre numeri qualunque e ti restituisco la media")



// Primo numero chiesto:

const FirstNumber = Number(prompt("Inserisci il primo numero casuale"));

console.log("primo num inserito dall'utente", FirstNumber);

// Secondo numero chiesto:

const secNumber = Number(prompt("Inserisci il primo numero casuale"));

console.log("primo num inserito dall'utente", secNumber);

// Terzo numero chiesto:

const thirdNumber = Number(prompt("Inserisci il primo numero casuale"));

console.log("primo num inserito dall'utente", thirdNumber);

// Output:

let mediaNumbers = Number((FirstNumber + secNumber + thirdNumber) / 3);
let roundedString = mediaNumbers.toFixed(2);
let rounded = Number(roundedString);

document.getElementById("outputAv").innerHTML = rounded;
document.getElementById("messageAv").innerHTML = "Lo sai che bastava una qualunque calcolatrice?";

