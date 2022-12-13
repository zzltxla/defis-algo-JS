// -- 12 -- écrire une fonction pour calculer la moyenne des nombres d'un tableau
let sum = 0;

function sumofArr(arr) {
    let result = arr.reduce((sum, element) => sum += element, 0);
    console.log(result / arr.length);
}
sumofArr();