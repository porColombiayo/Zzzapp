var años;
function slider() {
    hoursOfSleep();
    document.querySelector("#myRange").addEventListener("input", (el) => {
        años = document.querySelector(".slider").value;
        document.querySelector("#edad-span").innerHTML = años;
    })
    console.log(años);

}
var minHorasDeSueño;
function hoursOfSleep() {

    if (años >= 18) {
        minHorasDeSueño = 7.5;
    }
    else if (años >= 14 && años < 18) {
        minHorasDeSueño = 8;
    } else if (años >= 6 && años < 14) {
        minHorasDeSueño = 9;
    } else if (años >= 3 && años < 6) {
        minHorasDeSueño = 10;
    }
    else if (años >= 1 && años < 3) {
        minHorasDeSueño = 11;
    }

}

function calculateSleep() {
    console.log(minHorasDeSueño);

    var hours = parseInt(document.getElementById("hora").value);
    if (document.querySelector("#tipoDeHora").value === "pm") {
        hours = hours + 12;
    }
    var minutes = parseInt(document.getElementById("minuto").value);


    var sleepTime = ((1440.0 + (((hours * 60) + (minutes == 00 ? minutes = 0 : minutes)) - (minHorasDeSueño * 60))) - 15) / 60;
    console.log("hours " + hours);
    console.log("minutes " + minutes);
    console.log("sleep time in hours: " + sleepTime);

    var n = new Date(0, 0);
    console.log("Date " + n);
    n.setMinutes(+sleepTime * 60);
    console.log("Date " + n.toTimeString());
    var result = n.toTimeString().slice(0, 5);//Conversion of min to hours
    console.log(result);

    document.querySelector('#respuesta2').innerHTML = `${result}`;


}




/*
var minuto = document.getElementById("minuto");
minuto.addEventListener("keydown", (val) => {
    if (val < 10) {
        return "0" + val;
    }
    else {
        return val;
    }
});


*/
