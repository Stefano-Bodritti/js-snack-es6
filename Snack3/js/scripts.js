// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

// metodo 1
// function cutArray(array, a, b) {
//   return array.slice(a, b + 1);
// }

// metodo 2
// function cutArray(array, a, b) {
//   const newArray = [];
//   for (let i = a; i <= b; i++) {
//     newArray.push(array[i]);
//   }
//   return newArray;
// }


$(function () {

const arrayNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(cutArray(arrayNumbers, 3, 5));

// metodo 3
const cutArray = arrayNumbers.filter((element, index) => {
  return index >= 3 && index <= 5
});

console.log(cutArray);

});
