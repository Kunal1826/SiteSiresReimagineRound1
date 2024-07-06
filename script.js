gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".mr"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".mr" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".mr", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".mr").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


const scroll = new LocomotiveScroll({
  el: document.querySelector('.mr'),
  smooth: true
});



const tl=gsap.timeline()

tl.from(".nav", {
  x: -200,
  y: -200,
  opacity: 0,
  backgroundColor: "black",
  duration: 0.5,
 
  
});
tl.from(".leftnav img",{
  
  opacity:0,
  scale:0.1,
  duration:0.2,
  
  
})

tl.from(".sign svg,.rightnav a",{
 
  y:50,
  opacity:0,
  stagger:0.1,
  duration:0.4,
  color:"black",

})


tl.from(".imagecorner",{
  x:-900,
  opacity:0,
  duration:0.2,
  scale:0,
  // scrollTrigger: {
  //   trigger: '.imagecorner',
  //   scroller: "body",
  //   start:"top 20%",
  //   end:"top 30%",
  //   scrub:2




  //   // start: "top 5%",
   
   
  
  // }
})


var body=document.querySelector("body")
var crs=document.querySelector(".cursor")
body.addEventListener("mousemove",function(dets){
  crs.style.left=dets.x+"px"
  crs.style.top=dets.y+"px"

})

tl.from(".menu-list li,input,label name",{
  opacity:0,
  scale:0.1,
 
  x:-500,
  stagger:0.1,
  duration:0.5,
  fontWeight:"900",

})
tl.from(".inputGroup ,.btn-txt",{
  duration:0.4,
  opacity:0,
  stagger:0.3,
})


tl.from(".midcenter .button",{
  y:-100,
  opacity:1,
  
  duration:0.1,
})

tl.from(".midcenter h1",{
  opacity:0,
  scale:1,
 

  y:-100,

 
  duration:0.2,
  fontWeight:"900",
  color:"red",
})
tl.from(".midcenter p",{
  opacity:0,
  scale:1,
 

  y:100,

 
  duration:0.1,

})




tl.from(".imageslider",{
  x:-40,
  opacity:0,
})
tl.from(".halfcircle",{
  y:-10,
  duration:0.9,
  opacity:0,
 
  backgroundColor:"skyblue",
  // // scrollTrigger:{
  // //   markers:true,
  // //   trigger:".halfcircle",
  // //   scroller:"body",
  // //   start:"top 1%",
  
  // //   scrub:true,
  // // }
  
  
})

tl.from(".line,.tx h1",{
  duration:1,
  height:"20px",
  rotate:90,
})

//page3

tl.from(".p1 img",{
  x:-100,
  y:-100,
  duration:1,
  scrollTrigger:{
    trigger:".p1",
    scroller:".mr",
    start:"top 4%",
    end:"top 210%",
    
    scrub:3,
   

  }
})

tl.from(".p1",{
  opacity:0,
  duration:0.3,
  

  scrollTrigger:{
    trigger:".p1",
    scroller:".mr",
    start:"top 10%",
    end:"top 120%",
    
    scrub:3,
   

  }
})
tl.from(".p1 .heading h1,.p1 .heading p",{
  opacity:0,
  duration:3,
  x:600,
  stagger:1 ,
 
  

  scrollTrigger:{
    trigger:".heading",
    scroller:".mr",
    start:"top 28%",
    end:"top 190%",
    
    scrub:3,
   

  }
})


tl.from(".p1 .slides",{
  y:-300,
  
  
  opacity:0,
  scale:0.2,
  duration:0.3,
  scrollTrigger:{
    trigger:".p1 .slides",
    scroller:".mr",
    start:"top 32%",
    end:"top 200%",
    
    scrub:3,
    
   

  }




})


//page2

tl.from(".p2 #p2i1",{
  // x:-100,
  y:-200,
  duration:1,
  scrollTrigger:{
    trigger:".p2",
    scroller:".mr",
    start:"top 4%",
    end:"top 210%",
    
    scrub:3,
   

  }
})

tl.from(".p2 #p2i2",{
  // x:-100,
  y:-300,
  duration:1,
  scrollTrigger:{
    trigger:".p2",
    scroller:".mr",
    start:"top 4%",
    end:"top 210%",
    
    scrub:3,
   

  }
})

tl.from(".p2",{
  opacity:0,
  duration:3,
  

  scrollTrigger:{
    trigger:".p2",
    scroller:".mr",
    start:"top 20%",
    end:"top 120%",
    
    scrub:3,
   

  }
})
tl.from(".heading2 h1,.heading2 p",{
  opacity:0,
  duration:3,
  x:600,
  stagger:1 ,
 
  

  scrollTrigger:{
    trigger:".heading2",
    scroller:".mr",
    start:"top 28%",
    end:"top 190%",
    
    scrub:3,
   

  }
})


tl.from(".p2 .container11",{
  y:-300,
  stagger:0.6,
  
  opacity:0,
  scale:0.2,
  scrollTrigger:{
    trigger:".p2",
    scroller:".mr",
    start:"top 32%",
    end:"top 200%",
    
    scrub:3,
   

  }




})


//page 3


tl.from(".p3 #p3i1",{
  x:-100,
  y:-100,
  duration:1,
  scrollTrigger:{
    trigger:".p3",
    scroller:".mr",
    start:"top 4%",
    end:"top 210%",
    
    scrub:3,
   

  }
})
tl.from(".p3 #p3i2",{
  x:100,
   y:-100,
  duration:1,
  scrollTrigger:{
    trigger:".p3",
    scroller:".mr",
    start:"top 4%",
    end:"top 210%",
    
    scrub:3,
   

  }
})


tl.from(".p3",{
  opacity:0,
  duration:3,
  

  scrollTrigger:{
    trigger:".p3",
    scroller:".mr",
    start:"top 34%",
    end:"top 210%",
    
    scrub:3,
   

  }
})
tl.from(".p3 .heading h1,.p3 .heading p",{
  opacity:0,
  duration:3,
  x:-600,
  stagger:1 ,
 
  

  scrollTrigger:{
    trigger:".p3 .heading",
    scroller:".mr",
    start:"top 38%",
    end:"top 290%",
    
    scrub:3,
   

  }
})


tl.from(".p3 .container5",{
  y:-300,
  stagger:0.6,
  
  opacity:0,
  scale:0.2,
  scrollTrigger:{
    trigger:".p3",
    scroller:".mr",
    start:"top 40%",
    end:"top 200%",
    
    scrub:3,
   

  }




})


//page 4



tl.from(".p4 img",{
  x:-100,
  y:-100,
  duration:1,
  scrollTrigger:{
    trigger:".p4",
    scroller:".mr",
    start:"top 8%",
    end:"top 260%",
    
    scrub:3,
   

  }
})

tl.from(".p4",{
  opacity:0,
  duration:3,
  

  scrollTrigger:{
    trigger:".p4",
    scroller:".mr",
    start:"top 42%",
    end:"top 210%",
    
    scrub:3,
   

  }
})
tl.from(".p4 .heading h1,.p4 .heading p",{
  opacity:0,
  duration:3,
  x:600,
  stagger:1 ,
 
  

  scrollTrigger:{
    trigger:".p4 .heading",
    scroller:".mr",
    start:"top 44%",
    end:"top 230%",
    
    scrub:3,
   

  }
})


tl.from(".p4 .container8",{
  y:-300,
  stagger:0.6,
  
  opacity:0,
  scale:0.2,
  scrollTrigger:{
    trigger:".p4",
    scroller:".mr",
    start:"top 46%",
    end:"top 250%",
    
    scrub:3,
   

  }




})



//page 5

tl.from(".p5 #p5i1",{
  x:-100,
  // y:-100,
  duration:1,
  scrollTrigger:{
    trigger:".p5",
    scroller:".mr",
    start:"top 18%",
    end:"top 260%",
    
    scrub:3,
   

  }
})
tl.from(".p5 #p5i2",{
  x:100,
  // y:-100,
  duration:1,
  scrollTrigger:{
    trigger:".p5",
    scroller:".mr",
    start:"top 18%",
    end:"top 260%",
    
    scrub:3,
   

  }
})


