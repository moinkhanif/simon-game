var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
function nextSequence(){
    var randomNumber = Math.round(Math.random()*3);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
    var sound = new Audio(`./sounds/${randomChosenColour}.mp3`);
    sound.play();
    $("div.btn").click(function(){
            var userChosenColour = $(this).attr('id');
            userClickedPattern.push(userChosenColour);
            playSound(userChosenColour);
            
        }
    );
};
function playSound(name){
    var usersound = new Audio(`./sounds/${name}.mp3`);
    usersound.play();
};
nextSequence();

