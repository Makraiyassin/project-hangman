let img = 1
document.getElementById("bonhomme").insertAdjacentHTML("afterbegin",'<img id="img" src="img/'+(img++)+'.png" alt="bonhomme" style = "margin: 50%">')

let mots = ["VOITURE", "TELEPHONE", "SAC","REUNION", "POMME", "SOURIS"]
let mot = mots[Math.floor(Math.random()*6)]
let arMot = mot.split("")

console.log(mot);
console.log(arMot);


for(let i=0; i < mot.length; i++){
    document.getElementById("code").insertAdjacentHTML("beforeend",'<span> _ </span>')  // si on veut donner des id numéro: id = "'+i+'"
}

console.log(document.querySelectorAll("button")[0].innerText);

document.querySelectorAll("button").forEach(function(button) {
    button.addEventListener("click", function(){

        // arMot.forEach(element => {});

        if(arMot.includes(button.innerText)){
            document.querySelectorAll("span")[mot.indexOf(button.innerText)].innerText = button.innerText
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

