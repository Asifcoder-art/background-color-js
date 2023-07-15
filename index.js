let btn = document.getElementById("btn")
let color = document.querySelector(".color")





btn.addEventListener("click",function(){
    let value = "0123456789ABCDEF"
    var cons = "#"
    for(let i = 0; i<6; i++){
        cons+= value[Math.floor(Math.random()*16)]
    }
    document.body.style.backgroundColor = cons
    color.textContent = cons
});


