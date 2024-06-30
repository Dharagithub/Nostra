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