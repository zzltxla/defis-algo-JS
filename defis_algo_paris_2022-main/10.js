// -- 10 -- écrire une fonction pour calculer la somme des chiffres d'un nombre
// /!\ on ne peut pas utiliser de chaîne de caractères
// /!\ on ne peut pas utiliser de tableau
// /!\ le nombre doit être un entier positif
// /!\ le nombre peut avoir plusieurs chiffres (exemples : 1234 666 123456789)

let usr = prompt("Please type in a number :");

if (usr != isNaN(usr) && usr != parseFloat(usr) && (usr.includes('-')) == false) {
    
} else {
    alert('Error');
}