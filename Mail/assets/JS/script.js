/*

Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere (creare quindi una lista di utenti autorizzati),
stampa un messaggio appropriato sull’esito del controllo.

 */

const classe61 = ["domenico.agostino@gmail.com",
  "mihai.badia@icloud.com",
  "riccardo.becattini@yahoo.com",
  "manuel.benini@gmail.com",
  "bruno.f.bernardini@gmail.com",
  "guido.buono@icloud.com",
  "pierluigi.cancellaro@libero.com",
  "francesco.cataletto@gmail.com",
  "stefano.cravotta@gmail.com",
  "giovanni.crispino@icloud.com",
  "giancarlo.croce@gmail.com",
  "enrico.de.stefano@yahoo.com",
  "silvia.dugato@gmail.com",
  "carlo.duminuco.del.monte@gmail.com",
  "francesco.ercoli@libero.com",
  "luca.gaddini@gmail.com",
  "marco.gagliano@icloud.com",
  "cristina.gasperini@gmail.com",
  "gabriele.giusti@yahoo.com",
  "chiara.grillo@gmail.com",
  "manuela.ienuso@gmail.com",
  "michele.iliescu@libero.com",
  "ketevan.jorjoliani@gmail.com",
  "renato.lami@gmail.com",
  "davide.manciucca@icloud.com",
  "emanuele.mastronardi@gmail.com",
  "luca.mazzarini@yahoo.com",
  "daniele.monteleone@gmail.com",
  "salvatore.olivieri@gmail.com",
  "leonardo.pellegrini@gmail.com",
  "agostino.piquè@gmail.com",
  "davide.pizzolla@icloud.com",
  "antonio.pollo@libero.com",
  "ivan.russo@gmail.com",
  "amanjit.singh@icloud.com",
  "sebastiano.visco@gmail.com"
];

const btnAccedi = document.querySelector("#accedi");
const content = document.querySelector(".content");

btnAccedi.addEventListener("click", function(){
  let found = false;
  const email = document.getElementById("textEmail").value;
  for(let i=0; i<classe61.length; i++){
    if(email === classe61[i]){
      found = true;
    }
  }
  if(found){
    content.innerHTML = `<div class="d-flex align-items-center flex-column">
                          <div class="badge rounded-pill bg-success mb-3">Accesso riuscito!</div>
                          <a class="btn btn-primary btn-lg" href="" role="button">Clicca qui per giocare!</a>
                        </div>`;
  }
  else{
    content.innerHTML = `<div class="badge rounded-pill bg-warning text-dark">Non fai parte della classe #61!</div>`;
  }
});