let nb = 9;

function ligne(char1, char2){
    let ligne = "";
    let diez = char1;
    let space = char2;

    for (let i = 1;  i < nb; i++) {
        if( i % 2 == 0) {
            ligne += diez;
        } else {
            ligne += space;
        }
        
    }
    console.log(ligne)
}
for (let j = 1; j < nb; j++){
    if( j % 2 == 0) {
        ligne( " ", "#");
    } else {
        ligne( "#", " ");
    }
}