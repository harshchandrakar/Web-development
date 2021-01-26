var headone = document.querySelector('#one')
var headtwo = document.querySelector('#two')
var headthree = document.querySelector('#three')

headone.addEventListener("mouseover",function(){
  headone.textContent = "mouse currently over";
  headone.style.color = "red";
})
headone.addEventListener("mouseout",function(){
  headone.textContent = "HOVER OVER ME!"
  headone.style.color = "black";
})
headtwo.addEventListener("click",function(){
  headtwo.innerHtml = "<a href="https://www.facebook.com">CLICK ME!</a>"
})
headtwo.addEventListener("")
