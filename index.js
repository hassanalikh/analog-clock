
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");
    console.dir(container);
});


setInterval(() => {
    d = new Date()
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hour = 30*htime + mtime/2;
    minut = 6*mtime;
    second = 6*stime;

    document.getElementById("hour").style.transform = `rotate(${hour}deg)`;
    document.getElementById("minut").style.transform = `rotate(${minut}deg)`;
    document.getElementById("second").style.transform = `rotate(${second}deg)`;


    // console.log("Helo");

}, 1000);

