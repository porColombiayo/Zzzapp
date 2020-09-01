
var wakeTime;
var minHorasDeSueño;
function hoursOfSleep() {
    var años = document.getElementById("añosUsuario").value;
    minHorasDeSueño;
    if (años >= 18) {
        minHorasDeSueño = 7.5;
    }
    else if (años >= 14 && años < 18) {
        minHorasDeSueño = 8;
    } else if (años >= 6 && años < 14) {
        minHorasDeSueño = 6;
    } else if (años >= 3 && años < 6) {
        minHorasDeSueño = 10;
    }
    else if (años >= 1 && años < 3) {
        minHorasDeSueño = 11;
    }

}
function calculateSleep() {
    console.log(minHorasDeSueño);
    wakeTime = document.getElementById("wakeTime").value;
    var wakeTimeNum = wakeTime.split(/[.:]/);
    var hours = parseInt(wakeTimeNum[0], 10);
    var minutes = wakeTimeNum[1] ? parseInt(wakeTimeNum[1], 10) : 0;
    console.log(wakeTime);
    var timeToGetUp = hours + minutes / 60;
    console.log(timeToGetUp);
    var sleepTime = ((1440.0 + (((hours * 60) + minutes) - (minHorasDeSueño * 60))) - 15) / 60;

    var n = new Date(0, 0);
    n.setMinutes(+sleepTime * 60);
    var result = n.toTimeString().slice(0, 5);
    console.log(result);
    var htmlS = `
    
    <div class="hora-de-acostar">
    <h2>Te deberías acostar a las ${result}</h2>
</div>
    `
    document.querySelector('.salida').innerHTML = htmlS;
}
