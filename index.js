// var countDownDate = new Date("Jan 1, 2019 00:00:00").getTime();

// var x = setInterval(function() {

//     var now = new Date().getTime();

//     var distance = countDownDate;

//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//     document.getElementById("time").innerHTML = days + "d " + hours + "h_" +
//         minutes + "m " + seconds + "s ";
//     if (distance) {
//         clearInterval(x);
//         document.getElementById("time").innerHTML = "EXPIRED";
//     }
// }, 1000);



var icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "images/sun.png";
    } else {
        icon.src = "images/moon.png";

    }
}