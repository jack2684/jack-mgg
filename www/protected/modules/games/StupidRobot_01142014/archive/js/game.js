var level=4;
var maxLevel=13;
var letterWidthInEms=0.67;
var speed = 200;
var secs=10;


function roundOver(){
	alert("all done");
}

function setLevel(){
	if(level > maxLevel){
		roundOver();
		return;
	}
	$("#inputArea").animate({width:level * 0.67 + "em"});
	$("#inputArea").attr("maxlength", level);
	$("#gameMessage").html("INPUT A "+level+" LETTER WORD");
}

function flashMessage(message, color){
	console.log("flash");
	var savedMessage=$("#gameMessage").html();
	$("#gameMessage").html(message);
	$("#gameMessage").css("color", color);
	$("#gameMessage").fadeOut(100);
	$("#gameMessage").fadeIn(100);
	$("#gameMessage").fadeOut(100);
	$("#gameMessage").fadeIn(100);
	
	setTimeout(function(){
		$("#gameMessage").fadeOut(100);
		$("#gameMessage").html(savedMessage);
		$("#gameMessage").css("color", "black");
		$("#gameMessage").fadeIn(100);
	},1500);
}

function evalWord(){
	var word=$("#inputArea").val();
	$("#inputArea").val("");
	//evaluate for word too short
	if(word.length < level){
		console.log("too short");
		return;
	}
	//randomly assigns 50% chance of correct. Replace this with evaluation for word match
	else if(Math.round(Math.random()*100) % 2){
		flashMessage("NGR ERROR: TRY AGAIN", "red");
	}
	else{
		level++;
		setLevel();
	//set level BEFORE flash message
		flashMessage("WORD ACCEPTED!", "green");
	}
} 
  
function timerTick(){
	currentMinutes = Math.floor(secs / 60);
    currentSeconds = secs % 60;
    if(currentSeconds <= 9) currentSeconds = "0" + currentSeconds;
   	$("#timer").html(currentMinutes + ":" + currentSeconds);
   	//document.getElementById("timerText").innerHTML = currentMinutes + ":" + currentSeconds; //Set the element id you need the time put into.
    if(secs <= 0 ){
    	roundOver();
    	return;
    }
    
    setTimeout('timerTick()',1000);
    secs--;

}  
  
window.onload = function(){
	//set up animation
	var canvas = document.getElementById("canvas");
	var animation = new lib.robot_gameAnim();

	var stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(24);
	createjs.Ticker.addListener(stage);
	
	
	
	$("#inputArea").val("");

	 $("#inputArea").keypress(function(e){
	 	var keyCode = e.keyCode || e.which;
        
        if(keyCode === 13){
            evalWord();
        }         
	 });
//set original level
   	timerTick();
	setLevel();
};
