const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

const sum = function () {
  let a=Math.floor(Math.random() * 20 + 10);
  let b=Math.floor(Math.random() * 20 + 10);
  return a + b;
}
console.log("esA")
console.log(sum())

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

const consoleRand = function () {
  let randomB = Math.floor(Math.random() * 20)
  return randomB
}
console.log("esB")
console.log(consoleRand());


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, 
  surname = il tuo cognome, age = la tua età.
*/
var me = {
  name: "Antonio",
  surname: "Cancemi",
  age: 20,
}
console.log("esC")
console.log(me)
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log("esD")
console.log(me)
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["html", "css", "javascript", "python", "da togliere"]
console.log("esE")
console.log(me)
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.unshift("aggiunta")
console.log("esF")
console.log(me.skills)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop()
console.log("esG")
console.log(me.skills)
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = function () {
  let n = Math.floor(Math.random() * 7)

  return n;
}
console.log("es1")
console.log(dice())


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
let a = 10
let b = 20
const whoIsBigger = function (a, b) {
  let bigger = 0;
  if (a > b) {
    bigger = a
  } else if (b > a) {
    bigger = b
  }
  else {
    bigger = "hai trovato lo stesso numeross"
  }
  return bigger + " questo e` il piu grande"
}
console.log("es2")
console.log(whoIsBigger(a, b))
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
let text = "I love coding"
const splitMe = function (string) {
  let arrSplitted = string.split(" ");
  return arrSplitted;
}

console.log("es3")
console.log(splitMe(text))

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
let flag = false
let text1 = "cocco"
//console.log(text1)
const deleteOne = function (flag, string) {
  let newstr = "";

  if (flag == false) {
    arrStr = string.split("")
    arrStr.pop()
  }
  else {
    arrStr = string.split("")
    arrStr.shift()
  }
  arrStr.forEach(element => {
    newstr += element;
  });

  return newstr;
}
console.log("es4")
console.log(deleteOne(flag, text1))

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
let text2 = "I have 4 dogs"
const onlyLetters = function (string) {
  let newstr = "";

  arrstr = string.split("")

  arrstr.forEach(element => {
    if (element === "0" || element == "1" || element == "2" || element == "3" || element == "4" || element == "5" || element == "6" || element == "7" || element == "8" || element == "9") {
      let indice = arrstr.indexOf("elemet");
      arrstr.pop(indice);
    } else { newstr += element; }
  })
  return newstr;
}
console.log("es5")
console.log(onlyLetters(text2))
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
let email = "mi@gmail.com"
const isThisAnEmail = function (email) {
  let arremail = "";
  let chiocc = false;
  let punto = false;
  let validita = "pippino";
  arremail = email.split("");
  arremail.forEach(element => {
    if (element == "@") { chiocc = true }
    else if (element == ".") { punto = true }
    else return;
    if (chiocc == true & punto == true) {
      validita = true
    }
  });
  return validita;
}
console.log("es6")
console.log(isThisAnEmail(email));
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = function () {
  var data = new Date();
  var giornosettimana = data.getDay();
  var nomi_giorni = new Array("Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato")
  var oggi = nomi_giorni[giornosettimana]
  return oggi
}
console.log("es7")
console.log(whatDayIsIt())
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
let n = 3;
const rollTheDices = function (n) {
  let estratto = 0;
  let oggetto = {
    sum: 0,
    values: []
  }
  for (let i = 0; i <= n - 1; i++) {
    estratto = dice()
    oggetto.sum += estratto
    oggetto.values.push(estratto)
  }
  return oggetto;
}
console.log("es8")
console.log(rollTheDices(n))
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
let secondaData = new Date("Feb 13, 2023,12:00:00")
var data = new Date();
const howManyDays = function () {
  let past = data - secondaData
  past = Math.floor(past / 86400000);
  return past + " giorni";
}
console.log("es9")
console.log(howManyDays())
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = function () {
  let compleanno = new Date("Feb 17")
  let festeggio = false;

  if (compleanno.getDate == data.getDate & compleanno.getMonth == data.getMonth) {
    festeggio = true;
  }
  return festeggio;
}
console.log("es10")
console.log(isTodayMyBirthday())
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
var gatto = {
  colore: "nero",
  razza: "persiano"
};
var prop = "razza"

const deleteProp = function (ogg, prop) {
  delete ogg[prop];
  return ogg;
}
console.log("es11")
console.log(deleteProp(gatto, prop))

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = function () {
  let maxDate = 0
  for (i = 0; i < movies.length; i++) {
    if (maxDate < movies[i].Year) {
      maxDate = movies[i].Year
    }
  }
  return maxDate;
}
console.log("es12")
console.log(newestMovie());
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = function () {
  let numeroFilm = movies.length;
  return "totale film:" + numeroFilm;
}
console.log("es13")
console.log(countMovies());

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = function () {
  let onlyYears = [];
  for (i = 0; i < movies.length; i++) {
    onlyYears.push(movies[i].Year)
  }
  return onlyYears;
}
console.log("es14")
console.log(onlyTheYears())

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = function () {
  let soloVecchi = [];
  for (i = 0; i < movies.length; i++) {
    if (movies[i].Year < 2000) {
      soloVecchi.push(movies[i]);
    }
  } return soloVecchi;
}
console.log("es15")
console.log(onlyInLastMillennium())

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = function () {
  let sum = 0;
  for (i = 0; i < movies.length; i++) {
    sum += parseInt(movies[i].Year)
  } return sum;
}
console.log("es16")
console.log(sumAllTheYears())

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = function (titolo) {
  let result = [];
  for (i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLowerCase().includes(titolo)==true) {
      result.push(movies[i]);
    }
  }
  return result;
}
console.log("es17")
console.log(searchByTitle("lord"))

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide=function(titolo){
  let ricerca={
    match:[],
    unmatch:[],
  }
  for (i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLowerCase().includes(titolo)==true) {
      ricerca.match.push(movies[i]);
    }else{
      ricerca.unmatch.push(movies[i])
    }
  }
  return  ricerca;
}
console.log("es18")
 console.log(searchAndDivide("avenger"))
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex=function(n){
  movies.pop(n);
  return movies;
}
console.log("es19")
console.log(removeIndex(2));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const container=document.getElementById("container");

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const tdTag=document.querySelectorAll("td")
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const stampaTd=function(){
  for (let i=0;i<tdTag.length;i++){
  let stampa= tdTag[i].textContent;
  console.log(stampa)
  }
}
console.log("es22")
console.log(stampaTd())
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const link=document.querySelectorAll("a")
const linkChangeColor=function(){
  for (let i=0;i<link.length;i++){
    link[i].style.backgroundColor="red";
    link[i].style.display="block"
  }
  return "colore cambiato";
}
console.log("es23")
console.log(linkChangeColor())
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const addElemet=function(){
  let lista=document.getElementById("myList")
  let nuovoElemento=document.createElement("li")
  nuovoElemento.textContent="nuovo elemetno";
  lista.appendChild(nuovoElemento)
}
console.log("es24 aggiunge")
console.log(addElemet())
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const myList=document.getElementById("myList")
const takeli=document.querySelectorAll("#myList li")

const svuotare=function(){
  takeli.forEach(element => {
    myList.removeChild(element);
  });
}
//console.log(svuotatore())

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const allTr=document.querySelectorAll("tr");
const addClassTr=function(){
  allTr.forEach(element => {
    element.classList.add("test")
    
  });
}
console.log("es26 add class")
console.log(addClassTr())
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
const halfTree=function(m){
  let line="";
  for (let i=0;i<m;i++){
    line+="*";
    console.log(line)
  }
}
console.log("es27 extra")
console.log(halfTree(4))

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

const tree=function(n){
  let s=(n-1);
  let a="*";
  let line="";
  for (let i=1;i<n+1;i++){
    
    for (let k=0;k<s;k++)
    {line+=" "};
    line+=a
    a+="**"
    console.log(line)
    line=""
    s--;
}
}
console.log("es28 extra")
console.log(tree(9))
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
const isItPrime=function(n){
  let numeri=[2,3,4,5,6,7,8,9];
  let prime=true;
  numeri.forEach(element=>{
    if (n%element==0 & element!=n){
      prime=false
    }
  })
  return prime;
}
console.log("es29")
console.log(isItPrime(23))

/* Questo array viene usato per gli esercizi. Non modificarlo. */
