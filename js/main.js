/*
? Consegna

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

* TIP:

Per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

- 100km, 10 anni => prezzo corretto: €16.80
- 100km, 70 anni => prezzo corretto: €12.60
*/

// ? Pseudo codice

// - Chiedo all'utente il numero di chilometri che vuole percorrere (via prompt)
// - Trasformo gli input dell'utente in valori numerici
const userKM = parseInt(
  prompt("Quanti KM vuoi percorrere? [Inserire un valore numerico]", "100")
);
console.log("userKM: ", userKM);

// - Chiedo all'utente la sua età (via prompt)
// - Trasformo gli input dell'utente in valori numerici
const userAge = parseInt(
  prompt("Quanti anni hai? [Inserire un valore numerico]", "10")
);
console.log("userAge: ", userAge);

// ? Validazione
// - Se valore scritto nei prompt risulta NaN compare un errore
if (isNaN(userKM) || isNaN(userAge)) {
  alert("NON HAI INSERITO VALORI NUMERICI VALIDI");
  throw new Error("L'utente non ha inserito valori numerici validi");
}

// ? Elaborazione

// - Calcolo il prezzo del biglietto basandomi sul prezzo al km e i km inseriti dall'utente
const baseKMPrice = 0.21;
const ticketFullPrice = userKM * baseKMPrice;

console.log("ticketPrice: ", ticketFullPrice);

// ? Output

let finalPrice;
let alertMessage;

// - SE (L'utente è minorenne)
if (userAge < 18) {
  // L'utente ha uno sconto del 20%
  const twentyDiscount = (ticketFullPrice * 20) / 100;
  finalPrice = ticketFullPrice - twentyDiscount;
  alertMessage = `Il prezzo del biglietto è di € ${finalPrice.toFixed(
    2
  )} (Sconto applicato 20% Under 18)`;
}
// - OPPURE (L'utente è Over 65)
else if (userAge > 65) {
  //   - L'utente ha uno scontro del 40%
  const fourtyDiscount = (ticketFullPrice * 40) / 100;
  finalPrice = ticketFullPrice - fourtyDiscount;
  alertMessage = `Il prezzo del biglietto è di € ${finalPrice.toFixed(
    2
  )} (Sconto applicato 40% Over 65)`;
}
// - ALTRIMENTI
else {
  //   - L'utente non avrà sconto e pagherà il prezzo pieno del biglietto
  finalPrice = ticketFullPrice;
  alertMessage = `Il prezzo del biglietto è di € ${finalPrice.toFixed(
    2
  )} (Non sono stati applicati sconti)`;
}

console.log("finalPrice: ", finalPrice.toFixed(2));
alert(alertMessage);
