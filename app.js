//togloomiin buh gazar ashiglagdah global huvisagchdiig end zarlana!!!
//togloomiig duussan tolovt baigaa eseh
var isNewGame;
// Toglogchiin eeljiig hadgalah huvisagch zarlana negdugeer player 0 , hoyrdugaar player 1
var activePlayer;
// toglogchiin eeljiin onoog hadgalah huvisagch zarlana
var scoreRound;
// toglogchiin niit onoog hadgalah huvisagch zarlana
var score;
//shoonii domiig haij olson huvisagch
var diceDom = document.querySelector(".dice");
//togloomiig ehluuley
newGame();

//togloomiig shineer ehlehed iim bna
function newGame() {
  isNewGame = true;
  // Toglogchiin eeljiig hadgalah huvisagch zarlana negdugeer player 0 , hoyrdugaar player 1
  activePlayer = 0;
  // toglogchiin eeljiin onoog hadgalah huvisagch zarlana
  scoreRound = 0;
  // toglogchiin niit onoog hadgalah huvisagch zarlana
  score = [0, 0];

  // togloom ehelhed 0 bna beldii
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  //toglogchdiin neriig butsaan heviin bolgoh
  document.getElementById("name-1").textContent = "Player 2";
  document.getElementById("name-0").textContent = "Player 1";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");

  var diceDom = document.querySelector(".dice");
  diceDom.style.display = "none";
}

// shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame === true) {
    // 1-6 hurtelh random too gargaj avna
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    // gargasan toonii zuragiig gargana
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";
    //buusan too 1 ees yalgaatai baival
    if (diceNumber !== 1) {
      //1ees yalgaatai baival toglogchid nemj og
      scoreRound = scoreRound + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = scoreRound;
    } else {
      //toglogchiin round d tsugluulsan onoog 0 bolgono
      switchToNextPlayer();
    }
  } else {
    alert("ene toglolt duussan bna ta New Game iig darna uu!!");
  }
});
// HOLD tovchnii event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame === true) {
    //toglogchiin tsugluulsan onoog current onoon deer nemne
    score[activePlayer] = score[activePlayer] + scoreRound;
    //toglogch hojson esehiig shalgah
    document.getElementById("score-" + activePlayer).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 100) {
      //togloom duussan gedeg tolovt oruulna
      isNewGame = false;
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      switchToNextPlayer;
    }
  } else {
    alert("ene toglolt duussan bna ta New Game iig darna uu!!");
  }
});

//ene function ni toglogchiin eeljiig solino
function switchToNextPlayer() {
  //eeljiin onoog 0 bolgoh
  scoreRound = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  //1 buusan toglogchiin eeljiig ene hesegt solij ogno.
  // herev idevhitei toglogch ni 0 baival idevhitei toglogch 1 bolgo
  // ugui bol 0 bolgo
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // ulaan tsegiig shiljuuleh code
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // shoog tur alga bolgoh
  diceDom.style.display = "none";
}
//togloomiig shineer ehluuleh function
document.querySelector(".btn-new").addEventListener("click", newGame);