tl.from(".p5",{
  opacity:0,
  duration:3,
  

  scrollTrigger:{
    trigger:".p5",
    scroller:".mr",
    start:"top 48%",
    end:"top 260%",
    
    scrub:3,
   

  }
})
tl.from(".p5 .heading h1,.p5 .heading p",{
  opacity:0,
  duration:3,
  x:-600,
  stagger:1 ,
 
  

  scrollTrigger:{
    trigger:".p5 .heading",
    scroller:".mr",
    start:"top 50%",
    end:"top 290%",
    
    scrub:3,
   

  }
})


tl.from(".p5 .container6",{
  y:-300,
  stagger:0.6,
  
  opacity:0,
  scale:0.2,
  scrollTrigger:{
    trigger:".p5",
    scroller:".mr",
    start:"top 45%",
    end:"top 290%",
    
    scrub:3,
   

  }




})


//page6

tl.from(".p6 #p6i1",{
  x:100,
  y:180,
  duration:1,
  scrollTrigger:{
    trigger:".p6",
    scroller:".mr",
    start:"top 14%",
    end:"top 300%",
    
    scrub:3,
   

  }
})
tl.from(".p6 #p6i2",{
  x:-100,
  y:150,
  duration:1,
  scrollTrigger:{
    trigger:".p6",
    scroller:".mr",
    start:"top 14%",
    end:"top 300%",
    
    scrub:3,
   

  }
})

tl.from(".p6",{
  opacity:0,
  duration:3,
  

  scrollTrigger:{
    trigger:".p6",
    scroller:".mr",
    start:"top 54%",
    end:"top 300%",
    
    scrub:3,
   

  }
})
tl.from(".p6 .heading h1,.p6 .heading p",{
  opacity:0,
  duration:3,
  x:600,
  stagger:1 ,
 
  

  scrollTrigger:{
    trigger:".p6 .heading",
    scroller:".mr",
    start:"top 56%",
    end:"top 320%",
    
    scrub:3,
   

  }
})


tl.from(".p6 .container2",{
  y:-300,
  stagger:0.6,
  
  opacity:0,
  scale:0.2,
  scrollTrigger:{
    trigger:".p6",
    scroller:".mr",
    start:"top 46%",
    end:"top 340%",
    
    scrub:3,
   

  }




})


//page 7



tl.from(".p7 img",{
  x:-100,
  y:-100,
  duration:1,
  scrollTrigger:{
    trigger:".p7",
    scroller:".mr",
    start:"top 60%",
    end:"top 350%",
    
    scrub:3,
   

  }
})

tl.from(".p7",{
  opacity:0,
  duration:3,
  

  scrollTrigger:{
    trigger:".p7",
    scroller:".mr",
    start:"top 60%",
    end:"top 350%",
    
    scrub:3,
   

  }
})
tl.from(".p7 .heading h1,.p7 .heading p",{
  opacity:0,
  duration:3,
  x:600,
  stagger:1 ,
 
  

  scrollTrigger:{
    trigger:".p7 .heading",
    scroller:".mr",
    start:"top 62%",
    end:"top 370%",
    
    scrub:3,
   

  }
})


tl.from(".p7 .container3",{
  y:-300,
  stagger:0.6,
  
  opacity:0,
  scale:0.2,
  scrollTrigger:{
    trigger:".p7",
    scroller:".mr",
    start:"top 30%",
    end:"top 390%",
    
    scrub:3,
   

  }




})


//page 8

tl.from(".p8 #p8i1",{
  x:-100,
  // y:-100,
  duration:1,
  scrollTrigger:{
    trigger:".p8",
    scroller:".mr",
    start:"top 0%",
    end:"top 350%",
    
    scrub:3,
   

  }
})
tl.from(".p8 #p8i2",{
  x:100,
  // y:100,
  duration:1,
  scrollTrigger:{
    trigger:".p8",
    scroller:".mr",
    start:"top 0%",
    end:"top 350%",
    
    scrub:3,
   

  }
})


tl.from(".p8",{
  opacity:0,
  duration:3,
  

  scrollTrigger:{
    trigger:".p8",
    scroller:".mr",
    start:"top 60%",
    end:"top 350%",
    
    scrub:3,
   

  }
})
tl.from(".p8 .heading h1,.p8 .heading p",{
  opacity:0,
  duration:3,
  x:-600,
  stagger:1 ,
 
  

  scrollTrigger:{
    trigger:".p8 .heading",
    scroller:".mr",
    start:"top 62%",
    end:"top 370%",
    
    scrub:3,
   

  }
})


tl.from(".p8 .container7",{
  y:-300,
  stagger:0.6,
  
  opacity:0,
  scale:0.2,
  scrollTrigger:{
    trigger:".p8",
    scroller:".mr",
    start:"top 30%",
    end:"top 390%",
    
    scrub:3,
   

  }




})



//page 9


tl.from(".p9 #p9i1",{
  x:-100,
  // y:-100,
  duration:1,
  scrollTrigger:{
    trigger:".p9",
    scroller:".mr",
    start:"top 60%",
    end:"top 350%",
    
    scrub:3,
   

  }
})

tl.from(".p9 #p9i2",{
  x:150,
  // y:-100,
  duration:1,
  scrollTrigger:{
    trigger:".p9",
    scroller:".mr",
    start:"top 60%",
    end:"top 350%",
    
    scrub:3,
   

  }
})

tl.from(".p9",{
  opacity:0,
  duration:3,
  

  scrollTrigger:{
    trigger:".p9",
    scroller:".mr",
    start:"top 60%",
    end:"top 350%",
    
    scrub:3,
   

  }
})
tl.from(".p9 .heading h1,.p9 .heading p",{
  opacity:0,
  duration:3,
  x:-600,
  stagger:1 ,
 
  

  scrollTrigger:{
    trigger:".p9 .heading",
    scroller:".mr",
    start:"top 62%",
    end:"top 370%",
    
    scrub:3,
   

  }
})


tl.from(".p9 .container10",{
  y:-300,
  stagger:0.6,
  
  opacity:0,
  scale:0.2,
  scrollTrigger:{
    trigger:".p9",
    scroller:".mr",
    start:"top 46%",
    end:"top 390%",
    
    scrub:3,
   

  }




})

//page 10



tl.from(".p10 #p10i1",{
  x:100,
  y:100,
  duration:1,
  scrollTrigger:{
    trigger:".p10",
    scroller:".mr",
    start:"top 0%",
    end:"top 390%",
    
    scrub:3,
   

  }
})
tl.from(".p10 #p10i2",{
  x:-100,
  y:-100,
  duration:1,
  scrollTrigger:{
    trigger:".p10",
    scroller:".mr",
    start:"top 0%",
    end:"top 390%",
    
    scrub:3,
   

  }
})


tl.from(".p10",{
  opacity:0,
  duration:3,
  

  scrollTrigger:{
    trigger:".p10",
    scroller:".mr",
    start:"top 70%",
    end:"top 390%",
    
    scrub:3,
   

  }
})
tl.from(".p10 .heading h1,.p10 .heading p",{
  opacity:0,
  duration:3,
  x:600,
  stagger:1 ,
 
  

  scrollTrigger:{
    trigger:".p10 .heading",
    scroller:".mr",
    start:"top 72%",
    end:"top 400%",
    
    scrub:3,
   

  }
})


tl.from(".p10 .container9",{
  y:-300,
  stagger:0.6,
  
  opacity:0,
  scale:0.2,
  scrollTrigger:{
    trigger:".p10",
    scroller:".mr",
    start:"top 46%",
    end:"top 410%",
    
    scrub:3,
   

  }




})


//page 11

