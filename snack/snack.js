alert("Nel prossimo messagio digita quello che deisideri avere come output")

let choice = prompt("DIGITA media, se vuoi calcolare la media tra tre numeri. DIGITA gioco, se vuoi giocare a carta forbice e pietra. DIGITA temp, se vuoi convertire gradi Celsius in Fahrenheit")
console.log(choice)

let esperim = (Math.random() * 3 + 1);
console.log("esperimento", esperim)

if (choice === "media") {


    const FirstNumber = Number(prompt("Inserisci il primo numero casuale"));

    console.log("primo num inserito dall'utente", FirstNumber);


    const secNumber = Number(prompt("Inserisci il primo numero casuale"));

    console.log("primo num inserito dall'utente", secNumber);


    const thirdNumber = Number(prompt("Inserisci il primo numero casuale"));

    console.log("primo num inserito dall'utente", thirdNumber);

    // Output:

    let mediaNumbers = Number((FirstNumber + secNumber + thirdNumber) / 3);
    let roundedString = mediaNumbers.toFixed(2);
    let rounded = Number(roundedString);

    document.getElementById("output").innerHTML = rounded;
    document.getElementById("message").innerHTML = "Lo sai che bastava una qualunque calcolatrice?";

} else if (choice === "temp") {
    const temperatureCelsius = Number(prompt("igita una cifra in gradi Celsius e ti restituirò l'equivalente in Fahrenheit"));

    document.getElementById("message").innerHTML = `Hai digitato ${temperatureCelsius} gradi Celsius, quindi il suo equivalente in gradi Fahrenheit è`;
    document.getElementById("output").innerHTML = Number(temperatureCelsius * 9 / 5 + 32);

} else (choice === "gioco"); {
    
    const gameApertivo = prompt("scegli e digita: carta, forbici o pietra e gioca con il computer");

    const computerNumber = (Math.random() * 3 + 1);

    console.log("1pietra, 2forbici, 3carta", computerNumber)

    if((gameApertivo === "pietra") && (computerNumber >= 1) && (computerNumber < 2)) {

        document.getElementById("message").innerHTML = `Hai digitato ${gameApertivo}, ma anche il computer: PAREGGIO!`;

    } else if ( (gameApertivo === "pietra") && (computerNumber >= 2) && (computerNumber < 3)) {

        document.getElementById("message").innerHTML = `Hai digitato ${gameApertivo}, e il computer forbici: HAI VINTO!`;

    } else ( (gameApertivo === "pietra") && (computerNumber >= 3)); {

        document.getElementById("message").innerHTML = `Hai digitato ${gameApertivo}, e il computer carta: HAI PERSO!`;
        
    } 
    
    if ( (gameApertivo == "forbici") && (computerNumber >= 2) && (computerNumber < 3)) {

        document.getElementById("message").innerHTML = `Hai digitato ${gameApertivo}, ma anche il computer: PAREGGIO!`;

    } else if ( (gameApertivo == "forbici") && (computerNumber >= 3)) {
        document.getElementById("message").innerHTML = `Hai digitato ${gameApertivo}, e il computer carta: HAI VINTO!`;

    } else ( (gameApertivo == "forbici") && (computerNumber >= 1) && (computerNumber < 2)); {
        document.getElementById("message").innerHTML = `Hai digitato ${gameApertivo}, e il computer forbici: HAI PERSO!`;

    } 
    
    if ( (gameApertivo == "carta") && (computerNumber >= 3)) {
        document.getElementById("message").innerHTML = `Hai digitato ${gameApertivo}, ma anche il computer: PAREGGIO!`;

    } else if ( (gameApertivo == "carta") && (computerNumber >= 1) && (computerNumber < 2)) {
        document.getElementById("message").innerHTML = `Hai digitato ${gameApertivo}, e il computer pietra: HAI VINTO!`;

    } else ( (gameApertivo == "carta") && (computerNumber >= 2) && (computerNumber < 3)); {
        document.getElementById("message").innerHTML = `Hai digitato ${gameApertivo}, e il computer forbici: HAI PERSO!`;

    }

}




