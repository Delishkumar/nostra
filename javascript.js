var pop = document.getElementById("popup")
var butn = document.getElementById("close")
butn.addEventListener("click",function(){
  pop.style.display = "none"
})


let slidemenu = document.querySelector(".slideoption")
let menubutn = document.getElementById("menubutn")
let cut = document.getElementById("cut") 
menubutn.addEventListener("click",function(){
    slidemenu.style.display="flex"
})
cut.addEventListener("click",function(){
    slidemenu.style.display="none"
})



