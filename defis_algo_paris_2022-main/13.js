// -- 13 -- écrire une fonction qui prend un tableau de nombres et renvoie un tableau contenant uniquement les nombres pairs

let arr = [1, 2, 3, 4];
let newArr = [];

function evenNb() {
    arr.forEach((element) => {
        let test = Boolean(arr.find((element) => element !== (/^\d[13579]$/)));
        if (test == true) {
            newArr.push(element);
        }
    });
    return newArr;
}
evenNb();

// /^\d{1}$|^\d{3}$|^\d{5}$|^\d{7}$|^\d{9}$/