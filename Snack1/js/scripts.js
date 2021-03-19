// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal


$(function () {

// 1. creo array di oggetti
const bici = [
  {
    nome: "Atala",
    peso: 2500,
  },
  {
    nome: "Giant",
    peso: 2000,
  },
  {
    nome: "Cannondale",
    peso: 1500,
  },
  {
    nome: "Merida",
    peso: 3500,
  }
];

// 2. ciclo l'array
let biciLeggera = bici[0];
for (var i = 0; i < bici.length; i++) {
  // 3. controllo se la bici i-esima è più leggera
  if ( bici[i].peso < biciLeggera.peso ) {
    biciLeggera = bici[i];
  }
}

// 4. stampo il risultato
const { nome, peso } = biciLeggera;
console.log(`La bici più leggera è ${nome} con un peso complessivo in grammi di ${peso}`);

});
