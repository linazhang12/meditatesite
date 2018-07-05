var sound = "nothing";
var timer = "nothing";

function set() {
	var timer = parseInt(document.querySelector("#timer").value);
	var sound = document.querySelector("#sound").value;
	document.getElementById("disable").disabled = true; 
	var countdownSec = timer * 60;



	if(sound == "water"){
		soundfire.pause();
		soundbird.pause();
		soundwater.loop = true;
		soundwater.play();
			var x = setInterval(function() {
				var min = Math.floor(countdownSec / 60);
				var sec = countdownSec % 60;			
				var time = min + ":" +sec;
				document.getElementById("logo").innerHTML = time;
				countdownSec --;
					if (countdownSec < 0){
						document.getElementById("logo").innerHTML = "meditate";
						soundwater.pause();
						document.getElementById("disable").disabled = false; 
						clearInterval(x);
					}
			}, 1000);

	} 
	else if (sound == "fire"){
		soundwater.pause();
		soundbird.pause();
		soundfire.loop = true;
		soundfire.play();
			var x = setInterval(function() {
				var min = Math.floor(countdownSec / 60);
				var sec = countdownSec % 60;			
				var time = min + ":" +sec;
				document.getElementById("logo").innerHTML = time;
				countdownSec --;
					if (countdownSec <= 0){
						document.getElementById("logo").innerHTML = "meditate";
						soundfire.pause();
						document.getElementById("disable").disabled = false; 
						clearInterval(x);
					}
			}, 1000);
	} 
	else{
		soundfire.pause();
		soundwater.pause();
		soundbird.loop = true;
		soundbird.play();
			var x = setInterval(function() {
				var min = Math.floor(countdownSec / 60);
				var sec = countdownSec % 60;			
				var time = min + ":" +sec;
				document.getElementById("logo").innerHTML = time;
				countdownSec --;
					if (countdownSec <= 0){
						document.getElementById("logo").innerHTML = "meditate";
						soundbird.pause();
						document.getElementById("disable").disabled = false; 
						clearInterval(x);
					}
			}, 1000);
	}

	return;
}


		



