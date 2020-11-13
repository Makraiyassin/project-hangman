let img = 1
document.getElementById("bonhomme").insertAdjacentHTML("afterbegin",'<img id="img" src="img/'+(img++)+'.png" alt="bonhomme" style = "margin: 50%">')

let mots = ["VOITURE", "TELEPHONE", "SAC","REUNION", "POMME", "SOURIS"]
let mot = mots[Math.floor(Math.random()*6)]
let armot = mot.split("")
console.log(mot);
console.log(armot);

for(let i=0; i < mot.length; i++){
    document.getElementById("code").insertAdjacentHTML("beforeend",'<span id = "'+i+'"> _ </span>')
}

console.log(document.querySelectorAll("button")[0].innerText);

document.querySelectorAll("button").forEach(function(button) {
    button.addEventListener("click", function(){

        if(armot.includes(button.innerText) /*se trouve dans la string "mot"*/){
            alert("ok")
        }else{
           document.getElementById("img").setAttribute("src","img/"+(img++)+".png")
        }

        if(img == 9){
            document.getElementById("img").setAttribute("src","img/8.png")
            alert("la partie est terminée")
            window.location.reload()
        }
    })
})

