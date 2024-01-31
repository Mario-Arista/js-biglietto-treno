alert("Nel prossimo messagio digita quello che deisideri avere come output")

const choice = prompt("DIGITA media, se vuoi calcolare la media tra tre numeri. DIGITA gioco, se vuoi giocare a carta forbice e pietra. DIGITA temp, se vuoi convertire gradi Celsius in Fahrenheit")
console.log(choice);


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

} else if (choice === "gioco") {

    const carForPi = prompt("scegli e digita: carta, forbici o pietra e gioca con il computer");
    console.log(carForPi);

    //  Variabili per carta = 3 / forbici = 2 / pietra = 1

    let sceltaComputer = Math.floor(Math.random() * 3) + 1;
    console.log(sceltaComputer);

    if( carForPi == "pietra") {

        if (sceltaComputer == 1) {
            document.getElementById("message").innerHTML = `Hai digitato ${carForPi}, ma anche il computer: PAREGGIO!`;
        } else if (sceltaComputer == 2) {
            document.getElementById("message").innerHTML = `Hai digitato ${carForPi}, e il computer forbici: HAI VINTO!`;
        } else {
            document.getElementById("message").innerHTML = `Hai digitato ${carForPi}, e il computer carta: HAI PERSO!`;
        }

    }
    
    if( carForPi == "forbici" ) {

        if (sceltaComputer == 2) {
            document.getElementById("message").innerHTML = `Hai digitato ${carForPi}, ma anche il computer: PAREGGIO!`;
        } else if (sceltaComputer == 3) {
            document.getElementById("message").innerHTML = `Hai digitato ${carForPi}, e il computer carta: HAI VINTO!`;
        } else {
            document.getElementById("message").innerHTML = `Hai digitato ${carForPi}, e il computer pietra: HAI PERSO!`;
        }
    }

    if( carForPi == "carta") {

        if (sceltaComputer == 3) {
            document.getElementById("message").innerHTML = `Hai digitato ${carForPi}, ma anche il computer: PAREGGIO!`;
        } else if (sceltaComputer == 1) {
            document.getElementById("message").innerHTML = `Hai digitato ${carForPi}, e il computer pietra: HAI VINTO!`;
        } else {
            document.getElementById("message").innerHTML = `Hai digitato ${carForPi}, e il computer forbici: HAI PERSO!`;
        }

        

    } 

} else {
    document.getElementById("message").innerHTML = "Non hai fatto nessuna scelta!";


}