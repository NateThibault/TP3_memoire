// Validation du fomrulaire
const nomJoueur = document.getElementById("nom")
const prenom = document.getElementById("prenom")
const nbPair = document.getElementById("pair")
const form = document.getElementById("form")
const button = document.getElementById("go")
const erreurNom = document.getElementById("erreurNom")
const erreurPair = document.getElementById("erreurPair")
const tableau = document.getElementById("flex")

button.addEventListener("click" , (e) => {

    let messageNom = []
    let messagePair = []

    if (prenom.value === "" || prenom.value == null) {
        messageNom.push("*Votre nom est requis ! ")
    }
    if (prenom.value == parseInt(prenom.value)) {
        messageNom.push("*Entrer seulement des lettres ! ")
    }
    if (nbPair.value < 2 || nbPair.value > 10 ){
        messagePair.push("*Entrer un nombre de pair entre 2 et 10 ! ")
    }
    if(messageNom.length > 0) {
        e.preventDefault()
        erreurNom.innerText = messageNom.join(", ")
    }
    if(messagePair.length > 0) {
        e.preventDefault()
        erreurPair.innerText = messagePair.join(", ")
    }
    
    if(prenom.value != parseInt(prenom.value) && prenom.value != "" && nbPair.value >= 2 && nbPair.value <= 10 ){
        return startGame()
    }
    

})


tableau.style.visibility="hidden" // cacher le tableau de jeux 

// STARTGAME 

