/**
 * Author: Garret Rueckert
 *
 * Bootcamp Homework 4
 * Crystal Guess game
 */

$(document).ready(function() {


  /**
   * Custom type of Crystal that generates a random
   * value as a property from 1 - 12 upon creation.
   */
  function Crystal() {
    this.value = Math.floor(Math.random() * 12) + 1;
  }

  //global wins and losses
  var wins = 0;
  var losses = 0;

  //4 Crystals per game
  var gem1 = new Crystal();
  var gem2 = new Crystal();
  var gem3 = new Crystal();
  var gem4 = new Crystal();

  //Images to set for our crystals
  var imgArray = ["blueGem.PNG", "darkBlueGem.PNG", "greenGem.png", "lavenderGem.PNG", 
  "orangeGem.PNG", "purpleGem.PNG", "redGem.PNG", "sqGreenGem.PNG"];

  var gameOver = false;
  var answerNum = Math.floor(Math.random() * 120) + 19;
  console.log(answerNum);
  var runTotal = 0;

  /**
   * function to change images to random 4 gem images from imgArray
   */
  function setGemImages() {
    var gems = $("#gems").children().children();
    console.log(gems);
    var selected = [];
    var rand = 0;

    for (i = 0; i < gems.length; i++) {
      rand = Math.floor(Math.random() * imgArray.length);

      //If image is not unique in set of 4, redo our random
      while(selected.indexOf(imgArray[rand]) != -1){
        rand = Math.floor(Math.random() * imgArray.length);
      }

      if(selected.indexOf(imgArray[rand]) === -1){
        selected.push(imgArray[rand]);
        console.log("supposed to push images")
        $(gems[i]).attr("src", "assets/images/" + selected[i]);
      }
    
    }
  }


  function resetGame() {
    gem1 = new Crystal();
    gem2 = new Crystal();
    gem3 = new Crystal();
    gem4 = new Crystal();

    gameOver = false;
    answerNum = Math.floor(Math.random() * 120) + 19;
    console.log(answerNum);
    runTotal = 0;

    setGemImages();
    toggleResetBtn();
    pushToTotal();
    pushAnswer();   
  }

  function evalTotals() {
    if (runTotal > answerNum) {
      gameOver = true;
      losses++;
      pushLoss();
      toggleResetBtn();
    } else if (runTotal === answerNum) {
      gameOver = true;
      wins++;
      pushWin();
      toggleResetBtn();
    } else {
    }
  }

  function toggleResetBtn() {
    // console.log("toggle has been called");
    var btn = $("#reset");
    // console.log(btn.css("display"));
    if (btn.css("display") === "none") {
      btn.css("display", "block");
    } else {
      btn.css("display", "none");
    }
  }

  function pushToTotal() {
    $("#runningTotal").text("Total: " + runTotal);
  }

  function pushWin() {
    $("#wins").text("Wins: " + wins);
  }
  function pushLoss() {
    $("#losses").text("Losses: " + losses);
  }

  function pushAnswer(){
      $("#answer").text(answerNum);
  }


  /**
   * Game Controls and setup
   */
  setGemImages();
  pushAnswer();
  $("#gem1").on("click", function() {
    if (!gameOver) {
      runTotal += gem1.value;
      pushToTotal();
      // console.log(runTotal);
      evalTotals();
    }
  });
  $("#gem2").on("click", function() {
    if (!gameOver) {
      runTotal += gem2.value;
      pushToTotal();
      // console.log(runTotal);
      evalTotals();
    }
  });
  $("#gem3").on("click", function() {
    if (!gameOver) {
      runTotal += gem3.value;
      pushToTotal();
      // console.log(runTotal);
      evalTotals();
    }
  });
  $("#gem4").on("click", function() {
    if (!gameOver) {
      runTotal += gem4.value;
      pushToTotal();
      // console.log(runTotal);
      evalTotals();
    }
  });

  $("#reset").on("click", function() {
    resetGame(); 
  });
});
