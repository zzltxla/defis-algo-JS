    // -- 9 -- écrire une fonction pour convertir des minutes en heures et minutes
    // /!\ si les minutes sont inférieures à 60, on affiche uniquement les minutes
    // /!\ si les minutes sont inférieures à 10, on affiche les minutes avec 2 chiffres '03' et non '3'

let usr = prompt("Combien de minutes ?");
let hour = 60;
let calcul = parseInt(usr / hour);

for (let i = 0; i <= 1; i++) {
    if (usr == hour) {
        //IF USR EQUALS 60MINS
    alert('1h00');
    } else if (usr > hour) {    //IF USR ABOVE 60MINS
        if (usr > 120) {
                //IF USR ABOVE 120MINS
            alert(calcul + 'h' + (usr - calcul));
        } else if (usr < 120) {
                //IF USR UNDER 120MINS
            alert('1h' + usr.substring(1));
        }
    } else if (usr < hour) {    //IF USR UNDER 60MINS
        if (usr.length == 1) {
                //IF USR UNDER 10MINS
            alert('0'+ usr);    
        } else {
            alert(usr);
        }
    }
}