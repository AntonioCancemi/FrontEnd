/* ESERCIZIO 1
   Scrivi una funzione per cambiare il titolo del documento in qualcos'altro.
  */
var titolo = document.querySelector("h1")

const changeTitle = function (newTitle) {
    newTitle.innerHTML = 'Questo e` il titolo cambiato'
    return "titolo cambiato";
}
//changeTitle(titolo);

/* ESERCIZIO 2
 Scrivi una funzione per cambiare la classe del titolo della pagina in "myHeading".
*/

const addClassToTitle = function () {
    titolo.classList.add("myHeading")
}
//addClassToTitle();

/* ESERCIZIO 3
 Scrivi una funzione per cambiare il contenuto di tutti i p che sono discendenti di un div.
*/
var paragrafi = document.querySelectorAll("div p")
const changePcontent = function () {
    paragrafi.forEach(element => {
        element.innerHTML = "contenuto diverso"

    });
    return
}
//changePcontent();

/* ESERCIZIO 4
 Scrivi una funzione per cambiare la proprietà href di ogni link a https://www.google.com
*/
var link = document.querySelectorAll("a")

const changeUrls = function () {
    link.forEach(element => {
        element.setAttribute('href', 'https://www.google.com')
    })
}
//changeUrls();

/* ESERCIZIO 5
 Scrivi una funzione per aggiungere un nuovo elemento alla seconda lista non-ordinata.
*/

const addToTheSecond = function (content) {
    var secondList = document.getElementById("secondList");
    let newItem = document.createElement("li");
    newItem.innerHTML = content;
    secondList.appendChild(newItem);
};
addToTheSecond("li aggiunto");
/* ESERCIZIO 6
 Scrivi una funzione per aggiungere un secondo paragrafo al primo div.
*/


const addParagraph = function (content) {
    var firstDiv = document.querySelector('div')
    let nuovoP = document.createElement("p");
    nuovoP.textContent = content
    firstDiv.appendChild(nuovoP);
}
//addParagraph("paragrafo aggiunto");
/* ESERCIZIO 7
 Scrivi una funzione per far scomparire la prima lista non-ordinata.
*/

const firstUlDisappear = function () {
    let lista = document.getElementById("firstList")
    lista.style.visibility = "hidden";
    console.log("il primo paragrafo e` sparito")
}
//firstUlDisappear()

/* ESERCIZIO 8
 Scrivi una funzione per rendere verde lo sfondo di ogni lista non-ordinata.
*/

const paintItGreen = function () {
    let lista = document.querySelectorAll("ul");
    lista.forEach((element) => {
        element.style.backgroundColor = "green"
    })
}
//paintItGreen();

/* ESERCIZIO 9
 Rendi il tag h1 capace di cambiare colore del testo ogni volta che l'utente ci clicca sopra.
*/

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}
const makeItClickable = function () {
    titolo.style.cursor="pointer";
    titolo.addEventListener("click",function(){
        let colore=generateRandomColor()
        titolo.style.color=colore;
    })
    
}
makeItClickable();
    
/* ESERCIZIO 10
 Cambia il testo del footer con qualcos'altro quando l'utente ci clicca sopra.
*/

const changeFooterText = function () {
    var footer=document.querySelector(".footer");
    footer.style.cursor="pointer"
    footer.addEventListener("click",function(){
        footer.innerHTML="<p>footer rimosso</p>"
    })
}
changeFooterText();
/* ESERCIZIO 11
 Aggiungi un event listener al campo di testo nella pagina e fai in modo che dopo ogni lettera il suo valore venga mostrato in console.
*/

const inputField = document.getElementById("input-field");
inputField.addEventListener("keyup", function () {
  console.log(inputField.value);
});

/* ESERCIZIO 12
 Crea un messaggio di benvenuto con un alert quando la pagina ha finito di caricarsi.
*/

window.onload = function () {
    alert("La pagina ha completato il caricamento");
  };