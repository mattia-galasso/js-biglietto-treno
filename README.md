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

---

## Pseudo codice

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

- SE (L'utente è minorenne)

  - L'utente ha uno sconto del 20%

- OPPURE (L'utente è Over 65)

  - L'utente ha uno scontro del 40%

- ALTRIMENTI
  - L'utente non avrà sconto e pagherà il prezzo pieno del biglietto
