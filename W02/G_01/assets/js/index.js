alert('ciao premi su ok per capire che succedera`');
window.alert('JavaScript scrivera` il file HTML che compone la pagina successiva');
/*ho prima creato la struttura pagina*/
document.write('<h1 id="titolo"></h1>')
document.write('<p id="par1"></p>')
document.write('<p id="par2"></p>')
document.write('<footer id="footer"></footer>')
/**dopo di che ho inserito tramite il metodo get negli appositi spazi */
document.getElementById('titolo').innerHTML = "Iniziamo la nostra pratica";
document.getElementById('par1').innerHTML = 'Output scritto da JavaScript';
document.getElementById('footer').innerHTML = '<hr><a href="/prima.html"><span id="freccie" class="material-symbols-outlined">arrow_back_ios</span>Torna alla pagina </a>';


