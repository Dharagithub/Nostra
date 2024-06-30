var sidenav= document.getElementById("sidenav")
var menuitem= document.getElementById("menuitem")
var closenav= document.getElementById("closenav")

var offer = document.getElementById("offer")

menuitem.addEventListener("click",function(){
    sidenav.style.left=0
})

closenav.addEventListener("click", function(){
    sidenav.style.left= "-50%"
})

document.getElementById("close").addEventListener("click", function(){
    offer.style.display="none"
})


var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-image-container")
var slidermargin=0

console.log(sliderleftbutton)

sliderrightbutton.addEventListener("click",

function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
   

}
)

sliderleftbutton.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
    
}
)
