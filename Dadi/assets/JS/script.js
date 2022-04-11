/*

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

 */

const btnLancia = document.querySelector("#lancia");
const content = document.querySelector(".content");
let countWin = 0, countDefeats = 0;

btnLancia.addEventListener("click", function(){
  const dadoPlayer = Math.ceil(Math.random()*6);
  const dadoPC = Math.ceil(Math.random()*6);
  let verdict;

  if(dadoPlayer > dadoPC){
    countWin++;
    verdict = "Vittoria!"
  }
  else if(dadoPlayer < dadoPC){
    countDefeats++;
    verdict = "Sei stato sconfitto!";
  }
  else{
    verdict = "Pareggio!";
  }

  content.innerHTML = `<aside id="left" class="text-center">
                        <h3>Computer</h3>
                        <h3><span class="badge bg-danger">${dadoPC}</span></h3>
                      </aside>
                      <section id="center" class="text-center">
                        <h1><span class="badge bg-success">${verdict}</span></h1>
                      </section>
                      <aside id="right" class="text-center">
                        <h3>Tu</h3>
                        <h3><span class="badge bg-primary">${dadoPlayer}</span></h3>
                      </aside>`
});