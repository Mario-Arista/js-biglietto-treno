const temperatureCelsius = Number(prompt("igita una cifra in gradi Celsius e ti restituirò l'equivalente in Fahrenheit"));

document.getElementById("messageTemp").innerHTML = `Hai digitato ${temperatureCelsius} gradi Celsius, quindi il suo equivalente in gradi Fahrenheit è`;
document.getElementById("outputTemp").innerHTML = Number(temperatureCelsius * 9 / 5 + 32);
