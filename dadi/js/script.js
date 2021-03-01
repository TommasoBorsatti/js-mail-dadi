// Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


//0. Comunico al giocatore che i dadi stanno per essere tirati:
// Eseguo un semplice alert per creare la suspance.

alert("Sei pronto a tentare la fortuna?! Via al lancio dei dadi!!!")

//1. Generare un numero random per il giocatore:
// --------------------------------------------------------------------------------------------------------------------------------------------
//Utilizzo l'oggetto Math per usare il comando random, moltiplicare il tutto per 6, arrotondare per difetto con floor e aggiungere 1.
//Ottengo così un numero da 1 a 6 che attribuisco alla variabile PunteggioGiocatore.
// Comunico il punteggio su console e su HTML
// --------------------------------------------------------------------------------------------------------------------------------------------

var punteggioGiocatore = (Math.floor(Math.random() * 6) + 1);
console.log("il punteggio del giocatore è: " + punteggioGiocatore)
document.getElementById('giocatore').innerHTML = punteggioGiocatore

//2. Generare un numero random per il computer:
// --------------------------------------------------------------------------------------------------------------------------------------------
//Utilizzo l'oggetto Math per usare il comando random, moltiplicare il tutto per 6, arrotondare per difetto con floor e aggiungere 1.
//Ottengo così un numero da 1 a 6 che attribuisco alla variabile PunteggioComputer.
// Comunico il punteggio su console e su HTML.
// --------------------------------------------------------------------------------------------------------------------------------------------

var punteggioComputer = (Math.floor(Math.random() * 6) + 1);
console.log("il punteggio del computer è: " + punteggioComputer)
document.getElementById('pc').innerHTML = punteggioComputer

//3. Confrontare i risultati per determinare relative casistiche di vittoria, sconfitta o pari punteggio:
// Imposto una condizione a 3 esiti per ognuno dei quali vado a comunicare in HTML e in Console il risultato con un messaggio appropriato.
// --------------------------------------------------------------------------------------------------------------------------------------------

if (punteggioGiocatore > punteggioComputer){
  console.log("Congratulazioni, hai vinto!")
  document.getElementById('risultato').innerHTML = "Congratulazioni, hai VINTO :) !!!"
}

else if (punteggioGiocatore == punteggioComputer){
  console.log("Ah! Hai pareggiato il tiro del computer! Gioca ancora, per spareggiare!")
  document.getElementById('risultato').innerHTML = "Ah! Hai pareggiato il tiro del computer! Gioca ancora per spareggiare!"
}

else {
  console.log("Che sfortuna! Hai perso :(")
  document.getElementById('risultato').innerHTML = "Che sfortuna! Hai perso :("
}
