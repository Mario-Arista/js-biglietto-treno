alert("Nel prossimo messagio digita quello che deisideri avere come output")

let choice = prompt("DIGITA media, se vuoi calcolare la media tra tre numeri. DIGITA carta, se vuoi giocare a carta forbice e pietra. DIGITA temp, se vuoi convertire gradi Celsius in Fahrenheit")

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

} else (choice === "carta"); {
    
}



// Temperatura Celsius numero chiesto:



