/**compiti
 * Concatenare
 * concatenare in unica variabile
 * var e let per le liste di 3 nomi
 * stampa valore inziale
 * addizione
 *incremente
 sottrazione
 decremento
 moltiplicazione
 divisione 
 concatenazione stringa
 */

//variabili
const pgreco = 3.14;
var cliente = 'cliente';
var concatena = null;
var mario = 'Mario';
var carla = 'Carla';
var numero = 15;

//compilazione concatenazione
{
    let nome = 'Aldo';
    var concatena = nome + ', ' + cliente + ', ' + pgreco;
    document.getElementById('concatena').innerHTML = nome + ', ' + cliente + ', ' + pgreco;
    var concatena = nome + ', ' + cliente + ', ' + pgreco;//variabile composta
};

document.getElementById('concatena2').innerHTML = concatena;

//keyword
{
    let nome = mario;
    document.getElementById('var').innerHTML = nome;
    document.getElementById('final').innerHTML = nome;
    document.getElementById('let2').innerHTML = nome;
    nome = carla;
    document.getElementById('let3').innerHTML = nome;
    document.getElementById('final2').innerHTML = nome;
    document.getElementById('let').innerHTML = nome;
}

//operazioni

document.getElementById('iniziale').innerHTML += numero;
{
    let addizione = numero + numero;
    let sottrazione = numero - 10;
    document.getElementById('valore1').innerHTML += (addizione) + ', ' + (++addizione);
    document.getElementById('valore2').innerHTML += (sottrazione) + ', ' + (--sottrazione);
}
document.getElementById('valore3').innerHTML += (numero) * 3;
document.getElementById('valore4').innerHTML += (numero) / 3;
document.getElementById('valore5').innerHTML += (numero) + ' e` un numero';





