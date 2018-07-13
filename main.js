function set() {
	var timer = parseInt(document.querySelector("#timer").value);
	var sound = document.querySelector("#sound").value;
	document.getElementById("disable").disabled = true; 
	var countdownSec = timer * 60;

	var x = setInterval(function() {

		if(sound == "water"){
			soundwater.loop = true;
			soundwater.play();
		} 
		else if (sound == "fire"){
			soundfire.loop = true;
			soundfire.play();
		} 
		else{
			soundbird.loop = true;
			soundbird.play();
		}
			var min = Math.floor(countdownSec / 60);
			var sec = countdownSec % 60;			
			var time = min + ":" + sec;
			document.getElementById("logo").innerHTML = time;
			countdownSec --;
				if (countdownSec < 0){
					document.getElementById("logo").innerHTML = "meditate";
					soundwater.pause();
					soundfire.pause();
					soundbird.pause();
					document.getElementById("disable").disabled = false; 
					clearInterval(x);
				}
	}, 1000);
return;
}