tl.from(".p11 #p11i1",{
  x:-100,
  // y:-100,
  duration:1,
  opacity:0,
  scrollTrigger:{
    trigger:".p11",
    scroller:".mr",
    start:"top 0%",
    end:"top 350%",
    
    scrub:3,
   

  }
  
})
tl.from(".p11 #p11i2",{
  x:100,
  // y:-100,
  duration:1,
  opacity:0,
  scrollTrigger:{
    trigger:".p11",
    scroller:".mr",
    start:"top 0%",
    end:"top 350%",
    
    scrub:3,
   

  }
  
})

tl.from(".p11",{
  opacity:0,
  duration:3,
  

  scrollTrigger:{
    trigger:".p11",
    scroller:".mr",
    start:"top 60%",
    end:"top 350%",
    
    scrub:3,
   

  }
})
tl.from(".p11 .heading h1,.p11 .heading p",{
  opacity:0,
  duration:3,
  x:-600,
  stagger:1 ,
 
  

  scrollTrigger:{
    trigger:".p11 .heading",
    scroller:".mr",
    start:"top 62%",
    end:"top 370%",
    
    scrub:3,
   

  }
})


tl.from(".p11 .container4,.p11 .b11",{
  y:-300,
  stagger:0.6,
  
  opacity:0,
  scale:0.2,
  scrollTrigger:{
    trigger:".p11",
    scroller:".mr",
    
    start:"top 0%",
    end:"top 360%",
    
    scrub:3,
   

  }




})
tl.from(".p11 .container4",{
  y:-300,
  stagger:0.6,
  
  opacity:0,
  scale:0.2,
  scrollTrigger:{
    trigger:".p10",
    scroller:".mr",
    start:"top 46%",
    end:"top 410%",
    
    scrub:3,
   

  }




})




tl.from(".reviews  h1",{
  x:-300,
  duration:1,


})

tl.from(".logo img",{
  x:-1000,
  y:-500,
  rotate:360,
  opacity:0,
  stagger:0.7,
  duartion:3,
  scrollTrigger:{
    scroller:".mr",
    trigger:".logo img",
    start:"top 20%",
    end:"top 130%",
    scrub:2
  }
})



tl.from(".m11",{
  x:-100,
  y:-50,
 
  opacity:0,
 
  scrollTrigger:{
    scroller:".mr",
    trigger:".m11",
    start:"top 10%",
    end:"top 120%",
   
    scrub:2
  }
})






var slider = document.querySelector(".offerslider");
var slide = 0;
    var interval = setInterval(function() {
       if(slide < 200){ slide += 28;
        slider.style.left = "-" + slide + "vw";}
    }, 4000);
   
var countering = document.querySelector(".countering")
var counting = 509400

setInterval(function(){
 counting++
 if(counting <= 509491){
    countering.innerHTML = counting
 }
},90)




const mamaearthskincare = [
    {
        name: "Vitamin C Daily Glow Face Cream- 80 g",
        price: "₹219",
        ratings: 4.9,
        reviews: 133,
        imageUrl:"./image2/vit-c 1.png",
    },
    {
        name: "Rice Oil-Free Face Moisturizer With Rice Water for Glass Skin - 80 g",
        price: "₹280",
        ratings: 3.7,
        reviews: 238,
        imageUrl:"./image2/rice-oil-free 2.png",
    },
    {
       name:"Multani Mitti Moisturizing Lotion Soap (Value Pack of 4) - 125 g X 4",
       price:"₹328",
       ratings:"4.7",
       reviews:"254",
       imageUrl:"./image2/front-with-ingredients-3.png",
    },
    {
      name:"Beetroot Hydraful Moisturizer With Beetroot & Hyaluronic Acid - 50 ml",
      price:"₹300",
      ratings:"4.6",
      reviews:"376",
      imageUrl:"./image2/1-with-ingredients_4-removebg-preview.png",
   },
   {
    name:"Rice Facial Kit With Rice Water & Niacinamide for Glass Skin - 60 g",
    price:"₹347",
    ratings:"4.8",
    reviews:"297",
    imageUrl:"./image2/rice facitl kit-5.png",
    },
    {
     name:"Bye Bye Blemishes Face Cream for Reducing Pigmentation and Blemishes with Mulberry Extract and Vitamin C -30ml",
     price:"₹414",
     ratings:"5.0",
     reviews:"178",
     imageUrl:"./image2/face cream -6.png",
   },
   {
     name:"Vitmin C daily glow face serum 10ml",
     price:"₹198",
     ratings:"4.9",
     reviews:"139",
     imageUrl:"./image2/vit-c-serum-7.png",
   },
   {
     name:"vitmin C foming face wash with vitmin C and turmeric for skin illumination 150ml",
     price:"₹343",
     ratings:"5.0",
     reviews:"154",
     imageUrl:"./image2/face-wash-8.png",
   },
   {
     name:"Aloe vera gel for skin and hair 300ml",
     price:"₹280",
     ratings:"4.4",
     reviews:"123",
     imageUrl:"./image2/aloe_vera_gel-9.png",
   },
   {
     name:"Beetroot hydraful essesnce serum-15ml",
     price:"₹299",
     ratings:"3.7",
     reviews:"478",
     imageUrl:"./image2/beetroot-essence-10.png",
   },
   {
     name:"Beetroot hydraful essence serum-50ml",
     price:"₹389",
     ratings:"4.0",
     reviews:"275",
     imageUrl:"./image2/beetroot-essence-11.png",
   },
    
];


var container8=document.querySelector(".page2 .container8")
var card8=document.querySelector(".card8")
var imgbx=document.querySelector(".imgbx")
var img=document.querySelector("img")
var contentbx=document.querySelector(".contentBx")
var rating=document.querySelector(".rating")
var review=document.querySelector(".review")
var btn=document.querySelector("button")

var card8=""

mamaearthskincare.forEach(function(value){
  card8+=`
   <div class="card8 capitalize">
            <div class="imgBx">
              <img src="${value.imageUrl}">
            </div>
            <div class="contentBx">
              <h2>${value.name}</h2>
              <div class="rating">
                <h3>Rating :</h3>
                <span>${value.ratings}</span>
                <i class="ri-star-s-fill color-white"></i>
              </div>
              <div class="review">
                <h3>Review :${value.reviews}</h3>
              </div>
                 <div class="flex justify-center">
                 <button
            class="relative flex  gap-6 mt-2 py-[4px] px-4  font-medium text-base nded-full overflow-hidden bg-[white] rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-[#67564f] hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#c4efff] before:to-[#c4efff] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
          >
            ADD TO CART  <h1>Price:${value.price}</h1> 
          </button>
            </div>
          </div>
        </div> `
})

console.log(card8)
container8.innerHTML=card8











