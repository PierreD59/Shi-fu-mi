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
document.getElementById("restartgame").onclick = function() {
  restartgame()
};
document.getElementById("username-click").onclick = function() {
  username()
};

// Enter your name
function username() {
  var test = document.getElementById("name-searchbar").value;
  if (test.length >= 2) {
    document.getElementById("username-bar").style.display = "none";
    document.getElementById("username").innerHTML = test;
  }
}

// Function Attack
function pierre() {
  var ordi = Math.floor(Math.random() * tableau.length);
  if (ordi == 0) {
    document.getElementById("title-info").innerHTML = "Equality";
  } else if (ordi == 1) {
    userlife++;
    document.getElementById("title-info").innerHTML = "Win !";
  } else if (ordi == 2) {
    botlife++;
    document.getElementById("title-info").innerHTML = "Wasted !";
  }
  if (userlife == 1) {
    document.getElementById("progress-bar-bot").style.width = "66%";
    document.getElementById("progress-bar-bot").innerHTML = "2/3 HP";
  } else if (userlife == 2) {
    document.getElementById("progress-bar-bot").style.width = "33%";
    document.getElementById("progress-bar-bot").innerHTML = "1/3 HP";
  } else if (userlife == 3) {
    document.getElementById("progress-bar-bot").style.width = "0%";
    document.getElementById("progress-bar-bot").innerHTML = "COMA";
    document.getElementById("progress-bar-bot").style.width = "100%";
    document.getElementById("progress-bar-bot").style.backgroundColor = "gray";
  }
  if (botlife == 1) {
    document.getElementById("progress-bar-user").style.width = "66%";
    document.getElementById("progress-bar-user").innerHTML = "2/3 HP";
  } else if (botlife == 2) {
    document.getElementById("progress-bar-user").style.width = "33%";
    document.getElementById("progress-bar-user").innerHTML = "1/3 HP";
  } else if (botlife == 3) {
    document.getElementById("progress-bar-user").style.width = "0%";
    document.getElementById("progress-bar-user").innerHTML = "COMA";
    document.getElementById("progress-bar-user").style.width = "100%";
    document.getElementById("progress-bar-user").style.backgroundColor = "gray";
  }
  if (botlife == 3) {
    document.getElementById('finaly').style.display = "block";
    document.getElementById("text-finaly").innerHTML = "You Lose !";
    document.getElementById("character1").style.display = "none";
    document.getElementById("character1-victory").style.display = "block";
  } else if (userlife == 3) {
    document.getElementById('finaly').style.display = "block";
    document.getElementById("text-finaly").innerHTML = "You Win !";
    document.getElementById("character2").style.display = "none";
    document.getElementById("character2-victory").style.display = "block";
  }
}

function papier() {
  var ordi = Math.floor(Math.random() * tableau.length);
  if (ordi == 1) {
    document.getElementById("title-info").innerHTML = "Equality";
  } else if (ordi == 2) {
    userlife++;
    document.getElementById("title-info").innerHTML = "Win !";
  } else if (ordi == 0) {
    botlife++;
    document.getElementById("title-info").innerHTML = "Wasted !";
  }
  if (userlife == 1) {
    document.getElementById("progress-bar-bot").style.width = "66%";
    document.getElementById("progress-bar-bot").innerHTML = "2/3 HP";
  } else if (userlife == 2) {
    document.getElementById("progress-bar-bot").style.width = "33%";
    document.getElementById("progress-bar-bot").innerHTML = "1/3 HP";
  } else if (userlife == 3) {
    document.getElementById("progress-bar-bot").style.width = "0%";
    document.getElementById("progress-bar-bot").innerHTML = "COMA";
    document.getElementById("progress-bar-bot").style.width = "100%";
    document.getElementById("progress-bar-bot").style.backgroundColor = "gray";
  }
  if (botlife == 1) {
    document.getElementById("progress-bar-user").style.width = "66%";
    document.getElementById("progress-bar-user").innerHTML = "2/3 HP";
  } else if (botlife == 2) {
    document.getElementById("progress-bar-user").style.width = "33%";
    document.getElementById("progress-bar-user").innerHTML = "1/3 HP";
  } else if (botlife == 3) {
    document.getElementById("progress-bar-user").style.width = "0%";
    document.getElementById("progress-bar-user").innerHTML = "COMA";
    document.getElementById("progress-bar-user").style.width = "100%";
    document.getElementById("progress-bar-user").style.backgroundColor = "gray";
  }
  if (botlife == 3) {
    document.getElementById('finaly').style.display = "block";
    document.getElementById("text-finaly").innerHTML = "You Lose !";
    document.getElementById("character1").style.display = "none";
    document.getElementById("character1-victory").style.display = "block";
  } else if (userlife == 3) {
    document.getElementById('finaly').style.display = "block";
    document.getElementById("text-finaly").innerHTML = "You Win !";
    document.getElementById("character2").style.display = "none";
    document.getElementById("character2-victory").style.display = "block";
  }
}

