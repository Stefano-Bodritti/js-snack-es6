// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// funzione che genera un numero casuale
function numeroRandom(min, max) {
  var numeroCasuale = Math.floor((Math.random() * (max - min + 1)) + min);
  return numeroCasuale;
}

$(function () {

// 1. creo array di oggetti di squadre
const squadre = [
  {
    nome: "Inter",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Roma",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Napoli",
    puntiFatti: 0,
    falliSubiti: 0,
  },
];

// 2. genero numeri random per falli e punti
for (let i = 0; i < squadre.length; i++) {
  squadre[i].puntiFatti = numeroRandom(0, 50);
  squadre[i].falliSubiti = numeroRandom(0, 30);
}

// 3. destrutturo e creo nuovo array con solo nomi e falli subiti
// metodo 1
// const squadre2 = [];
// for (let i = 0; i < squadre.length; i++) {
//   const { nome, falliSubiti } = squadre[i];
//   squadre2.push({nome, falliSubiti});
// }

// metodo 2
const squadre2 = squadre.map((element) => {
  const {nome, falliSubiti} = element;
  return {nome, falliSubiti}
});

console.log(squadre2);
for (let i = 0; i < squadre2.length; i++) {
  console.log(`La squadra ${squadre2[i].nome} ha subito ben ${squadre2[i].falliSubiti} falli in questa stagione.`);
}


});
