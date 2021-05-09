var buttonColors=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPatteren=[];
var i = 0;
var abc;

setTimeout(function () {
  nextSequence()
}, 500);

function nextSequence(){

  userClickedPatteren=[];

  var randomNumber = Math.random();
  randomNumber=randomNumber*4;
  randomNumber=Math.floor(randomNumber);

  i++;
  $("h1").html("Level - "+i);
  abc=i;

  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  return abc;
}

$(".btn").click(function(){
	var userChosenColor = $(this).attr("id");
  userClickedPatteren.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPatteren.length-1);
});

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userClickedPatteren[currentLevel]){
    console.log("success");
    if(gamePattern.length===userClickedPatteren.length){
      setTimeout(function () {
      nextSequence()
    }, 1000);
    }
  }
  else{
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
      location.replace("index2.html");
    }, 1000);


  }
}

function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
  },100);
}