function ciseaux() {
  var ordi = Math.floor(Math.random() * tableau.length);
  if (ordi == 2) {
    document.getElementById("title-info").innerHTML = "Equality";
  } else if (ordi == 0) {
    userlife++;
    document.getElementById("title-info").innerHTML = "Win !";
  } else if (ordi == 1) {
    botlife++;
    document.getElementById("title-info").innerHTML = "Wasted !";
  }
  if (userlife == 1) {
    document.getElementById("progress-bar-bot").style.width = "66%";
    document.getElementById("progress-bar-bot").innerHTML = "2/3 HP";
  } else if (userlife == 2) {
    document.getElementById("progress-bar-bot").style.width = "33%";
    document.getElementById("progress-bar-bot").innerHTML = "1/3 HP";
  } else if (userlife == 3) {
    document.getElementById("progress-bar-bot").style.width = "0%";
    document.getElementById("progress-bar-bot").innerHTML = "COMA";
    document.getElementById("progress-bar-bot").style.width = "100%";
    document.getElementById("progress-bar-bot").style.backgroundColor = "gray";
  }
  if (botlife == 1) {
    document.getElementById("progress-bar-user").style.width = "66%";
    document.getElementById("progress-bar-user").innerHTML = "2/3 HP";
  } else if (botlife == 2) {
    document.getElementById("progress-bar-user").style.width = "33%";
    document.getElementById("progress-bar-user").innerHTML = "1/3 HP";
  } else if (botlife == 3) {
    document.getElementById("progress-bar-user").style.width = "0%";
    document.getElementById("progress-bar-user").innerHTML = "COMA";
    document.getElementById("progress-bar-user").style.width = "100%";
    document.getElementById("progress-bar-user").style.backgroundColor = "gray";
  }
  if (botlife == 3) {
    document.getElementById('finaly').style.display = "block";
    document.getElementById("text-finaly").innerHTML = "You lose !";
    document.getElementById("character1").style.display = "none";
    document.getElementById("character1-victory").style.display = "block";
  } else if (userlife == 3) {
    document.getElementById('finaly').style.display = "block";
    document.getElementById("text-finaly").innerHTML = "You Win !";
    document.getElementById("character2").style.display = "none";
    document.getElementById("character2-victory").style.display = "block";
  }
}

function restartgame() {
  document.getElementById("finaly").style.display = "none";
  botlife = 0;
  userlife = 0;
  document.getElementById("progress-bar-bot").style.width = "100%";
  document.getElementById("progress-bar-bot").innerHTML = "3/3 HP";
  document.getElementById("progress-bar-user").style.width = "100%";
  document.getElementById("progress-bar-user").innerHTML = "3/3 HP";
  document.getElementById("progress-bar-bot").style.backgroundColor = "red";
  document.getElementById("progress-bar-user").style.backgroundColor = "red";
  document.getElementById("character1").style.display = "block";
  document.getElementById("character1-victory").style.display = "none";
  document.getElementById("character2").style.display = "block";
  document.getElementById("character2-victory").style.display = "none";
  document.getElementById("title-info").innerHTML = "Fight !";
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