function startGame(){

    document.getElementById("formulaire").style.display = "none"; // supprimer mon formulaire après validation
    nomJoueur.innerText = "Nom du joueur : " + prenom.value // affiche le nom du joueur
    document.getElementById("nom").style.visibility="visible"



    // Condition nombre de pair
    if(nbPair.value == 2){
        tableau.style.visibility="visible"
        const listeImage = [1,1,2,2]
        const nbAleatoire = listeImage.sort(() => 0.5 - Math.random())
        document.getElementById("cell1").innerHTML = nbAleatoire[0]
        document.getElementById("cell2").innerHTML = nbAleatoire[1]
        document.getElementById("cell3").innerHTML = nbAleatoire[2]
        document.getElementById("cell4").innerHTML = nbAleatoire[3]

        document.getElementById("t5").style.display = "none"
        document.getElementById("t6").style.display = "none"
        document.getElementById("t7").style.display = "none"
        document.getElementById("t8").style.display = "none"
        document.getElementById("t9").style.display = "none"
        document.getElementById("t10").style.display = "none"
        document.getElementById("t11").style.display = "none"
        document.getElementById("t12").style.display = "none"
        document.getElementById("t13").style.display = "none"
        document.getElementById("t14").style.display = "none"
        document.getElementById("t15").style.display = "none"
        document.getElementById("t16").style.display = "none"
        document.getElementById("t17").style.display = "none"
        document.getElementById("t18").style.display = "none"
        document.getElementById("t19").style.display = "none"
        document.getElementById("t20").style.display = "none"

        

    }

    if(nbPair.value == 3){
        tableau.style.visibility="visible"
        const listeImage = [1,1,2,2,3,3]
        const nbAleatoire = listeImage.sort(() => 0.5 - Math.random())
        document.getElementById("cell1").innerHTML = nbAleatoire[0]
        document.getElementById("cell2").innerHTML = nbAleatoire[1]
        document.getElementById("cell3").innerHTML = nbAleatoire[2]
        document.getElementById("cell4").innerHTML = nbAleatoire[3]
        document.getElementById("cell5").innerHTML = nbAleatoire[4]
        document.getElementById("cell6").innerHTML = nbAleatoire[5]
        document.getElementById("t7").style.display = "none"
        document.getElementById("t8").style.display = "none"
        document.getElementById("t9").style.display = "none"
        document.getElementById("t10").style.display = "none"
        document.getElementById("t11").style.display = "none"
        document.getElementById("t12").style.display = "none"
        document.getElementById("t13").style.display = "none"
        document.getElementById("t14").style.display = "none"
        document.getElementById("t15").style.display = "none"
        document.getElementById("t16").style.display = "none"
        document.getElementById("t17").style.display = "none"
        document.getElementById("t18").style.display = "none"
        document.getElementById("t19").style.display = "none"
        document.getElementById("t20").style.display = "none"
    }

    if(nbPair.value == 4){
        tableau.style.visibility="visible"
        const listeImage = [1,1,2,2,3,3,4,4]
        const nbAleatoire = listeImage.sort(() => 0.5 - Math.random())
        document.getElementById("cell1").innerHTML = nbAleatoire[0]
        document.getElementById("cell2").innerHTML = nbAleatoire[1]
        document.getElementById("cell3").innerHTML = nbAleatoire[2]
        document.getElementById("cell4").innerHTML = nbAleatoire[3]
        document.getElementById("cell5").innerHTML = nbAleatoire[4]
        document.getElementById("cell6").innerHTML = nbAleatoire[5]
        document.getElementById("cell7").innerHTML = nbAleatoire[6]
        document.getElementById("cell8").innerHTML = nbAleatoire[7]
        document.getElementById("t9").style.display = "none"
        document.getElementById("t10").style.display = "none"
        document.getElementById("t11").style.display = "none"
        document.getElementById("t12").style.display = "none"
        document.getElementById("t13").style.display = "none"
        document.getElementById("t14").style.display = "none"
        document.getElementById("t15").style.display = "none"
        document.getElementById("t16").style.display = "none"
        document.getElementById("t17").style.display = "none"
        document.getElementById("t18").style.display = "none"
        document.getElementById("t19").style.display = "none"
        document.getElementById("t20").style.display = "none"
    }
    
    if(nbPair.value == 5){
        tableau.style.visibility="visible"
        const listeImage = [1,1,2,2,3,3,4,4,5,5]
        const nbAleatoire = listeImage.sort(() => 0.5 - Math.random())
        document.getElementById("cell1").innerHTML = nbAleatoire[0]
        document.getElementById("cell2").innerHTML = nbAleatoire[1]
        document.getElementById("cell3").innerHTML = nbAleatoire[2]
        document.getElementById("cell4").innerHTML = nbAleatoire[3]
        document.getElementById("cell5").innerHTML = nbAleatoire[4]
        document.getElementById("cell6").innerHTML = nbAleatoire[5]
        document.getElementById("cell7").innerHTML = nbAleatoire[6]
        document.getElementById("cell8").innerHTML = nbAleatoire[7]
        document.getElementById("cell9").innerHTML = nbAleatoire[8]
        document.getElementById("cell10").innerHTML = nbAleatoire[9]
        document.getElementById("t11").style.display = "none"
        document.getElementById("t12").style.display = "none"
        document.getElementById("t13").style.display = "none"
        document.getElementById("t14").style.display = "none"
        document.getElementById("t15").style.display = "none"
        document.getElementById("t16").style.display = "none"
        document.getElementById("t17").style.display = "none"
        document.getElementById("t18").style.display = "none"
        document.getElementById("t19").style.display = "none"
        document.getElementById("t20").style.display = "none"
    }

    if(nbPair.value == 6){
        tableau.style.visibility="visible"
        const listeImage = [1,1,2,2,3,3,4,4,5,5,6,6]
        const nbAleatoire = listeImage.sort(() => 0.5 - Math.random())
        document.getElementById("cell1").innerHTML = nbAleatoire[0]
        document.getElementById("cell2").innerHTML = nbAleatoire[1]
        document.getElementById("cell3").innerHTML = nbAleatoire[2]
        document.getElementById("cell4").innerHTML = nbAleatoire[3]
        document.getElementById("cell5").innerHTML = nbAleatoire[4]
        document.getElementById("cell6").innerHTML = nbAleatoire[5]
        document.getElementById("cell7").innerHTML = nbAleatoire[6]
        document.getElementById("cell8").innerHTML = nbAleatoire[7]
        document.getElementById("cell9").innerHTML = nbAleatoire[8]
        document.getElementById("cell10").innerHTML = nbAleatoire[9]
        document.getElementById("cell11").innerHTML = nbAleatoire[10]
        document.getElementById("cell12").innerHTML = nbAleatoire[11]
        document.getElementById("t13").style.display = "none"
        document.getElementById("t14").style.display = "none"
        document.getElementById("t15").style.display = "none"
        document.getElementById("t16").style.display = "none"
        document.getElementById("t17").style.display = "none"
        document.getElementById("t18").style.display = "none"
        document.getElementById("t19").style.display = "none"
        document.getElementById("t20").style.display = "none"
    }
    
    if(nbPair.value == 7){
        tableau.style.visibility="visible"
        const listeImage = [1,1,2,2,3,3,4,4,5,5,6,6,7,7]
        const nbAleatoire = listeImage.sort(() => 0.5 - Math.random())
        document.getElementById("cell1").innerHTML = nbAleatoire[0]
        document.getElementById("cell2").innerHTML = nbAleatoire[1]
        document.getElementById("cell3").innerHTML = nbAleatoire[2]
        document.getElementById("cell4").innerHTML = nbAleatoire[3]
        document.getElementById("cell5").innerHTML = nbAleatoire[4]
        document.getElementById("cell6").innerHTML = nbAleatoire[5]
        document.getElementById("cell7").innerHTML = nbAleatoire[6]
        document.getElementById("cell8").innerHTML = nbAleatoire[7]
        document.getElementById("cell9").innerHTML = nbAleatoire[8]
        document.getElementById("cell10").innerHTML = nbAleatoire[9]
        document.getElementById("cell11").innerHTML = nbAleatoire[10]
        document.getElementById("cell12").innerHTML = nbAleatoire[11]
        document.getElementById("cell13").innerHTML = nbAleatoire[12]
        document.getElementById("cell14").innerHTML = nbAleatoire[13]
        document.getElementById("t15").style.display = "none"
        document.getElementById("t16").style.display = "none"
        document.getElementById("t17").style.display = "none"
        document.getElementById("t18").style.display = "none"
        document.getElementById("t19").style.display = "none"
        document.getElementById("t20").style.display = "none"
    }

    if(nbPair.value == 8){
        tableau.style.visibility="visible"
        const listeImage = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
        const nbAleatoire = listeImage.sort(() => 0.5 - Math.random())
        document.getElementById("cell1").innerHTML = nbAleatoire[0]
        document.getElementById("cell2").innerHTML = nbAleatoire[1]
        document.getElementById("cell3").innerHTML = nbAleatoire[2]
        document.getElementById("cell4").innerHTML = nbAleatoire[3]
        document.getElementById("cell5").innerHTML = nbAleatoire[4]
        document.getElementById("cell6").innerHTML = nbAleatoire[5]
        document.getElementById("cell7").innerHTML = nbAleatoire[6]
        document.getElementById("cell8").innerHTML = nbAleatoire[7]
        document.getElementById("cell9").innerHTML = nbAleatoire[8]
        document.getElementById("cell10").innerHTML = nbAleatoire[9]
        document.getElementById("cell11").innerHTML = nbAleatoire[10]
        document.getElementById("cell12").innerHTML = nbAleatoire[11]
        document.getElementById("cell13").innerHTML = nbAleatoire[12]
        document.getElementById("cell14").innerHTML = nbAleatoire[13]
        document.getElementById("cell15").innerHTML = nbAleatoire[14]
        document.getElementById("cell16").innerHTML = nbAleatoire[15]
        document.getElementById("t17").style.display = "none"
        document.getElementById("t18").style.display = "none"
        document.getElementById("t19").style.display = "none"
        document.getElementById("t20").style.display = "none"
    }
    
    if(nbPair.value == 9){
        tableau.style.visibility="visible"
        const listeImage = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]
        const nbAleatoire = listeImage.sort(() => 0.5 - Math.random())
        document.getElementById("cell1").innerHTML = nbAleatoire[0]
        document.getElementById("cell2").innerHTML = nbAleatoire[1]
        document.getElementById("cell3").innerHTML = nbAleatoire[2]
        document.getElementById("cell4").innerHTML = nbAleatoire[3]
        document.getElementById("cell5").innerHTML = nbAleatoire[4]
        document.getElementById("cell6").innerHTML = nbAleatoire[5]
        document.getElementById("cell7").innerHTML = nbAleatoire[6]
        document.getElementById("cell8").innerHTML = nbAleatoire[7]
        document.getElementById("cell9").innerHTML = nbAleatoire[8]
        document.getElementById("cell10").innerHTML = nbAleatoire[9]
        document.getElementById("cell11").innerHTML = nbAleatoire[10]
        document.getElementById("cell12").innerHTML = nbAleatoire[11]
        document.getElementById("cell13").innerHTML = nbAleatoire[12]
        document.getElementById("cell14").innerHTML = nbAleatoire[13]
        document.getElementById("cell15").innerHTML = nbAleatoire[14]
        document.getElementById("cell16").innerHTML = nbAleatoire[15]
        document.getElementById("cell17").innerHTML = nbAleatoire[16]
        document.getElementById("cell18").innerHTML = nbAleatoire[17]
        document.getElementById("t19").style.display = "none"
        document.getElementById("t20").style.display = "none"
    }

    if(nbPair.value == 10){
        tableau.style.visibility="visible"
        const listeImage = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]
        const nbAleatoire = listeImage.sort(() => 0.5 - Math.random())
        document.getElementById("cell1").innerHTML = nbAleatoire[0]
        document.getElementById("cell2").innerHTML = nbAleatoire[1]
        document.getElementById("cell3").innerHTML = nbAleatoire[2]
        document.getElementById("cell4").innerHTML = nbAleatoire[3]
        document.getElementById("cell5").innerHTML = nbAleatoire[4]
        document.getElementById("cell6").innerHTML = nbAleatoire[5]
        document.getElementById("cell7").innerHTML = nbAleatoire[6]
        document.getElementById("cell8").innerHTML = nbAleatoire[7]
        document.getElementById("cell9").innerHTML = nbAleatoire[8]
        document.getElementById("cell10").innerHTML = nbAleatoire[9]
        document.getElementById("cell11").innerHTML = nbAleatoire[10]
        document.getElementById("cell12").innerHTML = nbAleatoire[11]
        document.getElementById("cell13").innerHTML = nbAleatoire[12]
        document.getElementById("cell14").innerHTML = nbAleatoire[13]
        document.getElementById("cell15").innerHTML = nbAleatoire[14]
        document.getElementById("cell16").innerHTML = nbAleatoire[15]
        document.getElementById("cell17").innerHTML = nbAleatoire[16]
        document.getElementById("cell18").innerHTML = nbAleatoire[17]
        document.getElementById("cell19").innerHTML = nbAleatoire[18]
        document.getElementById("cell20").innerHTML = nbAleatoire[19]


    }
    
    

    






        

    
        

    
    // TIMER 5 MIN 
    const timeH = document.querySelector("h2")
    let timeSecond = 300

    displayTime(timeSecond)

    const countDown = setInterval (()=>{
        timeSecond--
        displayTime(timeSecond)
        if(timeSecond <= 0 || timeSecond < 1){
            endtime()
            clearInterval(countDown)
        }
    },1000)

    function displayTime(second){
        const min = Math.floor(second / 60)
        const sec = Math.floor(second % 60)
        timeH.innerHTML= `${min<10 ? "0" : ""}${min}:${sec<10?"0":""}${sec}`
    }

    function endtime(){
        timeH.innerHTML = "PARTIE TERMINÉ , VOUS AVEZ PERDU !"
        document.getElementById("flex").style.display = "none"
        
    }
}