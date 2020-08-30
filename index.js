
var wakeTime;
function calculateSleep() {
    wakeTime = document.getElementById("wakeTime").value;

    console.log(wakeTime);
    var sleepTime = ((1440.0 + ((wakeTime * 60) - 450)) - 15) / 60;

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
function sleepTime() {

}