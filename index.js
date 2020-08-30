print("helloworld");
var wakeTime;
function calculateSleep() {
    wakeTime = document.getElementById("wakeTime").value;

    console.log(wakeTime);
    var sleepTime = ((1440.0 + ((wakeTime * 60) - 450)) - 135) / 60;

    console.log(sleepTime);
}
function sleepTime() {
    w
}