const mamaearthbabycare = [
    {
        name: "Milky soft shampoo with oats,milk and calendula",
        details:"balance scalp ph",
        price: "₹404",
        ratings: 4.9,
        reviews: 633,
        imageUrl:"./image2/baby care-1.png",
        bgcolor:"##CBE59E",
        circlecolor:"#f7bb42"
    },
    {
        name: "milky soft body lotion for babies with oats,milk and calendula for babies",
        details:"Deeply nourishes skin",
        price: "₹404",
        ratings: 4.7,
        reviews: 638,
        imageUrl:"./image2/baby care-2.png",
        bgcolor:"#c4a591",
        circlecolor:"#8e6b54"
    },
    {
       name:"moisturizing bathing Bar soap for babies (pack of 4*75g)",
       details:"Retains moisture",
       price:"₹449",
       ratings:"4.7",
       reviews:"254",
       imageUrl:"./image2/baby care-3.png",
    },
    {
      name:"mamaearth baby rich moisturizing ultra light sunscreen",
      details:"water resistant",
      price:"₹359",
      ratings:"4.6",
      reviews:"376",
      imageUrl:"./image2/baby care-4.png",
   },
   {
    name:"milky soft face cream with murumuru butter for babies-60ml",
    price:"₹179",
    ratings:"4.8",
    reviews:"297",
    imageUrl:"./image2/baby care-5.png",
    },
    {
      name: "Milky soft shampoo with oats,milk and calendula",
      details:"balance scalp ph",
      price: "₹404",
      ratings: 4.9,
      reviews: 633,
      imageUrl:"./image2/baby care-1.png",
      bgcolor:"##CBE59E",
      circlecolor:"#f7bb42"
  },
  {
      name: "milky soft body lotion for babies with oats,milk and calendula for babies",
      details:"Deeply nourishes skin",
      price: "₹404",
      ratings: 4.7,
      reviews: 638,
      imageUrl:"./image2/baby care-2.png",
      bgcolor:"#c4a591",
      circlecolor:"#8e6b54"
  },
  {
     name:"moisturizing bathing Bar soap for babies (pack of 4*75g)",
     details:"Retains moisture",
     price:"₹449",
     ratings:"4.7",
     reviews:"254",
     imageUrl:"./image2/baby care-3.png",
  },
  {
    name:"mamaearth baby rich moisturizing ultra light sunscreen",
    details:"water resistant",
    price:"₹359",
    ratings:"4.6",
    reviews:"376",
    imageUrl:"./image2/baby care-4.png",
  },
  {
  name:"milky soft face cream with murumuru butter for babies-60ml",
  price:"₹179",
  ratings:"4.8",
  reviews:"297",
  imageUrl:"./image2/baby care-5.png",
  },
  
  ];
  
  
  var container9=document.querySelector(".page2 .container9")
  var card9=document.querySelector(".card9")
  var imgbx=document.querySelector(".imgbx")
  var img=document.querySelector("img")
  var contentbx=document.querySelector(".contentBx")
  var rating=document.querySelector(".rating")
  var review=document.querySelector(".review")
  var btn=document.querySelector("button")
  
  var card9=""
  
  mamaearthbabycare.forEach(function(value){
  card9+=`
   <div class="card9 capitalize">
            <div class="imgBx">
              <img src="${value.imageUrl}">
            </div>
            <div class="contentBx">
              <h2>${value.name}</h2>
              <div class="rating">
                <h3>Rating :</h3>
                <span>${value.ratings}</span>
                <i class="ri-star-s-fill color-white"></i>
              </div>
              <div class="review">
                <h3>Review :${value.reviews}</h3>
              </div>
              <div class="flex justify-center">
                 <button
            class="relative flex  gap-6 mt-2 py-[4px] px-4  font-medium text-base nded-full overflow-hidden bg-[white] rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-[#67564f] hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#c4efff] before:to-[#c4efff] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
          >
            ADD TO CART  <h1>${value.price}</h1> 
          </button>
             </div>
            </div>
          </div>
        </div> `
  })
  
  console.log(card9)
  container9.innerHTML=card9











  const mamaearthubtanrange = [
    {
        name: "ubtan Range scrub with turmeric and walnut for tan removel-100g",
        price: "₹307",
        ratings: 4.9,
        reviews: 133,
        imageUrl:"./image2/ubtan1.png",
        bgcolor:"##CBE59E",
        circlecolor:"#f7bb42"
    },
    {
        name: "ubtan facial kit with turmeric & saffron for glowing skin-60g",
        price: "₹343",
        ratings: 3.7,
        reviews: 238,
        imageUrl:"./image2/ubtan-2.png",
        bgcolor:"#c4a591",
        circlecolor:"#8e6b54"
    },
    {
       name:"ubtan detan sunscreen with turmeric & saffron for sun tan",
       price:"₹351",
       ratings:"4.7",
       reviews:"254",
       imageUrl:"./image2/ubtan-3.png",
    },
    {
      name:"Ubtan body wash with turmeric and saffron for glowing skin-300ml",
      price:"₹296",
      ratings:"4.6",
      reviews:"376",
      imageUrl:"./image2/ubtan-4.png",
   },
   {
    name:"Ubtan oil-free face moisturizer for skin brightening-80ml",
    price:"₹274",
    ratings:"4.8",
    reviews:"297",
    imageUrl:"./image2/ubtan-5.png",
    },
    {
     name:"Ubtan face scrub with turmeric and walnut for tan removal-100g",
     price:"₹307",
     ratings:"5.0",
     reviews:"178",
     imageUrl:"./image2/ubtan-6.png",
   },
   {
     name:"Ubtan body lotion with turmeric and kokum butter for skin glow-300ml",
     price:"₹380",
     ratings:"4.9",
     reviews:"139",
     imageUrl:"./image2/ubtan-7.png",
   },
   {
     name:"ubtan moisturizing lotion soap(value pack of 4)-125g*9",
     price:"₹328",
     ratings:"5.0",
     reviews:"154",
     imageUrl:"./image2/ubtan-8.png",
   },
   {
     name:"ubtan tan free glow trio",
     price:"₹819",
     ratings:"4.4",
     reviews:"123",
     imageUrl:"./image2/ubtan-9.png",
   },
   {
     name:"Ubtan face wash for tan removal(packof 2)-100ml*2 ",
     price:"₹378",
     ratings:"3.7",
     reviews:"478",
     imageUrl:"./image2/ubtan-10.png",
   },
   {
     name:"ubtan day cream with turmeric & saffron for skin brightening-50g",
     price:"₹527",
     ratings:"4.0",
     reviews:"275",
     imageUrl:"./image2/ubtan-11.png",
   },
   {
     name:"Ubtan night cream with turmeric & saffron for skin brightening-50g",
     price:"515",
     ratings:"5.0",
     reviews:"234",
     imageUrl:"./image2/ubtan-12.png",
   },
   
];


var container10=document.querySelector(".page2 .container10")
var card=document.querySelector(".card")
var imgbx=document.querySelector(".imgbx")
var img=document.querySelector("img")
var contentbx=document.querySelector(".contentBx")
var rating=document.querySelector(".rating")
var review=document.querySelector(".review")
var btn=document.querySelector("button")

var card10=""

mamaearthubtanrange.forEach(function(value){
  card10+=`
   <div class="card10 capitalize">
            <div class="imgBx">
              <img src="${value.imageUrl}">
            </div>
            <div class="contentBx">
              <h2>${value.name}</h2>
              <div class="rating">
                <h3>Rating :</h3>
                <span>${value.ratings}</span>
                <i class="ri-star-s-fill color-white"></i>
              </div>
              <div class="review">
                <h3>Review :${value.reviews}</h3>
              </div>
              <div class="flex justify-center">
              <button
            class="flex gap-6 relative mt-2 py-[4px] px-4  font-medium text-base nded-full overflow-hidden bg-[white] rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-[#67564f] hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#c4efff] before:to-[#c4efff] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
          >
            ADD TO CART <h1>${value.price}
          </button>
          </div>
            </div>
          </div>
        </div> `
})

console.log(card10)
container10.innerHTML=card10







  
  
