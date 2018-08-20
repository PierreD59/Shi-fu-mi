var tableau = ["pierre", "papier", "ciseaux"];
var userlife = 0;
var botlife = 0;

// Attack
document.getElementById("pierre").onclick = function() {
  pierre()
};
document.getElementById("papier").onclick = function() {
  papier()
};
document.getElementById("ciseaux").onclick = function() {
  ciseaux()
};

// Function Attack
function pierre() {
  var ordi = Math.floor(Math.random() * tableau.length);
  if (ordi == 0) {
    console.log("Egalité !");
    document.getElementById("titleo").innerHTML = "Egalité";
  } else if (ordi == 1) {
    console.log("Perdu !");
    userlife++;
    document.getElementById("titleo").innerHTML = "Perdu";
  } else if (ordi == 2) {
    console.log("Gagné !");
    botlife++;
    document.getElementById("titleo").innerHTML = "Gagné";
  }
  if (userlife == 1) {
    document.getElementById("progressbarbot").style.width = "66%";
    document.getElementById("progressbarbot").innerHTML = "2/3 HP";
  } else if (userlife == 2) {
    document.getElementById("progressbarbot").style.width = "33%";
    document.getElementById("progressbarbot").innerHTML = "1/3 HP";
  } else if (userlife == 3) {
    document.getElementById("progressbarbot").style.width = "0%";
    document.getElementById("progressbarbot").innerHTML = "";
  }
  if (botlife == 1) {
    document.getElementById("progressbarjoueur").style.width = "66%";
    document.getElementById("progressbarjoueur").innerHTML = "2/3 HP";
  } else if (botlife == 2) {
    document.getElementById("progressbarjoueur").style.width = "33%";
    document.getElementById("progressbarjoueur").innerHTML = "1/3 HP";
  } else if (botlife == 3) {
    document.getElementById("progressbarjoueur").style.width = "0%";
    document.getElementById("progressbarjoueur").innerHTML = "";
  }
}

function papier() {
  var ordi = Math.floor(Math.random() * tableau.length);
  if (ordi == 1) {
    console.log("Egalité !");
    document.getElementById("titleo").innerHTML = "Egalité";
  } else if (ordi == 2) {
    console.log("Perdu !");
    userlife++;
    document.getElementById("titleo").innerHTML = "Perdu";
  } else if (ordi == 0) {
    console.log("Gagné !");
    botlife++;
    document.getElementById("titleo").innerHTML = "Gagné";
  }
  if (userlife == 1) {
    document.getElementById("progressbarbot").style.width = "66%";
    document.getElementById("progressbarbot").innerHTML = "2/3 HP";
  } else if (userlife == 2) {
    document.getElementById("progressbarbot").style.width = "33%";
    document.getElementById("progressbarbot").innerHTML = "1/3 HP";
  } else if (userlife == 3) {
    document.getElementById("progressbarbot").style.width = "0%";
    document.getElementById("progressbarbot").innerHTML = "";
  }
  if (botlife == 1) {
    document.getElementById("progressbarjoueur").style.width = "66%";
    document.getElementById("progressbarjoueur").innerHTML = "2/3 HP";
  } else if (botlife == 2) {
    document.getElementById("progressbarjoueur").style.width = "33%";
    document.getElementById("progressbarjoueur").innerHTML = "1/3 HP";
  } else if (botlife == 3) {
    document.getElementById("progressbarjoueur").style.width = "0%";
    document.getElementById("progressbarjoueur").innerHTML = "";
  }
}

function ciseaux() {
  var ordi = Math.floor(Math.random() * tableau.length);
  if (ordi == 2) {
    console.log("Egalité !");
    document.getElementById("titleo").innerHTML = "Egalité";
  } else if (ordi == 0) {
    console.log("Perdu !");
    userlife++;
    document.getElementById("titleo").innerHTML = "Perdu";
  } else if (ordi == 1) {
    console.log("Gagné !");
    botlife++;
    document.getElementById("titleo").innerHTML = "Gagné";
  }
  if (userlife == 1) {
    document.getElementById("progressbarbot").style.width = "66%";
    document.getElementById("progressbarbot").innerHTML = "2/3 HP";
  } else if (userlife == 2) {
    document.getElementById("progressbarbot").style.width = "33%";
    document.getElementById("progressbarbot").innerHTML = "1/3 HP";
  } else if (userlife == 3) {
    document.getElementById("progressbarbot").style.width = "0%";
    document.getElementById("progressbarbot").innerHTML = "";
  }
  if (botlife == 1) {
    document.getElementById("progressbarjoueur").style.width = "66%";
    document.getElementById("progressbarjoueur").innerHTML = "2/3 HP";
  } else if (botlife == 2) {
    document.getElementById("progressbarjoueur").style.width = "33%";
    document.getElementById("progressbarjoueur").innerHTML = "1/3 HP";
  } else if (botlife == 3) {
    document.getElementById("progressbarjoueur").style.width = "0%";
    document.getElementById("progressbarjoueur").innerHTML = "";
  }
}

// if (botlife == 3) {
//   alert("Vous avez perdu !");
// }
// else if (userlife == 3) {
//   alert("Vous avez gagné !!");
// }

function restartgame(){
  document.getElementById("end").style.display="none";
  botlife = 0;
  userlife = 0;
  document.getElementById("progressbarbot").style.width="100%";
  document.getElementById("progressbarbot").innerHTML="3 vie";
  document.getElementById("progressbarplayer").style.width="100%";
  document.getElementById("progressbarplayer").innerHTML="3 vie";
}


// while (userlife <= 2 && botlife <= 2) {
//
// var ordi = Math.floor(Math.random() * tableau.length);
// var computerChoice = tableau[ordi];
// // var user = prompt("pierre, papier ou ciseaux ?");
// //
//   if (user !== tableau[0] && user !== tableau[1] && user !== tableau[2] ) {
//   console.log("Entrez une vraie valeur");
//   }
//   else if (ordi == 0 && user == tableau[2] || ordi == 1 && user ==tableau[0] || ordi == 2 && user == tableau[1]) {
//     console.log("Perdu");
//     userlife--;
//     // console.log("Ordinateur a " + botlife + " points");
//   }
//   else if (ordi == 0 && user == tableau[1] || ordi == 1 && user == tableau[2]|| ordi == 2 && user == tableau[0] ) {
//     console.log("Gagné !");
//     botlife--;
//     // console.log("Vous avez " + userlife + " points");
//   }
//   else if (computerChoice == user){
//     console.log("Egalité");
//   }
//
// }
