console.log("working");


function time(){

    var hours = document.getElementById("hours"); 
    var minutes = document.getElementById("minutes"); 
    var seconds = document.getElementById("seconds");
    var ampm = document.getElementById("ampm"); 


    var time = new Date(); 

    
    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var am_pm = "AM";



    if (hrs == 0) {
        hrs = 12;   
    }

    if (hrs > 12) {     
        hrs = hrs - 12;
        am_pm = "PM";   
    }                   

    if (hrs < 10){
        hrs = "0" + hrs; 
    }
    if (mins < 10) {
        mins = "0" + mins; 
    }
    if (secs < 10) {
        secs = "0" + secs;
    }

    hours.innerText = hrs;
    minutes.innerText = mins;
    seconds.innerText = secs;
    ampm.innerText = am_pm;

}
var oneseconds = 1000;
setInterval(time, oneseconds);



function setTime() {


    var x = document.getElementById("morning").value
    var y = document.getElementById("afternoon").value
    var z = document.getElementById("evening").value
    var w = document.getElementById("night").value

    var hourr = new Date().getHours();


    if (x == hourr) {

        document.getElementById("bigcontainer").innerText = "GOOD MORNING !! WAKE UP !!"
        document.getElementById("smallcontainer").innerText = "GRAB SOME HEALTHY BREAKFAST!!!"
        document.getElementById("lastimage").src = "Component30.jpg";

    }
    if (y == hourr) {

        document.getElementById("bigcontainer").innerText = "GOOD AFTERNOON !!"
        document.getElementById("smallcontainer").innerText = "LET'S HAVE SOME LUNCH !!"
        document.getElementById("lastimage").src = "lunch_image@2x.jpg";


    }
    if (z == hourr) {

        document.getElementById("bigcontainer").innerText = "GOOD EVENING !!"
        document.getElementById("smallcontainer").innerText = "STOP YAWNING, GET SOME TEA.."
        document.getElementById("lastimage").src = "evening_image@2x.jpg";


    }
    if (w == hourr) {
        document.getElementById("bigcontainer").innerText = "GOOD NIGHT !!"
        document.getElementById("smallcontainer").innerText = "CLOSE YOUR EYES AND GO TO SLEEP"
        document.getElementById("lastimage").src = "night_image@2x.jpg";
    }
}
























