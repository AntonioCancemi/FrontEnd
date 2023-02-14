/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri 
 (l1, l2) e calcola l'area del rettangolo associato..
*/
var l1=20;
var l2=15;

area();
function area(l1,l2){
    let A
    A=(l1*l2);
    return A;
}


document.getElementById("es1").innerHTML=area();
console.log(A);



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma 
 se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
let k1=5
let k2=5
function crazySum(k1,k2){
    let sum=k1+k2;
    if (k1==k2){sum=3*sum};
    return sum;
}
console.log(sum)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza 
 assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre 
 qualora il numero fornito sia maggiore di 19.
*/

let j2=30
function crazyDiff(j2){
    let absDiff=abs(19-j2)
    if (j2>19){
        absDiff=(absDiff)*3}
    return absDiff;
}
console.log(crazyDiff(j2))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n 
 come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
let ni=30;

function boundary(ni){
    let boundflag=False;
    if (ni>=20 && ni<=100 || ni==400 ){
        boundflag=true};
    return boundflag;
};
console.log(boundary(ni));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita,
 ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero 
 positivo come parametro. La funzione deve controllare che il parametro 
 sia un multiplo di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
let m37=25;
function check3and7(m37){
    Math.abs(m37);
    let stato=false;
    if (m37%3==0 || m37%7==0){
        stato=true;}
    return stato;

}
console.log(check3and7(m37))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come 
 parametro un numero n e ritorna un'array contenente n numeri casuali 
 inclusi tra 0 e 10.
*/
let n=15
function giveMeRandom(n){
    let array1=Array(n).fill().map(()=>10*Math.random())
    return array1;
}
console.log(typeof(giveMeRandom(n)))

/* SCRIVI QUI LA TUA RISPOSTA */