const mamaearthligtheningsale = [
  {
      name: "Onion shampoo",
      price: "₹507",
      ratings: 5.0,
      reviews: 233,
      imageUrl:"./image2/s 1.png",
      bgcolor:"##CBE59E",
      circlecolor:"#f7bb42"
  },
  {
      name: "Rosemary Hair care kit-650 ml",
      price: "₹782",
      ratings: 5.0,
      reviews: 108,
      imageUrl:"./image2/s2.png",
      bgcolor:"#c4a591",
      circlecolor:"#8e6b54"
  },
  {
     name:"Anti-Hair fall spa",
     price:"₹782",
     ratings:"4.8",
     reviews:"563",
     imageUrl:"./image2/s 3.png",
    
  },
  {
    name:"Ubtan face wash-150ml(pack of 2)",
    price:"₹563",
    ratings:"4.8",
    reviews:"878",
    imageUrl:"./image2/s4.png",
 },
 {
  name:"Vit C Daily glow sunscreen with vitamin C & Turmeric for Sun protection & Glow-50g (pack of 2)",

  price:"₹525",
  ratings:"4.9",
  reviews:"299",
  imageUrl:"./image2/s 5.png",
  },
  {
   name:"Ultra light indian sunscreen with carrot Seed,Turmeric and SPF 50 PA+++ -80ml (pack of 2)",
   price:"₹748",
   ratings:"4.8",
   reviews:"192",
   imageUrl:"./image2/s 6.png",
 },
 {
   name:"Aloe gentle face wash with Aloe & Glycerin for normal to Sensitive skin-150ml (pack of 2)",

   price:"₹575",
   ratings:"4.9",
   reviews:"376",
   imageUrl:"./image2/s 7.png",
 },
 {
   name:"Hibiscus Hair Revival kit",
   price:"₹756",
   imageUrl:"./image2/s 9.png",
   reviews:"195",
  ratings:"4.1"
 },
 {
   name:"Rosemarry Anti-Hair fall shampoo with Rosemarry & Methi Dana for Reducing Hair loss & breakage-60ml",
   price:"₹503",
   imageUrl:"./image2/s 10.png",
 },
 {
   name:"Aloe vera gel with pure alowvera &vitamin E for skin and Hair-300ml",
   price:"₹479",
   ratings:"5.0",
   reviews:"75",
   imageUrl:"./image2/s 11.png",
 },
 ];


var container11=document.querySelector(".page2 .container11")
var card=document.querySelector(".card")
var imgbx=document.querySelector(".imgbx")
var img=document.querySelector("img")
var contentbx=document.querySelector(".contentBx")
var rating=document.querySelector(".rating")
var review=document.querySelector(".review")
var btn=document.querySelector("button")

var card11 =""

mamaearthligtheningsale.forEach(function(value){
card11 +=`
 <div class="card11 ">
          <div class="imgBx">
            <img src="${value.imageUrl}">
          </div>
          <div class="contentBx">
            <h2>${value.name}</h2>
            <div class="rating">
              <h3>Rating :</h3>
              <span>${value.ratings}</span>
              <i class="ri-star-s-fill color-white"></i>
            </div>
            <div class="review">
              <h3>Review :${value.reviews}</h3>
            </div>
            <div class="flex justify-center">
            <button
          class="flex gap-6 relative mt-2 py-[4px] px-4  font-medium text-base nded-full overflow-hidden bg-[white] rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-[#67564f] hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#c4efff] before:to-[#c4efff] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
        >
          ADD TO CART <h1>${value.price}
        </button>
        </div>
          </div>
        </div>
      </div> `
})

console.log(card11 )
container11.innerHTML=card11 


// container8.addEventListener("wheel",function(evt){
//   evt.preventDefault();
//   container8.scrollLeft +=evt.deltaY
// })

// container9.addEventListener("wheel",function(evt){
//   evt.preventDefault();
//   container9.scrollLeft +=evt.deltaY
// })
// container10.addEventListener("wheel",function(evt){
//   evt.preventDefault();
//   container10.scrollLeft +=evt.deltaY
// })
// container11.addEventListener("wheel",function(evt){
//   evt.preventDefault();
//   container11.scrollLeft +=evt.deltaY
// })



const mamaearthBestSellers = [
    {
        name: "Ubtan Face Wash with Turmeric & Saffron for Tan Removal-150ml",
        price: "₹337",
        ratings: 4.9,
        reviews: 354,
        imageUrl: "./products image/best sellers/ubtan-face-wash_1_1_2__1_-removebg-preview.png",
        bgcolor:"##CBE59E",
        circlecolor:"#f7bb42"
    },
    {
        name: "Rice Face Wash With Rice Water & Niacinamide for Glass Skin - 100 ml",
        details:"Gently Cleanses Skin | Hydrates Skin",
        price: "₹236",
        ratings: 4.7,
        reviews: 238,
        imageUrl: "./products image/best sellers/rice-face-wash.png",
        bgcolor:"#c4a591",
        circlecolor:"#8e6b54"
    },
    {
       name:"Vitamin C Face Wash with Vitamin C and Turmeric for Skin Illumination - 100ml",
       price:"₹227",
       ratings:"4.8",
       reviews:"734",
       imageUrl:"./products image/best sellers/vit-c-face-wash.png",
    },
    {
      name:"Multani Mitti Face Wash with Multani Mitti & Bulgarian Rose  - 100 ml",
      price:"₹227",
      ratings:"5.0",
      reviews:"178",
      imageUrl:"./products image/best sellers/multani_mitti_face_wash.png",
   },
   {
    name:"Vitamin C Face Wash with Vitamin C and Turmeric for Skin Illumination - 250ml",
    price:"₹404",
    ratings:"4.8",
    reviews:"299",
    imageUrl:"./products image/best sellers/vit-c-face-wash-1.png",
    },
    {
     name:"Onion Hair Oil with Onion Oil & Redensyl for Hair Fall Control - 250 ml",
     price:"₹515",
     ratings:"5.0",
     reviews:"112",
     imageUrl:"./products image/best sellers/_onion-oil-250ml__1_1_1-removebg-preview.png",
   },
   {
     name:"Rosemary Hair Growth Oil with Rosemary & Methi Dana  - 150 ml",
     price:"₹368",
     ratings:"4.9",
     reviews:"139",
     imageUrl:"./products image/best sellers/3_1-removebg-preview.png",
   },
   {
     name:"Vitamin C Daily Glow Face Serum With  Turmeric for Radiant Skin - 30 ml",
     price:"₹351",
     ratings:"5.0",
     reviews:"54",
     imageUrl:"./products image/best sellers/vitamin-c-glow-serum_1-removebg-preview.png",
   },
   {
     name:"Vitamin C Daily Glow Face Cream With Turmeric for Skin Illumination - 80 g",
     price:"₹219",
     ratings:"4.7",
     reviews:"123",
     imageUrl:"./products image/best sellers/vit-c-glow-cream1-removebg-preview.png",
   },
   {
     name:"Bye Bye Blemishes Face Cream for Reducing Pigmentation and Blemishes -30ml",
     price:"₹414",
     ratings:"4.7",
     reviews:"678",
     imageUrl:"./products image/best sellers/bye_bye_blemishes_1_1-removebg-preview.png",
   },
   {
     name:"Rosemary Anti-Hair Fall Shampoo with Rosemary & MethiDana for hairfall reduction-250 ml",
     price:"₹300",
     ratings:"5.0",
     reviews:"75",
     imageUrl:"./products image/best sellers/3_11-removebg-preview.png",
   },
   {
     name:"Lemon Anti-Dandruff Shampoo for 100% Dandruff & Itch-free Scalp-250 ml",
     price:"₹307",
     ratings:"4.8",
     reviews:"67",
     imageUrl:"./products image/best sellers/lemon-anti-dandruff-shampoo_1_1_2-removebg-preview.png",
   },
   {
     name:"HydraGel Indian Sunscreen with Aloe Vera and Raspberry for Sun Protection - 50 g",
     price:"₹351",
     ratings:"4.7",
     reviews:"193",
     imageUrl:"./products image/best sellers/hydragel_indian_sunscreen_1-removebg-preview.png",
   },
];


var container1= document.querySelector(".container1")

var card=""

mamaearthBestSellers.forEach(function(value){
  card+=`
   <div class="card">
            <div class="imgBx">
              <img src="${value.imageUrl}">
            </div>
            <div class="contentBx">
              <h2>${value.name}</h2>
              <div class="rating">
                <h3>Rating :</h3>
                <span>${value.ratings}</span>
                <i class="ri-star-s-fill color-white"></i>
              </div>
              <div class="review">
                <h3>Review :${value.reviews}</h3>
              </div>
              <div class="flex justify-center">
                <button class="flex gap-6 relative mt-2 py-[4px] px-4  font-medium text-base rounded-full overflow-hidden bg-[white] rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-[#67564f] hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#c4efff] before:to-[#c4efff] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                 ADD TO CART  <h1>${value.price}</h1>
                </button>
              </div>
            </div>
          </div>
        </div> `
})

