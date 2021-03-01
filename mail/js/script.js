
// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

//1. Chiedi all'utente la sua email (acquisizione dei dati da confrontare tramite un prompt):

var email = prompt("Hey tu! Inserisci la tua email per capire se sei in lista!");

//2. Controlla che sia nella lista di chi può accedere:

//2a. Definire la lista di chi può accedere con un Array:

var lista = ["sohototopannasan@libero.it", "marco-panni@gmail.com", "lardi@gmail.com", "pigiamino-morbidozzi@gmail.com", "armin-tamzarian@yahoo.com", "oi-chicco@panini.it"]
console.log(lista);

//2b. Controlla indice per indice tutta la lista di chi può accedere con un ciclo for; per ragioni di debug stampa anche i nomi in Console.
// -------------------------------------------------------------------------------------------------------------------------------------------
// Il contatore continua fino a che una delle 2 condizioni stabilite è falsa:
// la prima:il contatore ha eseguito un numero di iterazioni INFERIORE alla lunghezza dell'array.
// la seconda: il contenuto dell'indice array preso in esame è DIVERSO rispetto al conenuto assegnato alla variabile email tramite prompt.
//il ciclo confronta l email inserita con tutti gli indici dell'array uno dopo l'altro fintanto che o si esaurscono, o ne viene trovato uno uguale a quelli stabiliti.
// Siccome si usa l'operatore logico && entrambe le condizioni devono essere vere per far continuare il ciclo: così il ciclo si interrompe non appena UNA delle DUE è falsa.
// -------------------------------------------------------------------------------------------------------------------------------------------

for ( var i = 0 ; ( i < lista.length ) && ( lista[i] != email ) ; i++){
  console.log(lista[i]);
}
// 3. Stampa un messaggio appropriato sull'esito del controllo:
// -------------------------------------------------------------------------------------------------------------------------------------------
//3a. Se l'email inserita è uguale a un elemento dell'array, viene stampato un messaggio di approvazione.
// Questo avviene perché il ciclo si è interrotto ed è stata trovato un indice lista[i] identico alla variabile email fornita.
// -------------------------------------------------------------------------------------------------------------------------------------------

if ( lista[i] == email ) {
  document.getElementById('message').innerHTML = "<em>La tua Email è stata verificata! Complimentoni, puoi entrare nel nostro esclusivo club!</em>"
}

//3b. In caso contrario, è stampato un messaggio di disapprovazione.
// -------------------------------------------------------------------------------------------------------------------------------------------
// Questo avviene perché il ciclo si è interrotto per esaustione dell'array e non è stata trovato un indice lista[i] identico alla variabile email fornita.
// -------------------------------------------------------------------------------------------------------------------------------------------

else {
  document.getElementById('message').innerHTML = "<em>Ahi, ahi, ahi! Sembra che tu non sia affatto uno Sviluppatore Provetto:<br>sarà per la prossima volta, perdente...</em>"
}
