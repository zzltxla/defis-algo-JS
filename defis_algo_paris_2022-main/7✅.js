// -- 7 -- calculer le factoriel de 10 (10! = 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1 = 3628800)//
let nombres = 10;
let total = 1;
for(let i = nombres; i!=0 ;i--){
    total*=i;
}
console.log(total);