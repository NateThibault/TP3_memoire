// Validation du fomrulaire
const nomJoueur = document.getElementById("nom")
const prenom = document.getElementById("prenom")
const nbPair = document.getElementById("pair")
const form = document.getElementById("form")
const button = document.getElementById("go")
const erreurNom = document.getElementById("erreurNom")
const erreurPair = document.getElementById("erreurPair")

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




// TIMER + SUPPRIMER FORMULAIRE 

function startGame(){
    document.getElementById("formulaire").style.display = "none"; // supprimer mon formulaire après validation
    nomJoueur.innerText = "Nom du joueur : " + prenom.value // affiche le nom du joueur


    listeImage = [
        "amazon.png",
        "bitcoin.png",
        "github.png",
        "google.png",
        "skype.png",
        "steam.png",
        "twitch.png",
        "window.png",
        "wordpress.png",
        "youtube.png"
    ]

    function getRamdomImage(){


        randomIndex = Math.floor(Math.random() * listeImage.length)
        randomIndex2 = Math.floor(Math.random() * listeImage.length)
        imageGenerer = listeImage[randomIndex]
        imageGenerer2 = listeImage[randomIndex2]
        document.getElementById("img1").src = `./img/${imageGenerer} `
        document.getElementById("img2").src = `./img/${imageGenerer2} `
        document.getElementById("img3").src = `./img/${imageGenerer} `
        document.getElementById("img4").src = `./img/${imageGenerer2} `
    }











    
    // Afficher la bonne table de jeux selon le nombre de paire entré
    if(nbPair.value == 2){
        document.getElementById("jeux2").style.visibility = "visible"
        getRamdomImage()
    }   
    if(nbPair.value == 3){
        document.getElementById("jeux2").style.display = "none" //Supprimer la table de jeux #2
        document.getElementById("jeux3").style.visibility = "visible" // rendre visible la table de jeux #3
        getRamdomImage()
    }
    if(nbPair.value == 4){
        document.getElementById("jeux2").style.display = "none"
        document.getElementById("jeux3").style.display = "none"
        document.getElementById("jeux4").style.visibility = "visible" 
    }
    if(nbPair.value == 5){
        document.getElementById("jeux2").style.display = "none"
        document.getElementById("jeux3").style.display = "none"
        document.getElementById("jeux4").style.display = "none"
        document.getElementById("jeux5").style.visibility = "visible" 
    }
    if(nbPair.value == 6){
        document.getElementById("jeux2").style.display = "none"
        document.getElementById("jeux3").style.display = "none"
        document.getElementById("jeux4").style.display = "none"
        document.getElementById("jeux5").style.display = "none"
        document.getElementById("jeux6").style.visibility = "visible" 
    }
    if(nbPair.value == 7){
        document.getElementById("jeux2").style.display = "none"
        document.getElementById("jeux3").style.display = "none"
        document.getElementById("jeux4").style.display = "none"
        document.getElementById("jeux5").style.display = "none"
        document.getElementById("jeux6").style.display = "none"
        document.getElementById("jeux7").style.visibility = "visible" 
    }
    if(nbPair.value == 8){
        document.getElementById("jeux2").style.display = "none"
        document.getElementById("jeux3").style.display = "none"
        document.getElementById("jeux4").style.display = "none"
        document.getElementById("jeux5").style.display = "none"
        document.getElementById("jeux6").style.display = "none"
        document.getElementById("jeux7").style.display = "none"
        document.getElementById("jeux8").style.visibility = "visible" 
    }
    if(nbPair.value == 9){
        document.getElementById("jeux2").style.display = "none"
        document.getElementById("jeux3").style.display = "none"
        document.getElementById("jeux4").style.display = "none"
        document.getElementById("jeux5").style.display = "none"
        document.getElementById("jeux6").style.display = "none"
        document.getElementById("jeux7").style.display = "none"
        document.getElementById("jeux8").style.display = "none"
        document.getElementById("jeux9").style.visibility = "visible" 
    }
    if(nbPair.value == 10){
        document.getElementById("jeux2").style.display = "none"
        document.getElementById("jeux3").style.display = "none"
        document.getElementById("jeux4").style.display = "none"
        document.getElementById("jeux5").style.display = "none"
        document.getElementById("jeux6").style.display = "none"
        document.getElementById("jeux7").style.display = "none"
        document.getElementById("jeux8").style.display = "none"
        document.getElementById("jeux9").style.display = "none"
        document.getElementById("jeux10").style.visibility = "visible" 
    }
    


    // TIMER 5 MIN 
    const timeH = document.querySelector("h2")
    let timeSecond = 10

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
        document.getElementById("jeux2").style.display = "none"
        document.getElementById("jeux3").style.display = "none"
        document.getElementById("jeux4").style.display = "none"
        document.getElementById("jeux5").style.display = "none"
        document.getElementById("jeux6").style.display = "none"
        document.getElementById("jeux7").style.display = "none"
        document.getElementById("jeux8").style.display = "none"
        document.getElementById("jeux9").style.display = "none"
        document.getElementById("jeux10").style.display = "none"
    }



}





