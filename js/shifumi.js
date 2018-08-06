var tableau = ["pierre","papier","ciseaux"];

var userlife = 0;
var botlife = 0;
while (userlife <= 2 && botlife <= 2) {

var ordi = Math.floor(Math.random() * tableau.length);
var user = prompt("pierre, papier ou ciseaux ?");

  if (ordi == 0 && user == tableau[2] || ordi == 1 && user == tableau[0] || ordi == 2 && user == tableau[1]) {
    console.log("Perdu");
    botlife++;
    console.log("Ordinateur a " + botlife + " points");
  }
  else if (ordi == 0 && user == tableau[1] || ordi == 1 && user == 2 || ordi == 2 && user == tableau[0] ) {
    console.log("Gagné !");
    userlife++;
    console.log("Vous avez " + userlife + " points");
  }
  else if (ordi == 0 && user == tableau[0] || ordi == 1 && user == tableau[1] || ordi == 2 && user == tableau[2]) {
    console.log("Egalité");
  }
  else if (user !== tableau[0] || user !== tableau[1] || user !== tableau[2] ) {
    console.log("Entrez une vraie valeur");
  }
}

if (botlife == 3) {
  console.log("Vous avez perdu");
}
else if (userlife == 3) {
  console.log("Vous avez gagné");
}
