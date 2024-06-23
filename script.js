var slider = document.querySelector(".slider");
var slide = 0;
var curser = document.querySelector(".curser");
var landing = document.querySelector(".landing");
var square = document.querySelector(".square");
var counter = document.querySelector(".counter");

// landing.addEventListener("mousemove",function(dets){
//         curser.style.left = dets.x + "px"
//          curser.style.top = dets.y + "px"
// })

square.addEventListener("mouseenter", function() {
   if(slide == 0){
    // square.style.backgroundColor = "#20B3BA";
    slider.style.left = "-500px";
    var interval = setInterval(function() {
        slide += 500;
        slider.style.left = "-" + slide + "px";
    }, 3000);
   }else{
    //  square.style.backgroundColor = "#81C341"
   }
});
square.addEventListener("mouseleave", function() {
    clearInterval(interval)
});

var count = 509400

setInterval(function(){
 count++
 if(count <= 509491){
    counter.innerHTML = count
 }
},30)