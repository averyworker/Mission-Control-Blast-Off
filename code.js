function blastofftimerV1(){
    console.log("blastofftimerV1() started");
    var countdownTimer = 5;
    document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    setTimeout(function(){
        countdownTimer = countdownTimer - 1;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 1000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 1;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 2000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 1;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 3000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 1;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 4000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 1;
        document.getElementById("countdownDisplay").innerHTML = "Blastoff!!";
    }, 5000)
}