container1.innerHTML=card

















const mamaearthNewLaunches= [
  {
      name: "Ubtan Detan Sunscreen With Turmeric & Saffron For Sun Protection - 50 g",
      price: "₹351",
      ratings: "5.0",
      reviews:"223" ,
      imageUrl: "./products image/new launches/1-copy_1-removebg-preview.png",
  },
  {
      name: "Mamaearth Baby Rich Moisturizing Ultra Light Sunscreen - 50g",
      price: "₹359",
      ratings: "5.0",
      reviews:"1" ,
      imageUrl: "./products image/new launches/1_26-removebg-preview.png",
  },
  {
      name: "Mamaearth Rice Water Dewy Sunscreen with SPF 50 & PA++++ - 50g",
      price: "₹395",
      ratings: "5.0",
      reviews:"4" ,
      imageUrl: "./products image/new launches/with-ingredients_3-removebg-preview.png",
  },
  {
      name: "Rice Water Dewy Active Serum With Rice Water & 10% Niacinamide For Glass Skin - 50 m",
      price: "₹439",
      ratings: "5.0",
      reviews:"4" ,
      imageUrl: "./products image/new launches/with-ingredients_4-removebg-preview.png",
  },
  {
      name: "Natural Mosquito Repellent Gel - 100 ml",
      price: "₹179",
      ratings: "5.0",
      reviews:"3" ,
      imageUrl: "./products image/new launches/with-ingredient_4_1-removebg-preview.png",
  },
  {
      name: "Beetroot Hydraful Sunscreen With Beetroot & Hyaluronic Acid - 50 g",
      price: "₹351",
      ratings: "5.0",
      reviews:"3" ,
      imageUrl: "./products image/new launches/1-with-ingredients_10-removebg-preview.png",
  },
  {
      name: "Ubtan Detan Sunscreen With Turmeric & Saffron For Sun Protection - 50 g",
      price: "₹351",
      imageUrl: "./products image/new launches/1-copy_1-removebg-preview (1).png",
  },
]

var container2=document.querySelector(".container2")

var card2=""

mamaearthNewLaunches.forEach(function(value){
  card2+=`
   <div class="card2">
            <div class="imgBx">
              <img src="${value.imageUrl}">
            </div>
            <div class="contentBx">
              <h2>${value.name}</h2>
              <div class="rating">
                <h3>Rating :</h3>
                <span>${value.ratings}</span>
                <i class="ri-star-s-fill color-white"></i>
              </div>
              <div class="review">
                <h3>Review :${value.reviews}</h3>
              </div>
              <div class="flex justify-center">
                <button class="flex gap-6 relative mt-2 py-[4px] px-4  font-medium text-base rounded-full overflow-hidden bg-[white] rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-[#67564f] hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#c4efff] before:to-[#c4efff] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                 ADD TO CART  <h1>${value.price}</h1>
                </button>
              </div>
            </div>
          </div>
        </div> `
})


container2.innerHTML=card2











const mamaearthMakeUp= [
  {
      name: "Creamy Matte Long Stay Lipstick with Murumuru Butter and Vitamin E | Rose Nude",
      price: "₹351",
      ratings: "5.0",
      reviews:"55" ,
      imageUrl: "./products image/makeup/rose_nude_swatch_copy-removebg-preview.png",
  },
  {
      name: "Glow Full Coverage Compact With SPF 30 - 9g | Crème Glow",
      price: "₹527",
      ratings: "5.0",
      reviews:"22" ,
      imageUrl: "./products image/makeup/creame_glow_white_bg-removebg-preview.png",
  },
  {
      name: "Charcoal Black Long Stay Kajal with Vitamin C & Chamomile for 11-Hour Smudge-free Stay",
      price: "₹263",
      ratings: "4.8",
      reviews:"220" ,
      imageUrl: "./products image/makeup/1_1_-removebg-preview.png",
  },
  {
      name: "Creamy Matte Long Stay Lipstick with Murumuru Butter and Vitamin E | Cranberry Crush",
      price: "₹351",
      ratings: "5.0",
      reviews:"4" ,
      imageUrl: "./products image/makeup/cranberry_crush_swatch_copy-removebg-preview.png",
  },
  {
      name: "Beetroot Tinted 100% Natural Lip Balm with Beetroot and Beeswax for Soft Lips",
      price: "₹260",
      ratings: "5.0",
      reviews:"38" ,
      imageUrl: "./products image/makeup/beetroot-lipbalm_white_bg-removebg-preview.png",
  },
  {
      name: "Glow Serum Foundation - 30ml | Ivory glow",
      price: "₹515",
      ratings: "4.8",
      reviews:"145" ,
      imageUrl: "./products image/makeup/1_ivory_glow_white_bg-removebg-preview.png",
  },
  {
      name: "Glow Serum BB Cream with Vitamin C & Turmeric - 25 g",
      price: "₹289",
      ratings: "4.9",
      reviews:"56" ,
      imageUrl: "./products image/makeup/1_2__1_white_bg-removebg-preview.png",
  },
]


var container3=document.querySelector(".container3")

var card3=""

mamaearthMakeUp.forEach(function(value){
  card3+=`
   <div class="card3">
            <div class="imgBx">
              <img src="${value.imageUrl}">
            </div>
            <div class="contentBx">
              <h2>${value.name}</h2>
              <div class="rating">
                <h3>Rating :</h3>
                <span>${value.ratings}</span>
                <i class="ri-star-s-fill color-white"></i>
              </div>
              <div class="review">
                <h3>Review :${value.reviews}</h3>
              </div>
              <div class="flex justify-center">
                <button class="flex gap-6 relative mt-2 py-[4px] px-4  font-medium text-base rounded-full overflow-hidden bg-[white] rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-[#67564f] hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#c4efff] before:to-[#c4efff] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                 ADD TO CART  <h1>${value.price}</h1>
                </button>
              </div>
            </div>
          </div>
        </div> `
})


container3.innerHTML=card3














const mamaearthOnionRange= [
  {
      name: "Onion Shampoo for Hair Fall Control and Hair Growth with Onion & Plant Keratin - 650 ml",
      price:" ₹507",
      ratings:"5.0",
      reviews:"79" ,
      imageUrl: "./products image/onionrange/white_bg-removebg-preview (1).png",
  },
  {
      name: "Anti-Hair Fall Spa Kit",
      price:"₹782",
      ratings:"4.8",
      reviews:"563" ,
      imageUrl: "./products image/onionrange/1_white_bg_31-removebg-preview.png",
  },
  {
      name: "Onion Shampoo with Onion & Plant Keratin for Hair Fall Control - 400ml",
      price:"₹429",
      ratings:"4.8",
      reviews:"306" ,
      imageUrl: "./products image/onionrange/with-ingredient-removebg-preview.png",
  },
  {
      name: "Onion Hair Serum with Onion and Biotin for Strong, Frizz-Free Hair - 100 ml",
      price:"₹263.",
      ratings:"4.8",
      reviews:"189" ,
      imageUrl: "./products image/onionrange/onion-hair-serum1200x1200_ad8hgvjdve7vcczs-removebg-preview.png",
  },
  {
      name: "Essential Anti-Hair Fall Kit",
      price:"₹1,201",
      ratings:"4.9",
      reviews:"185" ,
      imageUrl: "./products image/onionrange/1_white_bg_32-removebg-preview.png",
  },
  {
      name: "Onion Hair Styling Cream for Men with Onion & Redensyl for Styling-100gm",
      price:"₹263",
      ratings:"4.4",
      reviews:"91" ,
      imageUrl: "./products image/onionrange/onion-hair-styling-cream-removebg-preview.png",
  },
  {
      name: "Onion Hair Mask, For Hair Fall Control, With Onion Oil and Organic Bamboo Vinegar",
      price:"₹527",
      ratings:"4.8",
      reviews:"203" ,
      imageUrl: "./products image/onionrange/onion_hair_mask_1-removebg-preview.png",
  },
  {
      name: "Onion Scalp Serum with Onion and Niacinamide for Healthy Hair Growth - 50ml",
      price:"₹527",
      ratings:"4.8",
      reviews:"116" ,
      imageUrl: "./products image/onionrange/onion-scalp-serum-1-removebg-preview.png",
  },
]

  var container4=document.querySelector(".container4")

