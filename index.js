let img = 1;
document.getElementById("bonhomme").insertAdjacentHTML("afterbegin",'<img id="img" src="img/'+(img++)+'.png" alt="bonhomme" style = "margin: 50%">')

let mots = ["VOITURE", "TELEPHONE", "SAC","REUNION", "POMME", "SOURIS","ABEILLE","MIEL","RAT","CHIEN","CHAT","BEBE","MAMAN"]
let mot = mots[Math.floor(Math.random()*mots.length)]
let arMot = mot.split("")

console.log(mot);
console.log(arMot);

for(let i=0; i < mot.length; i++){
    document.getElementById("code").insertAdjacentHTML("beforeend",'<span> _ </span>')  // si on veut donner des id numéro: id = "'+i+'"
}

// console.log(document.querySelectorAll("button")[0].innerText);

document.querySelectorAll("button").forEach(function(button) {
    button.addEventListener("click", function(){

        // arMot.forEach(element => {});

        if(arMot.includes(button.innerText)){

            // document.querySelectorAll("span")[mot.indexOf(button.innerText)].innerText = button.innerText
            // probleme : si le mot contient plusieur fois cette lettre, ça ne va afficher que le premier

            for (let i = 0; i < arMot.length; i++ ){
                if (arMot[i] == button.innerText) {
                    document.querySelectorAll("span")[i].innerText = button.innerText
                }
                // document.querySelectorAll("span")[mot.indexOf(button.innerText,i)].innerText = button.innerText
                // fonctionne, mais crée un bug qui empeche le script de continuer à se lire... 
            } 
        }else{
           document.getElementById("img").setAttribute("src","img/"+(img++)+".png")
        }

        if(img == 8){
            document.getElementById("bouttons").remove()
            document.getElementById("img").setAttribute("src","img/7.png")
            document.getElementById("code").insertAdjacentHTML("afterend",'<div id = "gameOver"><h1 style = "margin: 5px 0px; font-size: 25px"> Vous avez perdu </h1></div>') 
            document.getElementById("gameOver").insertAdjacentHTML("beforebegin",'<img src="img/8.png">') 
            document.getElementById("gameOver").insertAdjacentHTML("beforeend",'<h2 style = "margin: 0px; font-size: 20px"> Le mot secret était: '+mot+'</h2>') 
            document.getElementById("gameOver").insertAdjacentHTML("beforeend",'<button id = "rejouer" style = "text-align: center; background-color: blue; color: white; border-radius: 5%; margin-left: 22%"> Rejouer </button>') 
            document.getElementById("rejouer").addEventListener("click", function(){
                window.location.reload()
            })
            // alert("la partie est terminée")
            // window.location.reload()
        }
        
        let answer = "";
        
        for (let i = 0; i < arMot.length; i++) {
            answer += document.querySelectorAll("span")[i].innerText
        }
        if (answer == mot) {
            document.getElementById("bouttons").remove()
            document.getElementById("code").insertAdjacentHTML("afterend",'<div id = "win"><h1 style = "margin: 5px 0px; font-size: 25px"> BRAVO! </h1></div>') 
            document.getElementById("win").insertAdjacentHTML("beforeend",'<button id = "rejouer" style = "text-align: center; background-color: blue; color: white; border-radius: 5%; margin-left: 22%"> Rejouer </button>') 
            document.getElementById("rejouer").insertAdjacentHTML("beforebegin",'<img src="img/win.gif" width = "180px"> <br>') 
            document.getElementById("rejouer").addEventListener("click", function(){
                window.location.reload()
            })

            // alert(" Vous avez gagné ! ;) \n Vous avez trouvé le mot " + answer)
            // alert(" Vous avez fait "+(img-1)+" erreur(s)"+"\n Cliquez pour rejouer")
            // window.location.reload()
        }
        console.log(answer);
    })
})


