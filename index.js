//memberikan limit waktu
var limit = new Date("Oct 11, 2020 08:00:00").getTime();

var addIn = setInterval(function () {
    //hari dan waktu sekarang
    var timeNow = new Date().getTime;
    //cari selisih
    var dist = limit - timeNow;

    //hitung waktu
    var days = Math.floor(dist / (1000 * 60 * 60 * 24));
    var hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((dist % (1000 * 60)) / 1000);

    //taruh di elemen timer.html
    document.getElementById("myTimer").innerHTML = days + "d " + hours + "h "
     + minutes + "m " + seconds + "s ";
    // If the count down is over, write some text 
    if (dist < 0) {
     clearInterval(addIn);
     document.getElementById("myTimer").innerHTML = "EXPIRED";
    }

  },1000);