var card4=""

mamaearthOnionRange.forEach(function(value){
  card4+=`
   <div class="card4">
            <div class="imgBx">
              <img src="${value.imageUrl}">
            </div>
            <div class="contentBx">
              <h2>${value.name}</h2>
              <div class="rating">
                <h3>Rating :</h3>
                <span>${value.ratings}</span>
                <i class="ri-star-s-fill color-white"></i>
              </div>
              <div class="review">
                <h3>Review :${value.reviews}</h3>
              </div>
              <div class="flex justify-center">
                <button class="flex gap-6 relative mt-2 py-[4px] px-4  font-medium text-base rounded-full overflow-hidden bg-[white] rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-[#67564f] hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#c4efff] before:to-[#c4efff] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                 ADD TO CART  <h1>${value.price}</h1>
                </button>
              </div>
            </div>
          </div>
        </div> `
})


container4.innerHTML=card4






// container.addEventListener("wheel",function(evt){
//   evt.preventDefault();
//   container.scrollLeft +=evt.deltaY
// })

// container2.addEventListener("wheel",function(evt){
//   evt.preventDefault();
//   container2.scrollLeft +=evt.deltaY
// })
// container3.addEventListener("wheel",function(evt){
//   evt.preventDefault();
//   container3.scrollLeft +=evt.deltaY
// })
// container4.addEventListener("wheel",function(evt){
//   evt.preventDefault();
//   container4.scrollLeft +=evt.deltaY
// })



const mamaearthsummerfavorites = [
    {
        name: "Vitamin C Daily Glow Sunscreen for Sun Protection & Glow - 50 g",
        price: "₹307",
        ratings: 5.0,
        reviews: 154,
        imageUrl:"./image3/vit-c-glow-sunscreen1-removebg-preview.png",
        bgcolor:"##CBE59E",
        circlecolor:"#f7bb42"
    },
    {
        name: "Ubtan Face Wash with Turmeric & Saffron for Tan Removal – 100ml",
        details:"Gently Cleanses Skin | Hydrates Skin",
        price: "₹227",
        ratings: 4.8,
        reviews: 1620,
        imageUrl:"./image3/1-wid-ingredients-removebg-preview.png",
        bgcolor:"#c4a591",
        circlecolor:"#8e6b54"
    },
    {
       name:"Ubtan Face Mask with Saffron and Turmeric Tan Removal - 100g",
       price:"₹439",
       ratings:"4.8",
       reviews:"440",
       imageUrl:"./image3/ubtan_face_mask_1-removebg-preview.png",
    },
    {
      name:"Vitamin C Face Wash with Vitamin C and Turmeric for Skin Illumination - 100ml",
      price:"₹227",
      ratings:"4.8",
      reviews:"734",
      imageUrl:"./image3/vit-c-face-wash-with-ingredient-removebg-preview.png",
   },

   {
    name:"Multani Mitti Face Wash with Bulgarian Rose For Oil Control & Acne - 100 ml",
    price:"₹227",
    ratings:"5.0",
    reviews:"178",
    imageUrl:"./image3/multani_mitti_face_wash_1-removebg-preview.png"
   },
    {
     name:"Beetroot Daily Glow Face Cream With Beetroot & Hyaluronic Acid - 80 g",
     price:"₹224",
     ratings:"5.0",
     reviews:"50",
     imageUrl:"./image3/1-with-ingredients_11-removebg-preview (1).png",
   },
   {
     name:"Mamaearth Rice Water Dewy Sunscreen with SPF 50 & PA++++ - 50g",
     price:"₹395",
     ratings:"5.0",
     reviews:"4",
     imageUrl:"./image3/with-ingredients_3-removebg-preview.png",
   },
   {
     name:"Ubtan Moisturizing Lotion Soap (Value Pack of 4) - 125 g X 4",
     price:"₹328",
     ratings:"5.0",
     reviews:"110",
     imageUrl:"./image3/front-with-ingredients_4-removebg-preview.png",
   },
   {
     name:"Ultra Light Indian Sunscreen with Carrot Seed, Turmeric and SPF 50 PA+++ - 80g",
     price:"₹429",
     ratings:"4.8",
     reviews:"368",
     imageUrl:"./image3/1-wid-ingredients-removebg-preview.png",
   },
   {
     name:"Bye Bye Blemishes Face Cream for Reducing Pigmentation and Blemishes -30ml",
     price:"₹414",
     ratings:"4.7",
     reviews:"678",
     imageUrl:"./image3/1-with-ingredients_10-removebg-preview.png",
   },
  
   {
     name:"Beetroot Hydraful Sunscreen With Beetroot & Hyaluronic Acid - 50 g",
     price:"₹351",
     ratings:"4.7",
     reviews:"3",
     imageUrl:"./image3/1-with-ingredients_11-removebg-preview (1).png",
   }
];


//product- 6


const mamaearthhaircare = [
  {
      name: "Rosemary Hair Growth Oil with Rosemary & Methi Dana Hair Growth - 150 ml",
      price: "₹298",
      ratings: 4.9,
      reviews: 138,
      imageUrl:"./image3/3_1-removebg-preview.png",
      bgcolor:"##CBE59E",
      circlecolor:"#f7bb42"
  },
  {
      name: "Lemon Anti-Dandruff Shampoo with Lemon &  Itch-free Scalp- 250 ml",
      details:"Gently Cleanses Skin | Hydrates Skin",
      price: "₹307",
      ratings: 4.8,
      reviews: 64,
      imageUrl:"./image3/lemon-anti-dandruff-shampoo_1_1_2-removebg-preview.png",
      bgcolor:"#c4a591",
      circlecolor:"#8e6b54"
  },
  {
     name:"Onion Shampoo with Onion and Plant Keratin for Hair Fall Control - 250ml",
     price:"₹872",
     ratings:"4.2",
     reviews:"890",
     imageUrl:"./image3/_onion-oil-150ml__1-removebg-preview.png",
  },
  {
    name:"Rosemary Anti-Hair Fall Conditioner with Rosemary & Methi Dana  - 250 ml",
    price:"₹300",
    ratings:"4.9",
    reviews:"1734",
    imageUrl:"./image3/3_1-removebg-preview.png",
 },

 {
  name:"Lemon Anti-Dandruff Shampoo Ginger for up to 100% Dandruff- 250 ml",
  price:"₹307",
  ratings:"4.8",
  reviews:"69",
  imageUrl:"./image3/lemon-anti-dandruff-shampoo_1_1_2-removebg-preview.png"
 },
  {
   name:"Mamaearth Hibiscus Damage Repair Shampoo With Hibiscus & Curry Leaves - 250ml",
   price:"₹224",
   ratings:"5.0",
   reviews:"50",
   imageUrl:"./image3/1-with-ingredients_8-removebg-preview.png",
 },
 {
   name:"BhringAmla Shampoo with Bhringraj and Amla for Intense Hair Treatment - 250 ml",
   price:"₹395",
   ratings:"4.9",
   reviews:"490",
   imageUrl:"./image3/bhringamla-shampoo_1_-removebg-preview (1).png",
 },
 {
   name:"Onion Hair Oil with Onion Oil & Redensyl for Hair Fall Control - 150 ml",
   price:"₹368",
   ratings:"4.2",
   reviews:"89",
   imageUrl:"./image3/_onion-oil-150ml__1-removebg-preview.png",
 },
 {
  name:"Rosemary Anti-Hair Fall Conditioner with Rosemary & Methi Dana - 250 ml",
  price:"₹300",
  ratings:"4.9",
  reviews:"1734",
  imageUrl:"./image3/bhringamla-shampoo_1_-removebg-preview (1).png",
 }
];


