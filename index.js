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
            document.getElementById("img").setAttribute("src","img/8.png")
            alert("la partie est terminée")
            window.location.reload()
        }
        
        let answer = "";
        
        for (let i = 0; i < arMot.length; i++) {
            answer += document.querySelectorAll("span")[i].innerText
        }
        if (answer == mot) {
            alert(" Vous avez gagné ! ;) \n Vous avez trouvé le mot " + answer)
            alert(" Vous avez fait "+(img-1)+" erreur(s)"+"\n Cliquez pour rejouer")
            window.location.reload()
        }
        console.log(answer);
    })
})


