var slider = document.querySelector(".offerslider");
var slide = 0;
    var interval = setInterval(function() {
        slide += 60;
        slider.style.left = "-" + slide + "vh";
    }, 4000);
   
var counter = document.querySelector(".counter")
var count = 509400

setInterval(function(){
 count++
 if(count <= 509491){
    counter.innerHTML = count
 }
},30)