//product 7


const mamaearthvitaminc = [
  {
      name: "Vitamin C Moisturizing Lotion Soap & Honey for Skin Illumination (Pack Of 4)",
      price: "₹328",
      ratings: 5.0,
      reviews: 111,
      imageUrl:"./image3/front-with-ingredients_5-removebg-preview.png",
      bgcolor:"##CBE59E",
      circlecolor:"#f7bb42"
  },

  {
      name: "Vitamin C Daily Glow Face Cream With Vitamin C & Turmeric for Skin Illumination",
      details:"Gently Cleanses Skin | Hydrates Skin",
      price: "₹343",
      ratings: 4.2,
      reviews: 31,
      imageUrl:"./image3/vit-c-glow-cream1_1_1-removebg-preview.png",
      bgcolor:"#c4a591",
      circlecolor:"#8e6b54"
  },

  {
     name:"Vitamin C Ultra Light Gel Oil-Free Moisturizer for Glowing Hydration - 200 ml",
     price:"₹300",
     ratings:"4.8",
     reviews:"122",
     imageUrl:"./image3/vitamin-c-ultra-light-gel-oil-free-moisturizer-1-removebg-preview.png",
  },
  {
    name:"Vitamin C Body Wash with Vitamin C and Honey for Skin Illumination - 300ml",
    price:"₹215",
    ratings:"4.8",
    reviews:"146",
    imageUrl:"./image3/vitamin-c-body-wash-1_1_53czcglrjlhrmufp-removebg-preview.png",
 }
];


//product-5
var container5=document.querySelector(" .container5")
var card5=document.querySelector(".card")
var imgbx5=document.querySelector(".imgbx")
var img5=document.querySelector("img")
var contentbx5=document.querySelector(".contentBx")
var rating5=document.querySelector(".rating")
var review5=document.querySelector(".review")
var btn5=document.querySelector("button")


//product - 6
 
var container6=document.querySelector(".container6")
var card6=document.querySelector(".card")
var imgbx6=document.querySelector(".imgbx")
var img6=document.querySelector("img")
var contentbx6=document.querySelector(".contentBx")
var rating6=document.querySelector(".rating")
var review6=document.querySelector(".review")
var btn6=document.querySelector("button")

//product-7



var container7=document.querySelector(" .container7")
var card7=document.querySelector(".card")
var imgbx7=document.querySelector(".imgbx")
var img7=document.querySelector("img")
var contentbx7=document.querySelector(".contentBx")
var rating7=document.querySelector(".rating")
var review7=document.querySelector(".review")
var btn7=document.querySelector("button")


//product -5
var card5=""
mamaearthsummerfavorites.forEach(function(value){
  card5+=`
   <div class="card5">
            <div class="imgBx5">
              <img src="${value.imageUrl}">
            </div>
            <div class="contentBx5">
              <h2>${value.name}</h2>
              <div class="rating5">
                <h3>Rating :</h3>
                <span>${value.ratings}</span>
                <i class="ri-star-s-fill color-white"></i>
              </div>
              <div class="review5">
                <h3>Review :${value.reviews}</h3>
              </div>
              <div class="flex justify-center">
              <button
            class="flex gap-6 relative mt-2 py-[4px] px-4  font-medium text-base nded-full overflow-hidden bg-[white] rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-[#67564f] hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#c4efff] before:to-[#c4efff] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
            ADD TO CART <h1>${value.price}<h1>
          </button>
          </div>
            </div>
          </div>
        </div> `
})


container5.innerHTML=card5

//product 6

var card6=""
mamaearthhaircare.forEach(function(value){
  card6+=`
   <div class="card6">
            <div class="imgBx6">
              <img src="${value.imageUrl}">
            </div>
            <div class="contentBx6">
              <h2>${value.name}</h2>
              <div class="rating6">
                <h3>Rating :</h3>
                <span>${value.ratings}</span>
                <i class="ri-star-s-fill color-white"></i>
              </div>
              <div class="review6">
                <h3>Review :${value.reviews}</h3>
              </div>
              <div class="flex justify-center">
              <button
            class="flex gap-6 relative mt-2 py-[4px] px-4  font-medium text-base nded-full overflow-hidden bg-[white] rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-[#67564f] hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#c4efff] before:to-[#c4efff] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
          >
            ADD TO CART <h1>${value.price}</h1>
          </button>
          </div>
            </div>
          </div>
        </div> `
})

container6.innerHTML=card6



var card7=""
//product 7
mamaearthvitaminc.forEach(function(value){
  card7+=`
   <div class="card7">
            <div class="imgBx7">
              <img src="${value.imageUrl}">
            </div>
            <div class="contentBx7">
              <h2>${value.name}</h2>
              <div class="rating7">
                <h3>Rating :</h3>
                <span>${value.ratings}</span>
                <i class="ri-star-s-fill color-white"></i>
              </div>
              <div class="review7">
                <h3>Review :${value.reviews}</h3>
              </div>
              <div class="flex justify-center">
              <button
            class="flex gap-6 relative mt-2 py-[4px] px-4  font-medium text-base nded-full overflow-hidden bg-[white] rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-[#67564f] hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#c4efff] before:to-[#c4efff] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
          >
            ADD TO CART <h1>${value.price}</h1>
          </button>
          </div>
            </div>
          </div>
        </div> `
})

console.log(card7)
container7.innerHTML=card7

// container5.addEventListener("wheel",function(evt){
//   evt.preventDefault();
//   container5.scrollLeft +=evt.deltaY
// })

// container6.addEventListener("wheel",function(evt){
//   evt.preventDefault();
//   container6.scrollLeft +=evt.deltaY
// })
// container7.addEventListener("wheel",function(evt){
//   evt.preventDefault();
//   container7.scrollLeft +=evt.deltaY
// })



var heading = document.querySelector(".reviews .heading .head")
var image = document.querySelector(".reviews .heading .image")
var leftcursero = document.querySelector(".leftcursero")
var rightcursero = document.querySelector(".rightcursero")
var slides = document.querySelector(".reviews .cards .maincontainer")
var logooneimg = document.querySelector(".safety .one .logo img")
var logoone = document.querySelector(".safety .one .logo")
var matterone = document.querySelector(".safety .one .matter")
var logotwoimg = document.querySelector(".safety .two .logo img")
var logotwo = document.querySelector(".safety .two .logo")
var mattertwo = document.querySelector(".safety .two .matter")
var logothreeimg = document.querySelector(".safety .three .logo img")
var logothree = document.querySelector(".safety .three .logo")
var matterthree = document.querySelector(".safety .three .matter") 
var line = document.querySelector(".reviews .heading .line")

heading.addEventListener("mouseenter",function(){
   image.style.top = "-70%"
})

var slidero = 0
rightcursero.addEventListener("click",function(){
   if(slidero < 4000){
       slidero += 800
   slides.style.left = "-" + slidero + "px"
   }
})
leftcursero.addEventListener("click",function(){
   if (slidero > 0){
      slidero -= 800
   slides.style.left =  "-" + slidero + "px"
   }
})

logoone.addEventListener("mousemove",function(){
   logoone.style.left = "-10%"
   matterone.style.left = "-10%"
})
logooneimg.addEventListener("mouseleave",function(){
   logoone.style.left = "0%"
   matterone.style.left = "-72%"
})
logotwoimg.addEventListener("mousemove",function(){
   logotwo.style.left = "-10%"
   mattertwo.style.left = "-10%"
})
logotwoimg.addEventListener("mouseleave",function(){
   logotwo.style.left = "0%"
   mattertwo.style.left = "-72%"
})
logothreeimg.addEventListener("mousemove",function(){
   logothree.style.left = "-10%"
   matterthree.style.left = "-10%"
})
logothreeimg.addEventListener("mouseleave",function(){
   logothree.style.left = "0%"
   matterthree.style.left = "-72%"
})
