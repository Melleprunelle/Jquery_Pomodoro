    //---------- Variables ----------

    var temps = 25;
    var modePause = false;
    var secInMin = 60;
    var minuteurMin;
    var minuteurSec;
    var stopper;
    var replay;
    var alarm = new Audio("mp3/gong.mp3");
    var nbPause = 0;

    //---------- Fonction démarrage du minuteur ----------

    $("#play").click(function lancerMinuteur() {
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

    });

    function interface() {
        $("#time").html(minuteurMin + ":" + minuteurSec);
        $("#time-title").html(minuteurMin + ":" + minuteurSec);
        if (minuteurMin == 0 && minuteurSec == 0) {
            $("#time").html("5" + ":" + "00");
            $("#time-title").html("5" + ":" + "00");
        }
    }

    function decrementerSec() {
        if (minuteurSec == 0 && minuteurMin != 0) {
            minuteurSec = 59;
            minuteurMin--;
        } else if (minuteurMin == 24 && minuteurSec == 50) {  
            alarm.play();
            nbPause++;
            if (modePause) {
                minuteurSec = 59;
                minuteurMin = 4;
                modePause = false;
            }
            else if(nbPause == 4) {
                minuteurSec = 59;
                minuteurMin = 19;
                modePause = false;
            }
            else {
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
        if ($("#play").prop("disabled") == true) {
            replay = clearInterval(stopper);
            $("#play").prop("disabled", false);
            $("#pause").prop("disabled", true);
            $("#stop").prop("disabled", false);
        }
    }

    //---------- Fonction remise à zero ----------

    function remiseZero() {
        if ($("#play").prop("disabled") == false) {
            clearInterval(stopper);
            minuteurMin = temps;
            minuteurSec = 0;
            $("#time").html("25" + ":" + "00");
            $("#time-title").html("25" + ":" + "00");
            $("#play").prop("disabled", false);
            $("#pause").prop("disabled", false);
            $("#stop").prop("disabled", true);
        }
    }

    //---------- Tâche à accomplir ----------

    $('.btn-success').click(function () {
        $('#done').prepend("<li class='list-group-item'><s>" + $('#task').val() + "</s></li>");
        $('#task').val("");
    });

    //---------- Thèmes ----------

    $('.theme').click(function changeBodyColor() {
        var color = $(this).attr('data-color');
        $("body").css({
            "background-color": color,
            "transition-duration": "1s"
        });
    });

    $('.theme-degrade').click(function changeBodyColorDegrade() {
        var degrade = $(this).attr('data-degrade');
        console.log('ertyuio');
        $("body").attr("class","");
        $("body").addClass(degrade);
    });