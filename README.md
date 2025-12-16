# Biglietto del treno

Nome repo: `js-biglietto-treno`

## Consegna

> Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
>
> Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
>
> il prezzo del biglietto è definito in base ai km (0.21 € al km)
> va applicato uno sconto del 20% per i minorenni
> va applicato uno sconto del 40% per gli over 65.
> L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

#### TIP:

> Per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:
>
> - 100km, 10 anni => prezzo corretto: €16.80
> - 100km, 70 anni => prezzo corretto: €12.60

### Bonus

> - Chiediamo il nome, oltre agli altri dati. Se è artur, viaggia GRATIS sempre
> - Se è tiziano, viaggia a 0.5 euro al km invece di 0.21

---

## Pseudo codice

- Chiedo il nome all'utente

- Chiedo all'utente il numero di chilometri che vuole percorrere (via prompt)

- Chiedo all'utente la sua età (via prompt)

- Trasformo gli input dell'utente in valori numerici

**TO DO LATER**

- Valido gli input dell'utente

### Elaborazione

- Calcolo il prezzo del biglietto basandomi sul prezzo al km e i km inseriti dall'utente

- Calcolo lo sconto del 20% se l'utente è minorenne

- Calcolo lo sconto del 40% se l'utente è Over 65

### Output

- SE (L'utente si chiama Artur)

  - L'utente viaggia GRATIS

- OPPURE (L'utente si chiama Tiziano)

  - L'utente viaggia pagando 0,5 al km

- ALTRIMENTI
  - Segue le regole di default

---

- SE (L'utente è minorenne)

  - L'utente ha uno sconto del 20%

- OPPURE (L'utente è Over 65)

  - L'utente ha uno scontro del 40%

- ALTRIMENTI
  - L'utente non avrà sconto e pagherà il prezzo pieno del biglietto
