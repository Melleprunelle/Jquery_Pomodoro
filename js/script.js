//---------- Variables ----------

var temps = 25;
var modePause = false;
var secInMin = 60;
var minuteurMin;
var minuteurSec;
var stopper;
var replay;

//---------- Fonction démarrage du minuteur ----------

function lancerMinuteur() {
    if (!minuteurSec) {
        minuteurMin = temps;
        minuteurSec = 0;
        stopper = setInterval(decrementerSec, 1000);
    } else {
        stopper = setInterval(decrementerSec, 1000);
    }

    $("#play").prop("disabled", true);
    $("#pause").prop("disabled", false);
    $("#stop").prop("disabled", false);

}

function interface() {
    document.getElementById("time").innerHTML = minuteurMin + ":" + minuteurSec;
    document.getElementById("time-title").innerHTML = minuteurMin + ":" + minuteurSec;
    if (minuteurMin == 0 && minuteurSec == 0) {
        document.getElementById("time").innerHTML = "5" + ":" + "00";
        document.getElementById("time-title").innerHTML = "5" + ":" + "00";
    }
}

function decrementerSec() {
    if (minuteurSec == 0 && minuteurMin != 0) {
        minuteurSec = 59;
        minuteurMin--;
    } else if (minuteurMin == 0 && minuteurSec == 0) {
        if (modePause) {
            minuteurSec = 59;
            minuteurMin = 4;
            modePause = false;
        } else {
            minuteurSec = 59;
            minuteurMin = 4;
            modePause = true;
        }

    } else {
        minuteurSec--;
    }

    interface();
}

//---------- Fonction mettre sur pause ----------

function stop() {
    if (document.getElementById("play").disabled = true) {
        replay = clearInterval(stopper);
        $("#play").prop("disabled", false);
        $("#pause").prop("disabled", true);
        $("#stop").prop("disabled", false);
    }
}

//---------- Fonction remise à zero ----------

function remiseZero() {
    if (document.getElementById("play").disabled = true) {
        clearInterval(stopper);
        minuteurMin = temps;
        minuteurSec = 0;
        document.getElementById("time").innerHTML = "25" + ":" + "00";
        document.getElementById("time-title").innerHTML = "25" + ":" + "00";
        $("#play").prop("disabled", false);
        $("#pause").prop("disabled", false);
        $("#stop").prop("disabled", true);
    }
}

//---------- Tâche à accomplir ----------

function tache() {
    var consigne = document.getElementById("task").value;
    var objetLi = document.createElement("li");
    objetLi.innerHTML = consigne;
    var objetUl = document.getElementById("done");
    objetUl.insertBefore(objetLi, objetUl.firstChild);
    $("li").addClass("list-group-item");
}

//---------- Thèmes ----------

function changeColor(color) {
 document.body.style.backgroundColor = color;
}